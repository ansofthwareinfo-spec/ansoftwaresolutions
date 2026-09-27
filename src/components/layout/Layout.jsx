import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import BackToTop from '@/components/common/BackToTop'
import ErrorBoundary from '@/components/common/ErrorBoundary'
import PageLoader from '@/components/common/PageLoader'
import ScrollToTop from '@/components/common/ScrollToTop'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <ErrorBoundary key={pathname}>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
