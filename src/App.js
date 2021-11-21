import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import "./style.css";
import Navbar from './component/Common/Navbar/Navbar';
import Home from './component/Home/Home';
import Screener from "./component/Screener/Screener";
import Footer from './component/Common/Footer/Footer';
import Market from './component/Market/Market';
import Sectors from './component/Common/Sectors/Sectors';
import News from './component/News/News';
import Options from './component/Options/Options';
import EconomicData from './component/EconomicData/EconomicData';
import Resources from './component/Resources/Resources';
import Dashboard from './component/Dashboard/Dashboard';
import SymbolPage from './component/Symbol/SymbolPage';

function App() {
  
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = scriptCode;
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () =>{
  //       document.body.removeChild(script);
  //   }
  // });

  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/screener" element={<Screener/>} />
          <Route path="/market" element={<Market />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/news" element={<News />} />
          <Route path="/options" element={<Options />} />
          <Route path="/economic-data" element={<EconomicData />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/symbol" element={<SymbolPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
