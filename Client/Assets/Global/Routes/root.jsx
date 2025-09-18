import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../../Source/Main/Home/page.jsx'
import Review from '../../../Source/Main/Review/page.jsx'
import Profile from '../../../Source/Auth/Profile/page.jsx'
import Register from '../../../Source/Auth/Register/page.jsx'
import Recover from '../../../Source/Auth/Recover/page.jsx'
import Event from '../../../Source/Other/Event/page.jsx'
import Store from '../../../Source/Other/Store/page.jsx'
import Legal from '../../Components/Legal/item.jsx'
import Information from '../../Components/Information/item.jsx'
import PrivacyTerms from '../../Components/Legal/PrivacyTerms/clause.jsx'
import TermsOfService from '../../Components/Legal/TermsOfService/clause.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
    </Routes>
  )
}

export default AppRoutes
