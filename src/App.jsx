import React from "react";
import './App.scss';
import './style.css';
import { Route, Routes } from "react-router-dom";
import WebsiteContainer from "./shared/containers/WebsiteContainer";
import Welcome from "./views/pages/Welcome";
import History from "./views/pages/about/History";

// import Organization from "./views/pages/about/Organization";
import MembershipCategories from "./views/pages/membership/Categories";
import Event from "./views/pages/events/Event";

// New Event Page: Induction Of Members for Upcoming event on September 20th 2025
import { InductionOfMembers } from "./views/pages/events/InductionOfMembers";
// New Event Page: Induction Of Members for Upcoming event on September 20th 2025

import Contact from "./views/pages/Contact";
import NotFound from "./views/NotFound";

// New Under Construction Page for All Components and Pages that are not yet built or developed
import UnderConstruction from "./views/UnderConstruction";
// New Under Construction Page for All Components and Pages that are not yet built or developed

import { ThankYouPage } from "./views/pages/membership/ThankYouPage";
import CategoryLearnMore from "./views/pages/membership/CategoryLearnMore";
import OfflineForm from "./views/pages/membership/OfflineForm";
import MembershipFormPage from "./views/pages/membership/FormPage";

const App = () => {

  return (
    <Routes>
       <Route path="/" element={<WebsiteContainer />}>
          <Route index element={<Welcome />}/>
          
          <Route path="history" element={<History />} />
          {/* <Route path="organization" element={<Organization />} /> */}

            <Route path="membership-categories" element={<MembershipCategories />} />
            <Route path="/membership-categories/:membershipType" element={<CategoryLearnMore />} />
            <Route path="form" element={<MembershipFormPage />} />
            
            {/* Changed the online form to PHP */}
            <Route path="membership-offline-form" element={<OfflineForm />} />
            <Route path="thank-you" element={<ThankYouPage />} />
            {/* Changed the online form to PHP */}

            <Route path="webinars" element={<Event />} />
            {/* New Induction of Members Page for the Upcoming event on September 20th, 2025 added */}
            <Route path="induction-of-members" element={<InductionOfMembers />} />
            {/* New Induction of Members Page for the Upcoming event on September 20th, 2025 added */}
          
          <Route path="contact" element={<Contact />} />

          {/* Pages Under Construction or Coming Soon */}
          <Route path="/organization" element={<UnderConstruction title={"Organization"}/>} />
          <Route path="/about/memorandum-of-association" element={<UnderConstruction title={"Memorandum of Association"}/>} />
          <Route path="/about/article-of-association" element={<UnderConstruction title={"Article of Association"}/>} />
          <Route path="/lectures-and-seminars" element={<UnderConstruction title={"Lectures and Seminars"}/>} />
          <Route path="/founders-day-lectures" element={<UnderConstruction title={"Founders Day Lectures"}/>} />
          <Route path="/conference" element={<UnderConstruction title={"Conference"}/>} />
          {/* Pages Under Construction or Coming Soon */}

          <Route path="*" element={<NotFound />} />

       </Route>
    </Routes>
  )
}

export default App
