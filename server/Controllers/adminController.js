const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Admin = require("../Models/Admin");
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "ss";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "ss";
const axios = require("axios");
const requestIp = require("request-ip");
const dns = require("dns");

const generateAccessToken = (admin) => {
  return jwt.sign({ id: admin._id }, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

const generateRefreshToken = (admin) => {
  return jwt.sign({ id: admin._id }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

const registerAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await argon2.hash(password);

    const newAdmin = new Admin({
      email,
      password: hashedPassword,
      adminRefreshToken: "",
    });

    await newAdmin.save();
    res.status(201).json({ message: "تم تسجيل المسؤول بنجاح" });
  } catch (error) {
    res.status(500).json({ error: "فشل في تسجيل المسؤول", err: error });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const loginTime = new Date().toLocaleString("en-US", {
    timeZone: "Africa/Cairo",
  });
  const ipAddress = requestIp.getClientIp(req);
  let location = "Unknown";
  let hostname = "Unknown";

  if (
    ipAddress &&
    !ipAddress.startsWith("127.") &&
    !ipAddress.startsWith("::1")
  ) {
    dns.reverse(ipAddress, (err, hostnames) => {
      if (!err) hostname = hostnames[0] || "Unknown";
    });

    try {
      const ipDetails = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
      if (!ipDetails.data.error) {
        location =
          ipDetails.data.city ?
            `${ipDetails.data.city}, ${ipDetails.data.country_name}`
          : "Unknown";
      }
    } catch (error) {}
  } else {
    location = "Localhost";
  }

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(400)
        .json({ error: "ليس هنالك حساب بهذا البريد الالكتروني" });
    }

    const validPassword = await argon2.verify(admin.password, password);
    if (!validPassword) {
      return res.status(400).json({ error: "كلمة المرور غير صحيحة" });
    }

    const accessToken = generateAccessToken(admin);
    const refreshToken = generateRefreshToken(admin);
    admin.adminRefreshToken = refreshToken;
    await admin.save();

    res.status(200).json({
      accessToken,
      refreshToken,
      hostname,
      location,
    });
  } catch (error) {
    res.status(500).json({ error: "فشل في تسجيل الدخول" });
  }
};

const refreshToken = async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).json({ error: "الرمز مطلوب" });

  try {
    const admin = await Admin.findOne({ adminRefreshToken: token });
    if (!admin) return res.status(403).json({ error: "رمز التحديث غير صالح" });

    jwt.verify(token, REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ error: "رمز التحديث غير صالح" });
      const newAccessToken = generateAccessToken(admin);
      res.status(200).json({ accessToken: newAccessToken });
    });
  } catch (error) {
    res.status(500).json({ error: "فشل في تحديث الرمز" });
  }
};

const getAdminWithToken = async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).json({ error: "الرمز مطلوب" });

  try {
    const admin = await Admin.findOne({ adminRefreshToken: token }).select(
      "-password",
    );
    if (!admin) return res.status(403).json({ error: "رمز غير صالح" });
    res.status(200).json(admin.email);
  } catch (error) {
    res.status(500).json({ error: "فشل في استرداد بيانات المسؤول" });
  }
};

module.exports = {
  loginAdmin,
  registerAdmin,
  refreshToken,
  getAdminWithToken,
};
