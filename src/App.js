
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
		<Header/>
		{/* <Main/> */}
		{/* <About/> */}
		{/* <Results/> */}
		{/* <Help/> */}
		{/* <Testimonials/> */}
		<News/>
		<Footer/>
    </div>
  );
}

export default App;
