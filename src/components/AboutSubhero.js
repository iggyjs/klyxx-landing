import React, { Component } from 'react';

// Images
import userAcqSrc from '../assets/images/about/user_acq_icon.svg';
import conversionSrc from '../assets/images/about/conversion.svg';
import designSrc from '../assets/images/about/design.svg';
import developmentSrc from '../assets/images/about/engineering.svg';
import revenueSrc from '../assets/images/about/revenue.svg';

// Styles
import './styles/AboutSubhero.scss';

class AboutSubhero extends Component {
    render () {
        return (
          <div className="about-subhero">
              <div className="about-row">
                  <div className="image-column">
                      <img className="about-image" src={userAcqSrc} alt=""/>
                  </div>

                  <div className="text-column">
                      <h2 className="about-column-header">User Acquisition</h2>
                      <p className="about-column-text">
                          Through the usual channels: AdWords, Instagram, Facebook, and cold email. And, the unusual:
                          Viral Loops, Product Hunt, Chatbots, etc.
                      </p>
                  </div>
              </div>
              <div className="about-row">
                  <div className="image-column">
                      <img className="about-image" src={conversionSrc} alt=""/>
                  </div>

                  <div className="text-column">
                      <h2 className="about-column-header">Conversion</h2>
                      <p className="about-column-text">
                          Making sure you don’t just get attention but actual qualified customers. In your ads, your website, and your content.
                      </p>
                  </div>
              </div>
              <div className="about-row">
                  <div className="image-column">
                      <img className="about-image" src={designSrc} alt=""/>
                  </div>

                  <div className="text-column">
                      <h2 className="about-column-header">Creative</h2>
                      <p className="about-column-text">
                          We have our own designers and videographers to make sure we don’t only deliver the data but
                          also make the content the most powerful it can be. Eye-catching, engaging, and memorable.
                      </p>
                  </div>
              </div>
              <div className="about-row">
                  <div className="image-column">
                      <img className="about-image" src={developmentSrc} alt=""/>
                  </div>

                  <div className="text-column">
                      <h2 className="about-column-header">Development</h2>
                      <p className="about-column-text">
                          We take execution very seriously. We design your best marketing materials, develop them, and
                          market them. Whether that’s a website, app, or marketing campaign.
                      </p>
                  </div>
              </div>
              <div className="about-row">
                  <div className="image-column">
                      <img className="about-image" src={revenueSrc} alt=""/>
                  </div>

                  <div className="text-column">
                      <h2 className="about-column-header">Revenue</h2>
                      <p className="about-column-text">
                          At the end of the day, revenue is the lifeblood of any business. We make sure the numbers grow
                          by focusing on return on investment.
                      </p>
                  </div>
              </div>
          </div>
        );
    }
}

export default AboutSubhero;