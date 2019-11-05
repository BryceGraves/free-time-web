import React from "react";

import { Link } from "react-router-dom";

import {
  Button,
  Card,
  Segment,
  Step,
  Header,
} from 'semantic-ui-react'

const steps = [
  {
    key: 'shopping',
    active: true,
    icon: 'shopping cart',
    title: 'Shopping',
  },
  {
    key: 'billing',
    disabled: true,
    icon: 'address card outline',
    title: 'Billing',
  },
  {
    key: 'payment',
    disabled: true,
    icon: 'payment',
    title: 'Pay',
  },
  {
    key: 'confirmation',
    disabled: true,
    icon: 'info',
    title: 'Confirmation'
  },
]

const CheckoutSteps = () => <Step.Group items={steps} />

function Storefront() {
  return (
    <>
      <Segment placeholder>
        <CheckoutSteps />
        <Card.Group centered>
          <Card>
            <Card.Content>
              <Card.Header>Purchase Trial</Card.Header>
              <Card.Meta>Non-Recurring</Card.Meta>
              <Card.Description>
                Month long trial of the scheduling software
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to="/billing">
                <Button basic color='green'>Price: $50</Button>
              </Link>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Purchase Yearly Subscription</Card.Header>
              <Card.Meta>Recurring Annually</Card.Meta>
              <Card.Description>
                Year long subscription
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to="/billing">
                <Button basic color='green'>Price: $1000</Button>
              </Link>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Purchase Decade Subscription</Card.Header>
              <Card.Meta>Recurring Decennially</Card.Meta>
              <Card.Description>
                Decade long subscription at a reduced cost
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to="/billing">
                <Button basic color='green'>Price: $8000</Button>
              </Link>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    </>
  );
}

export default Storefront
