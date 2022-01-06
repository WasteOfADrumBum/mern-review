import { Routes, Route } from 'react-router-dom'
// Redux
import store from './store'
import { Provider } from 'react-redux'
import { Navbar, Footer } from './components'
import { AdminDashboard, Home, PublicReviews, UserDashboard } from './views'

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container">
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/public-reviews" element={<PublicReviews />} />
          {/* Protected Routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          {/* "No Match" Route */}
          <Route
            path="*"
            element={
              <main className="m-2 text-center text-warning alert alert-warning">
                <>There's nothing here!</>
              </main>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Provider>
  )
}
