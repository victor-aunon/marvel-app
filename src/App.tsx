import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Providers } from './context'
import { AppRoutes } from './routes'
import { AppHeader } from './components/header'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Initializer } from './components/initializer'
import { Favorites } from './pages/Favorites'

function App(): JSX.Element {
  return (
    <Providers>
      <Initializer />
      <Router>
        <AppHeader />
        <Routes>
          <Route path={AppRoutes.home} element={<Home />} />
          <Route path={AppRoutes.detail} element={<Detail />} />
          <Route path={AppRoutes.favorites} element={<Favorites />} />
        </Routes>
      </Router>
    </Providers>
  )
}

export default App
