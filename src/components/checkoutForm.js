import React, {Component} from 'react';

import {CardElement, injectStripe} from 'react-stripe-elements';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });

    if (!token) {
      console.log("No Token Found!")
      return
    }

    let response = await fetch("https://free-time-services.herokuapp.com/charge", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({amount: 100000, source: token.id})
    });

    if (response.ok) console.log("Purchase Complete!")
    if (response.ok) this.setState({ complete: true });
  }

  render() {
    if (this.state.complete) {
      return (
        <Link to="/confirmation">
          <Button size='huge'>View Confirmation</Button>
        </Link>
      );
    }

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <Button onClick={this.submit} size='medium'>Pay</Button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);