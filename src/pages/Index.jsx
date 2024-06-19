import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Transaction Management Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Use the navigation bar to manage your transactions.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;