import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
        <Menu inverted fixed="top" size="large" >
          <Container>
            <Menu.Item name="Home" />
            <Menu.Item name="Job Advert" />
            <Menu.Menu position="right">
              <Menu.Item>
                <Button.Group>
                  <Button primary>Sign Up</Button>
                  {/* <Button.Or /> */}
                  <Button positive>Sign In</Button>
                </Button.Group>
              </Menu.Item>
              <Menu.Item />
            </Menu.Menu>
          </Container>
        </Menu>
    </div>
  );
}
