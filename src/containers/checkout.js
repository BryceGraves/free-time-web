import React from "react";

import { Link } from "react-router-dom";

import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Step,
} from 'semantic-ui-react'

const steps = [
  {
    key: 'shopping',
    completed: true,
    icon: 'shopping cart',
    title: 'Shopping',
  },
  {
    key: 'billing',
    completed: true,
    icon: 'address card outline',
    title: 'Billing',
  },
  {
    key: 'payment',
    completed: true,
    icon: 'payment',
    title: 'Pay',
  },
  {
    key: 'confirmation',
    active: true,
    icon: 'info',
    title: 'Confirmation'
  },
]

const ConfirmationSteps = () => <Step.Group items={steps} />

function Confirmation({ info }) {
  const {
    firstName,
    lastName,
    schoolName,
    districtName,
    creditCardNumber,
    securityCode,
    billingAddress,
    zipCode,
    city,
    stateCode
  } = info;

  return (
    <Segment placeholder>
      <ConfirmationSteps />
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em', marginTop: '2rem' }}>
                Your order has been placed
            </Header>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em', marginTop: '2rem' }}>
                Order Information:
            </Header>
            <Form>
              <Form.Group widths={2} inline>
                <Form.Input
                  fluid
                  readOnly
                  name='firstName'
                  value={firstName || ""}
                  label='First name' />
                <Form.Input
                  fluid
                  readOnly
                  name='lastName'
                  value={lastName || ""}
                  label='Last name' />
                <Form.Input
                  fluid
                  readOnly
                  name='schoolName'
                  value={schoolName || ""}
                  label='School Name' />
                <Form.Input
                  fluid
                  readOnly
                  name='districtName'
                  value={districtName || ""}
                  label='District Name' />
              </Form.Group>
              <Form.Group widths={4} inline>
                <Form.Input
                  fluid
                  readOnly
                  name='billingAddress'
                  value={billingAddress || ""}
                  label='Billing Address' />
                <Form.Input
                  fluid
                  readOnly
                  name='zipCode'
                  value={zipCode || ""}
                  label='Zip Code' />
                <Form.Input
                  fluid
                  readOnly
                  name='city'
                  value={city || ""}
                  label='City' />
                <Form.Input
                  fluid
                  readOnly
                  name='stateCode'
                  value={stateCode || ""}
                  label='State' />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Link to="/">
        <Button size='huge'>I'm Done Here</Button>
      </Link>
    </Segment>
  )
}

export default Confirmation
