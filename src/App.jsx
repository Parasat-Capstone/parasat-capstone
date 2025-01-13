import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Client Pages
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";
import ApplyNow from "./pages/ApplyNow";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import SubscriberForm from "./pages/SubscriberForm";

// Admin Dashboard Pages
import Sidebar from "./admin/components/Sidebar";
import DashboardHome from "./admin/pages/DashboardHome";
import Subscribers from "./admin/pages/Subscribers";
import Reports from "./admin/pages/Reports";
import SubscriberForm from "./pages/SubscriberForm";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          {/* Client Routes */}
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Hero />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="features" element={<Features />} />
            <Route path="apply" element={<ApplyNow />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="application-form" element={<SubscriberForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin Dashboard Routes */}
          <Route path="/dashboard/*" element={<AdminLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="subscribers" element={<Subscribers />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

const ClientLayout = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/features" element={<Features />} />
      <Route path="/apply" element={<ApplyNow />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/application-form" element={<SubscriberForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

const AdminLayout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-grow bg-gray-100">
      <Routes>
        <Route path="" element={<DashboardHome />} />
        <Route path="subscribers" element={<Subscribers />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </div>
  </div>
);

export default App;
