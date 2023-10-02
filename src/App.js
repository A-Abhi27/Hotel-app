import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/home/Home';
import Hoteldetails from "./components/details/details";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Routes>
          {/* Route path changes to /page/:page on pagination. By ddefault set to home */}
            <Route path="/" Component={Home} exact />
            <Route path="property/:id" Component={Hoteldetails} />
            <Route path="/*" Component={<h1>Error Page</h1>} />
          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;
