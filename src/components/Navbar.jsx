import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Transaction Tool</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/transactions" className="text-gray-300 hover:text-white">Transactions</Link>
          <Link to="/add-transaction" className="text-gray-300 hover:text-white">Add Transaction</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;