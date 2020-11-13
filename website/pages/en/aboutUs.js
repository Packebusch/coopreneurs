/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <div>
        <h2 className="projectTitle">We.</h2>
        <h2 className="projectTitle">Are.</h2>
        <h2 className="projectTitle">Humans.</h2>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Summary = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Who we are</h2>
        <MarkdownBlock>The Coopreneurs are a cooperative of professionals from various fields, who seek to transform current startup mechanisms and make work human again.</MarkdownBlock>
      </div>
    );

    const Principles = () => (
      <div
        className="productShowcaseSection lightBackground paddingTop"
        style={{textAlign: 'center'}}>
        <h2>The Coopreneurship Principles</h2>
      <Block layout="twoColumn">
        {[
          {
            content: "We believe that if everyone cares for everyone else, everyone is taken care of. We are driven purely democratically (one human one vote) We don't negate the existence of the outside world, we want to be a part of its evolution. We engage together with monetocratically driven organisations (one dollar one vote) to gradually form a better world. We believe in the right decision making for the right system.",
            title: 'Collaboration over competition',
          },
          {
            content: 'We believe that everybody should have the possibility to be a founder regardless of funds, network, founder experience or background (social, ethnic, etc.). Join a team of thoroughly and democratically selected individuals. Work in the way of the future: Coopreneurs are owned by the people who take care.',
            title: 'Participation over compensation',
          },
          {
            content: "We believe in self-management and learning. We invest our time and skills in multiple projects to maximize on our common and individual skills and experience. We acquire stakes by taking time to care and therefore every Coopreneur benefits from collective outcomes. We care about all our futures and work towards providing passive income.",
            title: 'Contribution over delegation',
          },
          {
            content: "We believe in growing startups sustainably without burning out yourself or others. We accept everyone as a whole individual with strengths, weaknesses, quirks, history and diversity. Every Coopreneur chooses what and when to care about. Coopreneurs accept that their own as well as the others’ experience and skills will always be limited. Therefore we rely on the wisdom of the collective.",
            title: 'Sustainability over hamster wheel',
          },
          {
            content: "We believe in the evolution of society. We depend on this society. To take part in its evolution we want to drive purpose in what we do and how we engage. We believe that economically strong ideas should support social strong ideas wherever possible.",
            title: 'Purpose over ROI',
          },
        ]}
      </Block>
      </div>
    );

    const Members = () => (
      <div
        id="members"
        className="productShowcaseSection paddingTop"
        style={{textAlign: 'center'}}>
        <h2>Our Members</h2>
      <Block layout="twoColumn">
        {[
          {
            content: 'Digitalization Manager, Government Scientist by Training, Handyman. Former Startup Tech Lead in IoT and FinTech, Accenture, Deloitte and Economics Researcher',
            title: 'Richard Abendroth',
            image: "/img/richard.png"
          },
          {
            content: 'Tech and Cloud Entrepreneur in IoT, Mathematician and Engineer by Training, Bike Adventurer. Former Finance Researcher, Adventurer, Corporate Investment Banking Deutsche Bank',
            title: 'Sascha Thiergart',
            image: "/img/sascha.png"
          },
          {
            content: "Shai loves design, ideas and new ways of design thinking. Problem solving and detailed focus are key to building products that customers love.",
            title: 'Shai Schiff',
            image: "/img/shai.png"
          },
          {
            content: "Sven is a software developer, accessibility-evangelist and team leader. Powered by VS Code and earl-grey he solves all/some/one of our problems and builds beautiful simple things.",
            title: 'Sven Bischoff',
            image: "/img/sven.png"
          },
          {
            content: "Tom is a product leader with a passion for collaboration and empowering people. It's good, if it's fun.",
            title: "Tom Packebusch",
            image: "/img/tom.png"
          },
          {
            content: "",
            title: "",
          },
        ]}
      </Block>
      </div>
    );

    const Contact = () => {

      const pageUrl = page => baseUrl + page;

      return (
        <div className="productShowcaseSection lightBackground paddingTop paddingBottom">
          <h2>Wanna know more?</h2>
          <p>Get in touch in one of our remote <strong>Meetups.</strong></p>
          <div className="">
            <a className="button" href={pageUrl('contact.html')}>
              Register here!
            </a>
          </div>
        </div>
      );
    };
    const NeedHelp = () => {
      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Do you need help?</h2>
          <p>Are you looking for a Front End developer? <strong> We have them!</strong></p>
          <p>Are you looking for someone who can build a great landing page? <strong>We too!</strong></p>
          <p>Do you need a workshop master? <strong>We don't have one!</strong></p>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* <Features />*/}
          <Summary />
          <Principles />
          <Members />
          <Contact />
        </div>
      </div>
    );
  }
}

module.exports = Index;
