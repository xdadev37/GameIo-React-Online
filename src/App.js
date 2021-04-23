import React, { Suspense, lazy } from 'react'
import './pages/i18n'
import EffectHook from './pages/useEffect'
const MainPage = lazy(() => import('./pages/Main/index'))
const Navbar = lazy(() => import('./pages/Navbar/Navbar'))
const Guide = lazy(() => import('./pages/Guide/index'))
const Game = lazy(() => import('./pages/GameRunPage/GameRunPage'))
const About = lazy(() => import('./pages/About/About'))

function App() {
  EffectHook()

  return (<Suspense fallback={<p>LoAdInG ...</p>}>
    <Navbar />
    <MainPage />
    <Guide />
    <Game />
    <About />
  </Suspense>);
}

export default App;
