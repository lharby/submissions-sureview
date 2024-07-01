import { Routes, Route } from "react-router-dom";

import { Navigation } from './components/Navigation/Navigation';
import { Main } from './components/Main/Main';
import { StatusIndex } from './components/Status/StatusIndex';
import { ReportsIndex } from './components/Reports/ReportsIndex';
import { Footer } from "./components/Footer/Footer";

import './styles/App.scss';

function App() {
  return (
    <>
      <img src='/logo.png' alt='Sureview logo' className='align-right' />
      <Navigation />
      <div className="wrapper">
        <Routes>
            <Route path="/" element={<Main title="Welcome to Sureview" />} />
            <Route path="/status" element={<StatusIndex />} />
            <Route path="/reports" element={<ReportsIndex />}  />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
