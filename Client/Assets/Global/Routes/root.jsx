import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Review from '../../../Source/Main/Review/page.jsx'
import Home from '../../../Source/Main/Home/page.jsx'
import Store from '../../../Source/Other/Store/page.jsx'
import Event from '../../../Source/Other/Event/page.jsx'
import Forum from '../../../Source/Other/Forum/page.jsx'
import Profile from '../../../Source/Auth/Profile/page.jsx'
import Register from '../../../Source/Auth/Register/page.jsx'
import Recover from '../../../Source/Auth/Recover/page.jsx'
import Legal from '../../Components/Legal/item.jsx'
import Information from '../../Components/Information/item.jsx'
import PrivacyTerms from '../../Components/Legal/PrivacyTerms/clause.jsx'
import TermsOfService from '../../Components/Legal/TermsOfService/clause.jsx'
import AboutUs from '../../../Source/Other/Helper/AboutUs/page.jsx'
import Cooperate from '../../../Source/Other/Helper/Cooperate/page.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Review />} />
      <Route path="/home" element={<Home />} />
      <Route path="/review" element={<Review />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover" element={<Recover />} />
      <Route path="/event" element={<Event />} />
      <Route path="/store" element={<Store />} />
      <Route path="/information" element={<Information />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/legal/privacy-terms" element={<PrivacyTerms />} />
      <Route path="/legal/terms-of-service" element={<TermsOfService />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/cooperate" element={<Cooperate />} />
    </Routes>
  )
}

export default AppRoutes
