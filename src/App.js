import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { Product } from "./Screens/Product";
import Dashboard from "./Screens/Dashboard";
import { Category } from "./Screens/Category";
import { Orders } from "./Screens/Orders";
import { Customers } from "./Screens/Customers";
import { AuthScreen } from "./Screens/AuthScreen";
import { Invoice } from "./Components/Invoice";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const [admin, setAdmin] = React.useState(false);
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  React.useEffect(() => {
    if (isAuthenticated) {
      setAdmin(true);
    }
    console.log("hey i am admin");
  }, [isAuthenticated]);

  return (
    <>
      {admin ? (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 false">
          {/* sidebar start */}
          <Sidebar />
          {/* sidebar end */}
          <div className="flex flex-col flex-1 w-full">
            <Header />
            <Switch>
              {/* <Route path="/login" component={AuthScreen} /> */}
              <Route path="/" exact component={Dashboard} />
              <Route path="/product" component={Product} />
              <Route path="/category" component={Category} />
              <Route path="/orders" component={Orders} />
              <Route path="/customers" component={Customers} />
              <Route path="/invoice" component={Invoice} />
            </Switch>
            {/* <Dashboard /> */}
          </div>
        </div>
      ) : (
        <AuthScreen />
      )}
    </>
  );
}
