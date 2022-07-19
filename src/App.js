
import { useEffect } from 'react';
import './App.css';
import WebFont from 'webfontloader'
import { Main } from './components/Main/Main';
import { About } from './components/About/About';

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
		{/* <Main/> */}
		{/* <About/> */}
    </div>
  );
}

export default App;
