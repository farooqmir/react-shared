import React from "react";
import PropTypes from "prop-types";
import "./rewards-footer.scss";

const Footer = props => {
  const { footerFindUsMobile } = props;
  const socialLinks = JSON.parse(footerFindUsMobile);
  return (
    <nav>
      <div className="tcom-global-footer">
        <div className="footer-container">
          <div className="footer-links">
            <section className="telstra-social">
              <h3 className="heading-text"> {socialLinks.heading} </h3>
              <ul>
                {socialLinks.list.map(item => (
                  <li key={item.label}>
                    <a href={item.link}>
                      <svg className="tcom-icon-32 footer-icon">
                        <use
                          xlinkHref={`icons/tcom-icons.sprite.svg#${item.icon}`}
                        />
                      </svg>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;

const socialLinks = `{
  "heading": "Find us",
  "list": [
    {
      "label": "Facebook",
      "link": "https://www.facebook.com/Telstra",
      "icon": "icon-social-fb"
    },
    {
      "label": "Twitter",
      "link": "https://twitter.com/telstra",
      "icon": "icon-social-twitter"
    },
    {
      "label": "Instagram",
      "link": "https://www.instagram.com/telstra/?hl=en",
      "icon": "icon-social-instagram"
    },
    {
      "label": "YouTube",
      "link": "https://www.youtube.com/user/TelstraCorp",
      "icon": "icon-social-youtube"
    },
    {
      "label": "CrowdSupport®",
      "link": "https://crowdsupport.telstra.com.au/",
      "icon": "icon-social-crowdsupport"
    }
  ]}`;

Footer.propTypes = {
  footerFindUsMobile: PropTypes.string.isRequired
};
Footer.defaultProps = {
  footerFindUsMobile: socialLinks
};
