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
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

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
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('manifest.html')}>Read the manifesto</Button>
          </PromoSection>
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
        <h2>What are the Coopreneurs?</h2>
        <MarkdownBlock>The Coopreneurs are a cooperative of professionals from various fields, who seek to transform current startup mechanisms and make work fun again.</MarkdownBlock>
      </div>
    );

    const StartUpMarket = () => (
      <Block id="try">
        {[
          {
            content:
              'Over 123k Startups die every day. The golden unicorn story obscures the reality many founders face every day. ' +
              'In order to compensate for the high failure rate, VCs need to push the ventures into profit maximization no matter the costs. ' +
              'By using the cooperative principles of colaboration, collective ownership and community value, ' +
              'the Coopreneurs are transforming the way ventures are build.',
            image: `${baseUrl}img/undraw_investment.svg`,
            imageAlign: 'left',
            title: 'We want to improve the way we build and operate ventures.',
          },
        ]}
      </Block>
    );

    const Collaboration = () => (
      <Block background="light">
        {[
          {
            content:
              '60% of startup fail due to issues with the team. ' +
              'Building the right team at the right time is one of the major requirement for success. '+
              'Instead of competing for ressources we share them openly between our ventures to archieve a better outcome together.',
            image: `${baseUrl}img/undraw_work_together.svg`,
            imageAlign: 'right',
            title: 'We believe we can do more together',
          },
        ]}
      </Block>
    );

    const Workenvironment = () => (
      <Block background="light">
        {[
          {
            content:
              'A stunning 70% of all US employees are unmotivated at work. Why is that? ' +
              'Most work environments are characterized by politics, a lack of ownership and decision making power ' +
              'and top-down hierarchies. While it is widely believed that distributed decision making is superior to ' +
              'communist central planning in an economy, it is still the basic operating system in todays hierarchical companies. ' +
              'We believe that humans are motivated, engaged and doing their best work when they are fulfilled and empowered. ' +
              'Self-management and empowerment are the core coopreneurship principles.',
            image: `${baseUrl}img/undraw_good_team.svg`,
            imageAlign: 'right',
            title: 'We believe working should be fun',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Wanna know more?</h2>
          <p>Get in touch in one of our remote <strong>Meetups.</strong></p>
          <div className="">
            <a className="button" href={pageUrl('users.html')}>
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
          <Workenvironment />
          <StartUpMarket />
          <Collaboration />
          <Showcase />
          <NeedHelp />
        </div>
      </div>
    );
  }
}

module.exports = Index;
