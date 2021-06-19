import { BrowserRouter, Route , Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/Header';
// import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Dashboard />
      
        {/* <Route path="/" exact component={Sidebar} /> */}
        {/* <Route path="/dashboard" exact component={Dashboard} /> */}
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
