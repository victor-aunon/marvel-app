import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Providers } from './context'
import { AppRoutes } from './routes'
import { AppHeader } from './components/header'
import { Home } from './pages/Home'

function App(): JSX.Element {
  return (
    <Providers>
      <Router>
        <AppHeader />
        <Routes>
          <Route path={AppRoutes.home} element={<Home />} />
        </Routes>
      </Router>
    </Providers>
  )
}

export default App
