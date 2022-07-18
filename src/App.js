
import { useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import WebFont from 'webfontloader'

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
		<Footer/>
    </div>
  );
}

export default App;
