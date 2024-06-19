import { useEffect, useState } from "react";
import { getClient } from "@/lib/crud";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const client = getClient("project-id");
  const navigate = useNavigate();

  useEffect(() => {
    client.getWithPrefix("transaction:").then((data) => {
      setTransactions(data);
    });
  }, []);

  const handleDelete = (key) => {
    client.delete(key).then(() => {
      setTransactions(transactions.filter((transaction) => transaction.key !== key));
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {transactions.length === 0 ? (
            <p>No transactions found.</p>
          ) : (
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.key} className="flex justify-between items-center mb-2">
                  <span>{transaction.value.description}</span>
                  <div>
                    <Button variant="outline" onClick={() => navigate(`/edit-transaction/${transaction.key}`)}>Edit</Button>
                    <Button variant="destructive" onClick={() => handleDelete(transaction.key)}>Delete</Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;