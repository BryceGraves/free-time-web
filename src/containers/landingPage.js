import React from "react";

import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react'

function LandingPage() {
  return (
    <>
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical>
        <Container text>
          <Header
            as='h1'
            content='Free Time'
            inverted
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '3em',
            }}
          />
          <Header
            as='h2'
            content='Your all in one solution to managing student elective shenanigans.'
            inverted
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginTop: '1.5em',
            }}
          />
          <Link to="/store">
            <Button primary size='huge'>
              <Icon name='shopping cart' />
              Shop Now
            </Button>
          </Link>
        </Container>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Customized Scheduling Solutions
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                We offer customized solutions to your most challenging scheduling problems.
                To ensure the correct fit for you.
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Scaling Down? Scaling up? No problem!
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                No matter the size of your district or your state of growth our software scales with you at your pace.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src={require('../images/working-students.jpg')} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Link to="/store">
                <Button size='huge'>View Pricing</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default LandingPage
