import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import "./style.css";
import Navbar from "./component/Common/Navbar/Navbar";
import Home from "./component/Home/Home";
import Screener from "./component/Screener/Screener";
import Footer from "./component/Common/Footer/Footer";
import Market from "./component/Market/Market";
import Sectors from "./component/Common/Sectors/Sectors";
import News from "./component/News/News";
import Options from "./component/Options/Options";
import EconomicData from "./component/EconomicData/EconomicData";
import Dashboard from "./component/Dashboard/Dashboard";
import SymbolPage from "./component/Symbol/SymbolPage";
import VideoResource from "./component/VideoResource/VideoResource";
import LogIn from "./component/Authentication/LogIn/LogIn";
import GoToTop from "./ScrollToTop";
import BidTable from "./component/NewComps/BidTable";

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
        <GoToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/logIn" element={<LogIn />} />
          <Route exact path="/screener" element={<Screener />} />
          <Route exact path="/market" element={<Market />} />
          <Route exact path="/sectors" element={<Sectors />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/options" element={<Options />} />
          <Route exact path="/economic-data" element={<EconomicData />} />
          <Route exact path="/resources" element={<VideoResource />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/symbol" element={<SymbolPage />} />
          <Route exact path="/bidtable" element={<BidTable />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
