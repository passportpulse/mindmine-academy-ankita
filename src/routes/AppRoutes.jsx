import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/home/HomePage";
import AboutUsPage from "../pages/about/AboutUsPage";
import CoursesPage from "../pages/courses/CoursesPage";
import CompetitiveExamsPage from "../pages/competitiveExams/CompetitiveExamsPage";
import UgPgPage from "../pages/ugpg/UgPgPage";
import ProcessPage from "../pages/process/ProcessPage";
import CampusesPage from "../pages/campuses/CampusesPage";
import ContactPage from "../pages/contact/ContactPage";
import ApplyNowPage from "../pages/applynow/ApplyNowPage";

export default function AppRoutes(){
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/competitive-exams" element={<CompetitiveExamsPage />} />
        <Route path="/ug-pg" element={<UgPgPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/campuses" element={<CampusesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/apply-now" element={<ApplyNowPage />} />
      </Route>
    </Routes>
  );
};

