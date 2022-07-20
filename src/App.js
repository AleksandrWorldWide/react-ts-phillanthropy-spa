
import { useEffect } from 'react';
import './App.css';
import WebFont from 'webfontloader'
import { Main } from './components/Main/Main';
import { About } from './components/About/About';
import { Results } from './components/Results/Results';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Help } from './components/Help/Help';
import { Testimonials } from './components/Testimonials/Testimonials';
import { News } from './components/News/News';
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom';

const App = ({title}) => {

	useEffect(() => {
		document.title = 'Phillanthropy'
	},[])

	useEffect(()=>{
		WebFont.load({
			google: {
				families: ['Roboto: 400, 700', 'DM Sans: 400, 700', 'sans-serif']
			}
		})
	},[])

  return (
    <div className="App">
		
		<BR>
			<Header/>
			<Routes>
				<Route path='/'  element={<Main/>}/>
				<Route path='help' element={<Help/>}/>
				<Route path='about' element={<About/>}/>
				<Route path='news' element={<News/>}/>
				<Route path='results' element={<Results/>}/>
				<Route path='testimonials' element={<Testimonials/>}/>
			</Routes>
			<Footer/>
		</BR>
		
    </div>
  );
}

export default App;
