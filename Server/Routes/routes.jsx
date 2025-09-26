import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import Pages theo thứ tự bạn yêu cầu
import ReviewPage from '../Source/Main/Review/page.jsx'
import HomePage from '../Source/Main/Home/page.jsx'
import RegisterPage from '../Source/Auth/Register/page.jsx'
import RecoverPage from '../Source/Auth/Recover/page.jsx'
import StorePage from '../Source/Other/Store/page.jsx'
import EventPage from '../Source/Other/Event/page.jsx'
import ForumPage from '../Source/Other/Forum/page.jsx'
import AboutPage from '../Source/Other/Helper/About/page.jsx'
import CooperatePage from '../Source/Other/Helper/Cooperate/page.jsx'
import LegalPage from '../Assets/Components/Legal/page.jsx'
import PrivacyPolicyPage from '../Assets/Components/Legal/PrivacyPolicy/item.jsx'
import TermOfUsePage from '../Assets/Components/Legal/TermsOfUse/item.jsx'

// Import Layout
import Layout from '../Assets/layout.jsx'

function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Routes theo thứ tự yêu cầu */}
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/recover" element={<RecoverPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cooperate" element={<CooperatePage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/legal/term-of-use" element={<TermOfUsePage />} />
          
          {/* Default route */}
          <Route path="/" element={<HomePage />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

// 404 Component
function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404 - Trang không tìm thấy</h1>
      <p>Trang bạn đang tìm kiếm không tồn tại.</p>
    </div>
  )
}

export default AppRoutes