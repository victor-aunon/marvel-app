import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import appTheme from './styles/theme'
import { AppRoutes } from './routes'
import { AppHeader } from './common'
import { Splash } from './splash'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <AppHeader />
        <Routes>
          <Route path={AppRoutes.home} element={<Splash />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
