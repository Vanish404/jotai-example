import React, { Suspense } from "react";
import { Provider } from "jotai";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Users from "./components/users/users";
import User from "./components/users/user";

const App = () => (
  <Provider>
    <BrowserRouter basename="/">
      <Suspense fallback="loading...">
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={User} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </Provider>
)

export default App;
