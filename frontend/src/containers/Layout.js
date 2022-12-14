import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";


class CustomLayout extends React.Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Link to="/">
              <Menu.Item header>Home</Menu.Item>
            </Link>
            {authenticated ? (
              <React.Fragment>
                <Link to="/profile">
                  <Menu.Item header>
                    Profile
                  </Menu.Item>
                </Link>
                < Menu.Item header onClick={() => this.props.logout()}>
                  Logout
                </Menu.Item>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/login">
                  <Menu.Item header>Login</Menu.Item>
                </Link>
                <Link to="/signup">
                  <Menu.Item header>Signup</Menu.Item>
                </Link>
              </React.Fragment>
            )}
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Home" />
                <List link inverted>
                  <List.Item as="a">My Account</List.Item>
                  <List.Item as="a">My Orders</List.Item>
                  <List.Item as="a">My Cart</List.Item>
                  <List.Item as="a">My Wishlist</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Hair" />
                <List link inverted>
                  <List.Item as="a">Top Hair</List.Item>
                  <List.Item as="a">Hair Care</List.Item>
                  <List.Item as="a">Hair Extensions</List.Item>
                  <List.Item as="a">Hair Color</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Weight" />
                <List link inverted>
                  <List.Item as="a">Weight Loss</List.Item>
                  <List.Item as="a">Weight Gain</List.Item>
                  <List.Item as="a">Protein</List.Item>
                  <List.Item as="a">Vitamins</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Made By" />
                <p>
                  <a href="https://www.github.com/shikharvashistha">
                    Shikhar Vashistha
                  </a>
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size="mini" src="https://react.semantic-ui.com/logo.png" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
