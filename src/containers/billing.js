import React, { useCallback } from "react";

import { Link } from "react-router-dom";

import {
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
    active: true,
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

const BillingSteps = () => <Step.Group items={steps} />

function Billing({ updateGlobalState, globalState }) {
  const handleChange = useCallback((e, { name, value }) => {
    globalState.formInfo[name] = value
    this.formDetails[name] = value
  }, []);

  const handleSubmit = useCallback(() => {
    updateGlobalState(globalState);
  }, []);

  const formDetails = {
    firstName: globalState.formInfo.firstName,
    lastName: globalState.formInfo.lastName,
    schoolName: globalState.formInfo.schoolName,
    districtName: globalState.formInfo.districtName,
    billingAddress: globalState.formInfo.billingAddress,
    zipCode: globalState.formInfo.zipCode,
    city: globalState.formInfo.city,
    stateCode: globalState.formInfo.stateCode
  };

  return (
    <Segment placeholder>
      <BillingSteps />
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form>
              <Form.Group widths={4} inline>
                <Form.Input
                  fluid
                  name='firstName'
                  value={formDetails.firstName}
                  label='First name'
                  placeholder='First name'
                  onChange={handleChange} />
                <Form.Input
                  fluid
                  name='lastName'
                  value={formDetails.lastName}
                  label='Last name'
                  placeholder='Last name'
                  onChange={handleChange} />
                <Form.Input
                  fluid
                  name='schoolName'
                  value={formDetails.schoolName}
                  label='School Name'
                  placeholder='School Name'
                  onChange={handleChange} />
                <Form.Input
                  fluid
                  name='districtName'
                  value={formDetails.districtName}
                  label='District Name'
                  placeholder='District Name'
                  onChange={handleChange} />
              </Form.Group>
              <Form.Group widths={4} inline>
                <Form.Input
                  fluid
                  name='billingAddress'
                  value={formDetails.billingAddress}
                  label='Billing Address'
                  placeholder='Billing Address'
                  onChange={handleChange} />
                <Form.Input
                  fluid
                  name='zipCode'
                  value={formDetails.zipCode}
                  label='Zip Code'
                  placeholder='Zip Code'
                  onChange={handleChange} />
                <Form.Input
                  fluid
                  name='city'
                  value={formDetails.city}
                  label='City'
                  placeholder='City'
                  onChange={handleChange} />
                <Form.Input
                  fluid
                  name='stateCode'
                  value={formDetails.stateCode}
                  label='State'
                  placeholder='State'
                  onChange={handleChange} />
              </Form.Group>
              <Link to="/payment">
                <Form.Button onClick={handleSubmit}>Proceed to Payment</Form.Button>
              </Link>
            </Form>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em', marginTop: '2rem' }}>
                Billing Information
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We need a little information about you to complete your order.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Billing
