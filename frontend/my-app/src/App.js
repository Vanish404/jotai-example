import React, { Suspense } from "react";
import { Provider } from "jotai";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Users from "./components/users/users";
import UserWrapper from "./components/users/userWrapper";
import CreateUser from "./components/users/createUser";

const App = () => (
  <Provider>
    <BrowserRouter basename="/">
      <Suspense fallback="loading...">
        <div style={{height: "100vh" }}>
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/new" component={CreateUser} />
          <Route exact path="/users/:id/edit" component={UserWrapper} />

          <Redirect from="*" to="/users" />
        </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  </Provider>
)

export default App;
