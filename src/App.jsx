import React from "react";
import './App.scss';
import './style.css';
import { Route, Routes } from "react-router-dom";
import WebsiteContainer from "./shared/containers/WebsiteContainer";
import Welcome from "./views/pages/Welcome";
import History from "./views/pages/about/History";
import Organization from "./views/pages/about/Organization";
import MembershipCategories from "./views/pages/membership/Categories";
import Event from "./views/pages/events/Event";
import Contact from "./views/pages/Contact";
import NotFound from "./views/NotFound";
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
          <Route path="organization" element={<Organization />} />

            <Route path="membership-categories" element={<MembershipCategories />} />
            <Route path="/membership-categories/:membershipType" element={<CategoryLearnMore />} />
            <Route path="form" element={<MembershipFormPage />} />
            {/* Changed the online form to PHP */}
            <Route path="membership-offline-form" element={<OfflineForm />} />
            <Route path="thank-you" element={<ThankYouPage />} />

            <Route path="webinars" element={<Event />} />
          
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />

       </Route>
    </Routes>
  )
}

export default App
