import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';


import ApplicationPage from "./components/pages/Applications/ApplicationPage";
import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';

import UserPage from "./components/UserPage/UserPage";

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import microfundReducer from "./state/reducers/index";
import thunk from "redux-thunk";

const store = createStore(microfundReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <App />,
  </Provider>,
  document.getElementById('root'));

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };
//test

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/landing" component={LandingPage} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute path="/example-list" component={ExampleListPage} />
        <SecureRoute path="/edit" component={UserPage} />
        <SecureRoute path="/applications" component={ApplicationPage}/>
        <SecureRoute path="/datavis" component={ExampleDataViz} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
