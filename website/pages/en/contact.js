/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  }
  myChangeHandler = (event) => {
    this.setState({name: event.target.value});
  }
  render() {
    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Register to our online meetup, {this.state.name}.</h1>
              <p>Our virtual meetup takes place at the first Wednesday every month at 8pm. Please join us, if you'd like to talk to us. It's open for everyone no matter the background.</p>
              <form onSubmit={this.mySubmitHandler}>
                <label>
                  Your Email:
                  <input type="email" name="email" />
                </label>
                <label>
                  Your name:
                  <input onChange={this.myChangeHandler} type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Contact;
