
import './App.css'
import { Routes, Route} from "react-router-dom";
import ProtectedRoute1 from './helpers/ProtectedRoute1.jsx';
import ProtectedRoute2 from './helpers/ProtectedRoute2.jsx';
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {
  return (
    <>
      <Routes>
         <Route path="/dashboard" element={<ProtectedRoute1 />}>
           <Route path="/dashboard" element={<Dashboard />} />
         </Route>
         <Route path="/" element={<ProtectedRoute2 />}>
           <Route path="/" element={<Login />} />
         </Route>
      </Routes>
    </>
  );
}

export default App;
