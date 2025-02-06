import AOS from "aos";
import "aos/dist/aos.css";
import { lazy, Suspense, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./utils/Loader/Loader.jsx";

// apply lazy loading to all pages

const Footer = lazy(() => import("./components/Footer/Footer"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Certification = lazy(
  () => import("./components/services/Certification/Certification.jsx"),
);
const Conferences = lazy(
  () =>
    import("./components/services/Conferences and seminars/Conferences.jsx"),
);
const Employment = lazy(
  () => import("./components/services/employment/Employment.jsx"),
);
const ManageAuthors = lazy(() => import("./dashboard/ManageAuthors.jsx"));
const ManageArticles = lazy(() => import("./dashboard/ManageArticles.jsx"));
const ManageNews = lazy(() => import("./dashboard/ManageNews.jsx"));
const TrainingAndِConsulting = lazy(
  () =>
    import(
      "./components/services/Training and consulting/TrainingAndِConsulting.jsx"
    ),
);
const JoinUs = lazy(() => import("./pages/Join-us/Join-us.jsx"));
const ComingSoon = lazy(() => import("./utils/CoomingSoon/ComingSoon"));
const ScrollToTop = lazy(() => import("./utils/ScrollToTop"));
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
const Governorates = lazy(
  () => import("./components/AboutUS/Governorates/Governorates"),
);
const SuccessPartners = lazy(
  () => import("./components/AboutUS/SuccessPartners/SuccessPartners"),
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

      {/* Lazy Loading Components */}
      <Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            <Loader />
          </div>
        }>
        <Navbar />
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
              <Route path="manage-author" element={<ManageAuthors />} />
              <Route path="manage-articles" element={<ManageArticles />} />
              <Route path="manage-news" element={<ManageNews />} />
            </Route>
          </Route>

          {/* About Us Section */}
          <Route path="/about">
            <Route path="institution" element={<Whowe />} />
            <Route path="speech" element={<Speech />} />
            <Route path="governorates" element={<Governorates />} />
            <Route path="success-partners" element={<SuccessPartners />} />
            <Route path="offices" element={<Offices />} />
            <Route path="board" element={<Board />} />
            <Route path="units" element={<Units />} />
            <Route path="supreme-advisory" element={<Supreme />} />
          </Route>

          {/* services routes  */}
          <Route path="/services">
            <Route path="training" element={<TrainingAndِConsulting />} />
            <Route path="certification" element={<Certification />} />
            <Route path="conferences" element={<Conferences />} />
            <Route path="employment" element={<Employment />} />
          </Route>

          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
