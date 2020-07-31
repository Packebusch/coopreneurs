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
	render() {
		const {siteConfig, language = ''} = this.props;
		const pageUrl = (page) =>
			this.props.config.baseUrl +
			(this.props.language ? `${language}/` : "") +
			page;
		const successURL = pageUrl("success.html");
		return (
			<div className="mainContainer">
				<Container padding={["bottom", "top"]}>
					<div className="showcaseSection">
						<div className="prose">
							<h1>Register to our online meetup.</h1>
							<p>
								Our virtual meetup takes place at the first Wednesday every
								month at 8pm. Please join us, if you'd like to talk to us. It's
								open for everyone no matter the background.
							</p>
							<form
								id="contactForm"
								// target="_blank"
								// action="https://hooks.zapier.com/hooks/catch/7976313/oz48j9y"
								// action="#"
								// method="POST"
							>
								<label>
									Your Email:
									<input
										className="input"
										id="emailInput"
										type="email"
										name="email"
										required="required"
									/>
								</label>
								<p id="meetupError" style={{ display: "none" }}>
									There was an issue registering. Please try again later.
								</p>
								<button className="button" id="contactSubmit">
									Register
								</button>
							</form>
						</div>
					</div>
				</Container>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						function submitMeetupForm(event) {
							event.preventDefault();
							event.stopPropagation();
							var isFormValid = document.querySelector("#contactForm").checkValidity();
							if(!isFormValid){
								// showng the user that the email is not correct
								document.querySelector("#contactForm").reportValidity();
								return;
							}
							console.log('------------event------------', event)
							fetch('https://wh.automate.io/webhook/5f246f11bfb9cd60aa439086', {
								method: 'post',
								body: JSON.stringify({ email: document.querySelector('#emailInput').value })
							}).then(function(response) {
								return response.json();
							}).then(function(data) {
								if(data.status === 'success') {
									window.location.href = "${successURL}";
								} else {
									document.querySelector("#meetupError").style.display = 'block'
								}
								console.log('------------data------------', data)
							});
						}
						document.querySelector("#contactForm").addEventListener('submit',submitMeetupForm)
						document.querySelector("#contactSubmit").addEventListener('click',submitMeetupForm)
						`,
					}}
				/>
			</div>
		);
	}
}

module.exports = Contact;
