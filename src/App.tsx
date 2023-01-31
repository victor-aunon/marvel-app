import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import appTheme from './styles/theme'
import { AppRoutes } from './routes'
import { AppHeader } from './components/header'
import { Home } from './pages/Home'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <AppHeader />
        <Routes>
          <Route path={AppRoutes.home} element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
