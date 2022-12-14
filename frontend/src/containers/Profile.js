import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility
} from "semantic-ui-react";
//check the role of the user and display the appropriate menu
const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as="h1"
            content="Welcome to the Hospital Management System"
            inverted
            style={{
                fontSize: mobile ? "2em" : "4em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: mobile ? "1.5em" : "3em"
            }}
        />
        <Header
            as="h2"
            content="Manage your patients and appointments"
            inverted
            style={{
                fontSize: mobile ? "1.5em" : "1.7em",
                fontWeight: "normal",
                marginTop: mobile ? "0.5em" : "1.5em"
            }}
        />
        <Button primary size="huge">
            Get Started
            <Icon name="right arrow" />
        </Button>
    </Container>
);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool
};

class DesktopContainer extends Component {
    state = {};

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children } = this.props;
        const { fixed } = this.state;

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            </Responsive>
        );
    }
}
export default DesktopContainer;