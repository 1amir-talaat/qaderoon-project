import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import AllArticles from "./pages/AllArticles";
import ArticleDetails from "./pages/ArticleDetails.jsx";
import AddNews from "./dashboard/AddNews";
import Whowe from "./components/AboutUS/WhoWe/Whowe";
import Speech from "./components/AboutUS/Speech/Speech";
import Governorates from "./components/AboutUS/Governorates/Governorates";
import SuccessPartners from "./components/AboutUS/SuccessPartners/SuccessPartners";
import Units from "./components/AboutUS/Units/units.jsx";
import Offices from "./components/AboutUS/Offices/Offices";
import News from "./pages/News";
import ScrollToTop from "./utils/ScrollToTop";
import AddAuthor from "./dashboard/AddAuthor";
import Board from "./components/AboutUS/BoardofTrustees/Board";
import ComingSoon from "./utils/CoomingSoon/ComingSoon";
import AdminLogin from "./dashboard/AdminLogin.jsx";
import Dashboard from "./dashboard/Dashboard";
import Supreme from "./components/AboutUS/Supreme/Supreme";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import DashboardActions from "./dashboard/DashboardActions.jsx";
import AddArticle from "./dashboard/AddArticle.jsx";

function App() {
  // initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      {/* Ensures the page scrolls to the top on route change */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="contact" element={<ContactUs />} />

        {/* Dashboard Routes */}
        <Route path="dashboard">
          {/* Login (public) */}
          <Route path="login" element={<AdminLogin />} />
            {/* Protected Routes (wrapped in Dashboard layout) */}
          <Route element={<Dashboard />}>
            <Route index element={<DashboardActions />} />
            <Route path="add-article" element={<AddArticle />} />
            <Route path="add-news" element={<AddNews />} />
            <Route path="add-author" element={<AddAuthor />} />
          </Route>
        </Route>

         {/* من نحن Section */}
        <Route path="/about/institution" element={<Whowe />} />
        <Route path="/about/speech" element={<Speech />} />
        <Route path="/about/governorates" element={<Governorates />} />
        <Route path="/about/success-partners" element={<SuccessPartners />} />
        <Route path="/about/offices" element={<Offices />} />
        <Route path="/about/board" element={<Board />} />
        <Route path="/about/units" element={<Units />} />
        <Route path="/about/supreme-advisory" element={<Supreme />} />

        <Route path="*" element={<ComingSoon />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
