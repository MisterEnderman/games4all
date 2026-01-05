import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GameDetailsPage from './pages/GameDetailsPage';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' exact element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/game/:gameId' element={<GameDetailsPage />} />
			</Routes>
		</>
	)
}

export default App
