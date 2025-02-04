import { useEffect, lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

// Import Static Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import ComingSoon from "./utils/CoomingSoon/ComingSoon";
import JoinUs from "./pages/Join-us/Join-us.jsx";

// Lazy Loaded Components
const Home = lazy(() => import("./pages/Home"));
const AllArticles = lazy(() => import("./pages/AllArticles"));
const Details = lazy(() => import("./pages/Details.jsx"));
const News = lazy(() => import("./pages/News"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs.jsx"));

// Dashboard Lazy Loading
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const AdminLogin = lazy(() => import("./dashboard/AdminLogin.jsx"));
const DashboardActions = lazy(() => import("./dashboard/DashboardActions.jsx"));
const AddArticle = lazy(() => import("./dashboard/AddArticle.jsx"));
const AddNews = lazy(() => import("./dashboard/AddNews"));
const AddAuthor = lazy(() => import("./dashboard/AddAuthor"));

// About Us Lazy Loading
const Whowe = lazy(() => import("./components/AboutUS/WhoWe/Whowe"));
const Speech = lazy(() => import("./components/AboutUS/Speech/Speech"));
const Governorates = lazy(() =>
  import("./components/AboutUS/Governorates/Governorates")
);
const SuccessPartners = lazy(() =>
  import("./components/AboutUS/SuccessPartners/SuccessPartners")
);
const Units = lazy(() => import("./components/AboutUS/Units/units.jsx"));
const Offices = lazy(() => import("./components/AboutUS/Offices/Offices"));
const Board = lazy(() => import("./components/AboutUS/BoardofTrustees/Board"));
const Supreme = lazy(() => import("./components/AboutUS/Supreme/Supreme"));

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      {/* Ensures the page scrolls to the top on route change */}
      <ScrollToTop />
      <Navbar />

      {/* Lazy Loading Components */}
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/article/:id" element={<Details type="articles" />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<Details type="news" />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/join-us" element={<JoinUs />} />

          {/* Dashboard Routes */}
          <Route path="dashboard">
            <Route path="login" element={<AdminLogin />} />
            <Route element={<Dashboard />}>
              <Route index element={<DashboardActions />} />
              <Route path="add-article" element={<AddArticle />} />
              <Route path="add-news" element={<AddNews />} />
              <Route path="add-author" element={<AddAuthor />} />
            </Route>
          </Route>

          {/* About Us Section */}
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
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
