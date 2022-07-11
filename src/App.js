import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import "./style.css";

import InvexRoutes from "./InvexRoutes";
import Navbar from "./component/Common/Navbar/Navbar";
import Home from "./component/Home/Home";
import Screener from "./component/Screener/Screener";
import Footer from "./component/Common/Footer/Footer";
import Market from "./component/Market/Market";
import Sectors from "./component/Sectors";
import News from "./component/News/News";
import Options from "./component/Options/Options";
import MacroEconomics from './component/MacroEconomics/MacroEconomics';
import Dashboard from './component/Dashboard/Dashboard';
import SymbolPage from './component/Symbol/SymbolPage';
import VideoResource from './component/VideoResource/VideoResource';
import LogIn from './component/Authentication/LogIn/LogIn';
import GoToTop from './ScrollToTop';
import BidTable from './component/NewComps/BidTable';
import CPIIndexHome from './component/CPIndex/CPIIndexHome';
import NonManufacture from './component/CPIndex/nonManufacture';
import SignUp from './component/Authentication/LogIn/SignUp';
import Price from './component/Price/Price';
import FinancialStatistics from './component/FinancialStatistics';
// import BalanceSheet from "./component/Financials/BalanceSheet";
// import CashFlow from "./component/CashFlow";
import ValuationReport from './component/ValuationReport';
import Financials from './component/Financials';
import FinancialShareInfo from './component/FinancialsShareInfo';
import Valuation from './component/Valuation/Valuation';
import SymbolOption from './component/Symbol/SymbolOption/SymbolOption';
import NotFound from './component/404/404';
import SymbolNotPublished from './component/Valuation/SymbolNotPublished';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import SymbolDetails from './component/Symbol/SymbolDetails';
import Synopsis from './component/Symbol/Synopsis/Synopsis';

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
    <div className='App'>
      <HashRouter>
        <GoToTop />
        <Navbar />
        <Routes>
          <Route exact path={InvexRoutes.Home.path} element={<Home />} />
          <Route exact path={InvexRoutes.LogIn.path} element={<LogIn />} />
          <Route exact path={InvexRoutes.SignUp.path} element={<SignUp />} />
          <Route
            exact
            path={InvexRoutes.Screener.path}
            element={<Screener />}
          />
          <Route exact path={InvexRoutes.Market.path} element={<Market />} />
          <Route exact path={InvexRoutes.Sectors.path} element={<Sectors />} />
          <Route exact path={InvexRoutes.News.path} element={<News />} />
          <Route exact path={InvexRoutes.Price.path} element={<Price />} />
          <Route exact path={InvexRoutes.Options.path} element={<Options />} />
          <Route
            exact
            path={InvexRoutes.MacroEconomics.path}
            element={<MacroEconomics />}
          />
          <Route
            exact
            path={InvexRoutes.Resources.path}
            element={<VideoResource />}
          />
          <Route
            exact
            path={InvexRoutes.Dashboard.path}
            element={<Dashboard />}
          />
          <Route
            exact
            path={InvexRoutes.Symbol.path}
            element={<SymbolPage />}
          />
          <Route
            exact
            path={InvexRoutes.BidTable.path}
            element={<BidTable />}
          />
          <Route
            exact
            path={InvexRoutes.CPIndex.path}
            element={<CPIIndexHome />}
          />
          <Route
            exact
            path={InvexRoutes.NonManufacture.path}
            element={<NonManufacture />}
          />
          <Route
            exact
            path={InvexRoutes.FinancialStatistics.path}
            // element={<SymbolDetails />}
            element={<FinancialStatistics />}
          />
          <Route
            exact
            path={InvexRoutes.FinancialShareInfo.path}
            element={<FinancialShareInfo />}
          />
          <Route
            exact
            path={InvexRoutes.Financials.path}
            element={<Financials />}
          />
          {/* <Route exact path={InvexRoutes.BalanceSheet.path} element={<BalanceSheet />} />
          <Route exact path={InvexRoutes.CashFlow.path} element={<CashFlow />} /> */}
          <Route
            exact
            path={InvexRoutes.ValuationReport.path}
            element={<ValuationReport />}
          />
          <Route
            exact
            path={InvexRoutes.Valuation.path}
            element={<Valuation />}
          />
          <Route
            exact
            path={InvexRoutes.SymbolOption.path}
            element={<SymbolOption />}
          />
          <Route
            exact
            path={InvexRoutes.SymbolNotPublished.path}
            element={<SymbolNotPublished />}
          />

          <Route
            exact
            path={InvexRoutes.Synopsis.path}
            element={<SymbolDetails />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
