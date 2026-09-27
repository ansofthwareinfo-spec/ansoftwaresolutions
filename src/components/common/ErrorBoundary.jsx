import { Component } from 'react'
import Button from './Button'

/** Catches render errors so a single broken section never blanks the whole site. */
export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) console.error(error, info)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <section className="section container" style={{ textAlign: 'center', paddingTop: '10rem' }}>
        <h1>Something went wrong</h1>
        <p style={{ margin: '1rem 0 2rem' }}>Please refresh the page or return to the homepage.</p>
        <Button href="/">Back to Home</Button>
      </section>
    )
  }
}
