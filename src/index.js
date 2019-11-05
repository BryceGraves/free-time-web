import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import {
  Route,
  HashRouter
} from "react-router-dom";

import Billing from "./containers/billing";
import Checkout from "./containers/checkout";
import LandingPage from "./containers/landingPage";
import Payment from "./containers/payment";
import Storefront from "./containers/storefront";

import 'semantic-ui-css/semantic.min.css'

function App() {
  const [formInfo, setFormInfo] = useState({
    formInfo: {
      firstName: "",
      lastName: "",
      schoolName: "",
      districtName: "",
      creditCardNumber: "",
      securityCode: "",
      billingAddress: "",
      zipCode: "",
      city: "",
      stateCode: ""
    }
  });

  const handleFormUpdate = useCallback((updatedValues) => {
      setFormInfo(updatedValues);
    }, []
  );

  return (
    <HashRouter>
      <Route path="/store" exact>
        <Storefront />
      </Route>
      <Route path="/billing" exact>
        <Billing
          formUpdate={handleFormUpdate}
          info={formInfo} />
      </Route>
      <Route path="/payment" exact>
        <Payment />
      </Route>
      <Route path="/confirmation" exact>
        <Checkout info={formInfo} />
      </Route>
      <Route path="/" exact>
        <LandingPage />
      </Route>
    </HashRouter>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);