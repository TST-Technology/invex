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
import Dashboard from './component/Dashboard/Dashboard';
import SymbolPage from './component/Symbol/SymbolPage';
import VideoResource from './component/VideoResource/VideoResource';
import LogIn from './component/Authentication/LogIn/LogIn';

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
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/screener" element={<Screener/>} />
          <Route path="/market" element={<Market />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/news" element={<News />} />
          <Route path="/options" element={<Options />} />
          <Route path="/economic-data" element={<EconomicData />} />
          <Route path="/resources" element={<VideoResource />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/symbol" element={<SymbolPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
