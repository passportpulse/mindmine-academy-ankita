import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/home/HomePage";
import AboutUsPage from "../pages/about/AboutUsPage";
import CompetitiveExamsPage from "../pages/competitive-exams/CompetitiveExamsPage";
import AdmissionGuidancePage from "../pages/admission-guidance/AdmissionGuidancePage";
import MainMenuPage from "../pages/main-menu/MainMenuPage";

import ProcessPage from "../pages/process/ProcessPage";
import CampusesPage from "../pages/campuses/CampusesPage";
import ContactPage from "../pages/contact/ContactPage";
import ApplyNowPage from "../pages/apply-now/ApplyNowPage";
import CourseDetailsPage from "../pages/home/CourseDetailsPage";
import Apply from "../pages/student-zone/student-zone-pages/Apply";
import Notices from "../pages/student-zone/student-zone-pages/Notices";
import Payment from "../pages/student-zone/student-zone-pages/Payment";
import Enquiry from "../pages/student-zone/student-zone-pages/Enquiry";
import NotFoundPage from "../pages/not-found/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:slug" element={<CourseDetailsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/competitive-exams" element={<CompetitiveExamsPage />} />
        <Route path="/admission-guidance" element={<AdmissionGuidancePage />} />
        <Route path="/main-menu" element={<MainMenuPage />} />
        <Route path="/student-zone/enquiry" element={<Enquiry />} />
        <Route path="/student-zone/apply" element={<Apply />} />
        <Route path="/student-zone/notices" element={<Notices />} />
        <Route path="/student-zone/payment" element={<Payment />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/campuses" element={<CampusesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/apply-now" element={<ApplyNowPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
