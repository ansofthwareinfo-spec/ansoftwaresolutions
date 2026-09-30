import { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

// Home and NotFound are bundled eagerly; every other page is code-split.
const About = lazy(() => import('@/pages/About'))
const Hire = lazy(() => import('@/pages/Hire'))
const Jobs = lazy(() => import('@/pages/Jobs'))
const Services = lazy(() => import('@/pages/Services'))
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'))
const Technologies = lazy(() => import('@/pages/Technologies'))
const Industries = lazy(() => import('@/pages/Industries'))
const Solutions = lazy(() => import('@/pages/Solutions'))
const Contact = lazy(() => import('@/pages/Contact'))
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'))
const Terms = lazy(() => import('@/pages/Terms'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="hire" element={<Hire />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="industries" element={<Industries />} />
          <Route path="solutions" element={<Solutions />} />
          {/* Old URLs */}
          <Route path="portfolio" element={<Navigate to="/solutions" replace />} />
          <Route path="careers" element={<Navigate to="/jobs" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
