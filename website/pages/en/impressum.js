/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Impressum extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const {baseUrl} = siteConfig;
    const pageUrl = page => baseUrl + page;
    this.successURL = pageUrl('success.html');
    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
            <h1>Legal Notice / Impressum</h1>
            <h2>According to § 5 TMG</h2>
            <p>Tom Packebusch<br />
            Pfeffingerstra&szlig;e, 9<br />
            04277 Leipzig</p>
            <h2>Contact</h2>
            <p>Telephone: +49 (0) 176 306 504 17<br />
            E-Mail: tom.packebusch@gmx.de</p>
            <h3>Accountability for content</h3>
            <p>The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents’ accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).</p>
            <h3>Accountability for links</h3>
            <p>Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.</p>
            <h3>Copyright</h3>
            <p>Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).</p>
            <p>Source: twigg.de</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Impressum;
