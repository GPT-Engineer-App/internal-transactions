import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Transactions from "./pages/Transactions.jsx";
import AddTransaction from "./pages/AddTransaction.jsx";
import EditTransaction from "./pages/EditTransaction.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/transactions" element={<Transactions />} />
        <Route exact path="/add-transaction" element={<AddTransaction />} />
        <Route exact path="/edit-transaction/:key" element={<EditTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;