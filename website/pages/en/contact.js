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
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;
    const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;
    this.successURL = pageUrl('success.html');
    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Register to our online meetup.</h1>
              <p>Our virtual meetup takes place at the first Wednesday every month at 8pm. Please join us, if you'd like to talk to us. It's open for everyone no matter the background.</p>
              <form id="contactForm" target="_blank" action="https://hooks.zapier.com/hooks/catch/7976313/oz48j9y" method="POST">
                <label>
                  Your Email:
                  <input className="input" id="emailInput" type="email" name="email" />
                </label>
								<button className="button" id="contactSubmit">
								  Register
								</button>
              </form>
            </div>
          </div>
        </Container>
        <script dangerouslySetInnerHTML={{ __html: `document.getElementById("contactForm").onsubmit = function(event) {
          window.location.href = "`+ this.successURL + `";}`}} />
      </div>
    );
  }
}

module.exports = Contact;
