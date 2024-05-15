import { BrowserRouter } from 'react-router-dom';
import HandleRoutes from './components/HandleRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<HandleRoutes/>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
