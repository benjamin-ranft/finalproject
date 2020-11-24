import React from "react";
import LoginPage from "./components/LoginPage";
import {Redirect , Route, Switch} from "react-router-dom";
import ProtectedRoute from "./routing/ProtectedRoute";
import UserContextProvider from "./contexts/UserContextProvider";
import Discoveries from "./components/Discoveries";
import DiscoveriesContextProvider from "./contexts/DiscoveriesContextProvider";
import AddDiscoveryPage from "./components/AddDiscoveryPage";
import DiscoveryDetails from "./components/DiscoveryDetails";

function App() {
  return (
    <UserContextProvider>
        <DiscoveriesContextProvider>
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <ProtectedRoute path="/discoveries" component={Discoveries}/>
                <ProtectedRoute path="/new" component={AddDiscoveryPage}/>
                <ProtectedRoute path="/discovery/:id" component={DiscoveryDetails}/>
                <Route path="/">
                    <Redirect to="/discoveries"/>
                </Route>
            </Switch>
        </DiscoveriesContextProvider>
    </UserContextProvider>
  );
}

export default App;
