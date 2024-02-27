import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TravelersInfo from "./pages/TravelersInfo.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/travelers-info" element={<TravelersInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
