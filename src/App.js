import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/Header";
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from "./Components/Dashboard/Dashboard";
import Classes from "./Components/Classes/classes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Sidebar /> */}
        {/* <Dashboard /> */}
        <Switch>
                  <Route path="/classes" exact component={Classes} />
        </Switch>

        {/* <Route path="/" exact component={Sidebar} /> */}

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
