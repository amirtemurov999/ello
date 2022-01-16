import { Switch, Route, Redirect, withRouter } from "react-router";
import { lazy } from "react";
import { Home } from "./pages/index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
