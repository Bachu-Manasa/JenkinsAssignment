
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'



export class Test extends Component {
  render() {
    return (
     <div class="center">

  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Password : </label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"></input>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>

    )
  }
}

export default Test




{/*import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

class Test extends Component {
  render() {
    return (
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name..." />
          </Col>
          <Col>
            <Form.Control placeholder="Last name..." />
          </Col>
          <Col>
            <Button>Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

export default Test;

*/}
