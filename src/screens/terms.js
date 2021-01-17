import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import { max_devices } from "../components/devices.js";
import SharedComponents from "../components/reuseable_components";

const MainContainer = styled.div`
  width: 100vw;
  height: flex;
  background-color: #f6f5fa;
  padding: 80px 150px 100px 150px;

  @media ${max_devices.tablet} {
    padding: 60px;
  }
  @media ${max_devices.mobileL} {
    padding: 20px;
  }
`;

const Contianer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 40px;
  box-shadow: 0 2px 32px -12px rgba(56,56,56,0.1);}

  & > .mainTitle {
    font-size: 130%;
    font-weight: 800;
    margin-bottom: 25px;

    @media ${max_devices.tablet} {
        font-size: 110%;
      }

    @media ${max_devices.mobileL} {
        font-size: 100%;
      }

  }

  & > .secondTitle {
    font-size: 120%;
    font-weight: 600;
    margin-bottom: 10px;

    @media ${max_devices.tablet} {
        font-size: 100%;
      }

    @media ${max_devices.mobileL} {
        font-size: 90%;
      }

  }

  @media ${max_devices.mobileL} {
    padding: 20px;
  }
  
`;

const Image = styled.img`
  width: 41px;
  height: 53px;
  margin-bottom: 40px;
`;

const Blurb = styled.p`
  color: rgba(26, 26, 26, 0.8);
  font-size: 90%;
  font-weight: 300;
  margin-bottom: 25px;
`;

const List = styled.li`
  color: rgba(26, 26, 26, 0.8);
  font-size: 90%;
  font-weight: 300;
`;

const Bold = styled.b`
  font-size: 90%;
  font-weight: bold;
`;

const Terms = props => {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <Contianer>
          <div>
            <Image src={require("../assests/images/logoImage.png")} />
          </div>
          <SharedComponents.Title
            className="mainTitle"
            title="Cookies Policy/Terms of Use"
          />
          <Blurb> Last Update: 4th December 2019</Blurb>
          <Blurb>
            {" "}
            This Cookies Policy explains what cookies are, how we use cookies,
            how third parties we may partner with may use cookies, your choices
            regarding cookies and further information about cookies.
          </Blurb>
          <SharedComponents.Title className="mainTitle" title="Who are we?" />
          <Blurb>
            Hazelnut is for Readers and Learners. With Hazelnut you can capture
            pages and highlight texts from your favorite books. Hazelnut
            converts the pages or highlights into searchable text. This allows
            you to store your reading notes and organise them into titles and
            buckets. You can Store locally or share online and set custom
            reminders for your notes. This allows readers to remember and
            utilise there reading notes, so that they can be utilised in
            conversations, meetings, and many other creative things they work
            on. Hazelnut is a product of D.K. Technologies Pvt Ltd.
          </Blurb>

          <SharedComponents.Title
            className="secondTitle"
            title="Registration Details:"
          />
          <Blurb>
            Registration No - 606758170 <br />
            Company Name - D.K. Technologies Pvt Ltd.
            <br />
            Company Address - Basundhara, Kathmandu
          </Blurb>
          <Blurb>
            D.K. Technologies Pvt Ltd. is a tech company that is focused on
            Software and IT Product development. This policy explains how we
            process information that can be used to directly or indirectly
            identify an individual (“personal data”): thus, this policy applies
            to the situations in which we act as data controller of personal
            data and explains when and why we collect personal information about
            individuals, how we use it, the conditions under which we may
            disclose it to others and how we keep it secure.
          </Blurb>
          <SharedComponents.Title
            className="mainTitle"
            title="Who is our Data Protection Officer?"
          />
          <Blurb>
            In case you have any questions regarding this policy, you can
            contact our Data Protection Officer. Please send your enquiries to
            the person responsible below. Thus, in case you have any questions
            regarding this policy and/or our privacy practices:
            support@gethazelnut.com
          </Blurb>
          <Blurb>
            <a
              href="mailto:support@gethazelnut.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@gethazelnut.com
            </a>
            <br /> Data Protection Representative: Prashish Rajbhandari <br />
            Address: Basundhara, Kathmandu
          </Blurb>
          <SharedComponents.Title
            className="mainTitle"
            title="What are cookies?"
          />
          <Blurb>
            Cookies are small pieces of text sent to your web browser by a
            website you visit. A cookie file is stored in your device and allows
            us or a third-party to recognise you and make your next visit easier
            and the service more useful to you: thus, it enables the website to
            remember your actions and preferences (such as login, language, font
            size and other display preferences) over a period of time so you
            don't have to keep re-entering them whenever you come back to the
            site or browse from one page to another.
          </Blurb>
          <Blurb>
            Cookies can be "persistent" or "session" cookies. Persistent cookies
            remain on your personal computer or mobile device when you go
            offline, while session cookies are deleted as soon as you close your
            web browser.
          </Blurb>
          <SharedComponents.Title
            className="secondTitle"
            title="How does Hazelnut use cookies?"
          />
          <Blurb>
            When you use and access our services, we may place a number of
            cookies files in your web browser. We use cookies for the following
            purposes:
            <div
              style={{
                paddingTop: "10px",
                paddingLeft: "20px"
              }}
            >
              <ul>
                <List>to enable certain functions of the services; </List>
                <List>to provide analytics;</List>
                <List>to store your preferences;</List>
              </ul>
            </div>
          </Blurb>
          <Blurb>
            We use both session and persistent cookies on the website and we use
            different types of cookies to run it:
            <div
              style={{
                paddingTop: "10px",
                paddingLeft: "20px"
              }}
            >
              <ul>
                <List>
                  <Bold>Essential Cookies |</Bold> We may use essential cookies
                  to authenticate users and prevent fraudulent use of user
                  accounts;
                </List>
                <List>
                  <Bold>Preferences Cookies |</Bold> We may use preferences
                  cookies to remember information that changes the way the
                  services behave or look, such as the "remember me"
                  functionality of a registered user or a user's language
                  preference;
                </List>
                <List>
                  <Bold>Analytics Cookies |</Bold> We may use analytics cookies
                  to track information about how the website is used so that we
                  can make improvements. We may also use analytics cookies to
                  test new advertisements, pages, features or new functionality
                  of the website to see how our users react to them.
                </List>
              </ul>
            </div>
          </Blurb>
          <Blurb>
            By using our website, you consent to our privacy policy.
          </Blurb>
          <SharedComponents.Title
            className="secondTitle"
            title="First Party Cookies"
          />
          <Blurb>
            We will set some cookies that are essential for our website to
            operate correctly. These cookies, none of which capture personally
            identifiable information, are:
            <div
              style={{
                paddingTop: "10px",
                paddingLeft: "20px"
              }}
            >
              <ul>
                <List>
                  <Bold>Analytics Cookies |</Bold> We may use analytics cookies
                  to track information about how the website is used so that we
                  can make improvements. We may also use analytics cookies to
                  test new advertisements, pages, features or new functionality
                  of the website to see how our users react to them.
                </List>
              </ul>
            </div>
          </Blurb>
          <SharedComponents.Title
            className="secondTitle"
            title="Third Party Cookies"
          />
          <Blurb>
            In addition to our own cookies, we may also use various third
            parties cookies to report usage statistics of the website, deliver
            advertisements on and through the website, and so on. Such cookies
            may include:
            <div
              style={{
                paddingTop: "10px",
                paddingLeft: "20px"
              }}
            >
              <ul>
                <List>
                  Facebook Pixel - As a Facebook advertiser we install the
                  Facebook or Atlas pixel on our website in order to measure ad
                  conversions or retarget advertisements on Facebook for our
                  customers, to assist them with applications and information.{" "}
                </List>
                <List>
                  Google Pixel - Our partners will collect data and use cookies
                  for ad personalization and measurement.
                </List>
              </ul>
            </div>
          </Blurb>
          <hr />
          <Blurb></Blurb>
          <SharedComponents.Title
            className="mainTitle"
            title="What are your choices regarding cookies?"
          />
          <Blurb>
            You can control and/or delete cookies as you wish: thus, you can
            delete all cookies that are already on your computer and you can set
            most browsers to prevent them from being placed. If you delete
            cookies or refuse to accept them, however, you may have to manually
            adjust some preferences every time you visit a site and some
            services and functionalities may not work.
            <div
              style={{
                paddingTop: "10px",
                paddingLeft: "20px"
              }}
            >
              <ul>
                <List>
                  <Bold>
                    Google Chrome <br />
                  </Bold>
                  Please visit this page from Google: <br />
                  <a
                    href="https://support.google.com/accounts/answer/32050"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://support.google.com/accounts/answer/32050
                  </a>
                </List>
                <List>
                  <Bold>
                    Internet Explorer
                    <br />
                  </Bold>
                  Please visit this page from Microsoft: <br />
                  <a
                    href="http://support.microsoft.com/kb/278835"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://support.microsoft.com/kb/278835
                  </a>
                </List>
                <List>
                  <Bold>
                    Mozilla Firefox
                    <br />
                  </Bold>
                  Please visit this page from Mozilla: <br />
                  <a
                    href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
                  </a>
                </List>
                <List>
                  <Bold>
                    Safari <br />
                  </Bold>
                  Please visit this page from Apple: <br />
                  <a
                    href="https://support.apple.com/kb/PH21411?locale=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://support.apple.com/kb/PH21411?locale=en_US
                  </a>
                </List>
              </ul>
            </div>
          </Blurb>
          <Blurb>
            For any other web browser, please visit your web browser's official
            web pages.
          </Blurb>
          <SharedComponents.Title
            className="secondTitle"
            title="Where can you find more information about cookies?"
          />
          <Blurb>
            You can learn more about cookies and the following third-party
            websites:
            <div
              style={{
                paddingTop: "10px",
                paddingLeft: "20px"
              }}
            >
              <ul>
                <List>
                  <Bold>
                    AllAboutCookies <br />
                  </Bold>
                  <a
                    href="http://www.allaboutcookies.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://www.allaboutcookies.org/
                  </a>
                </List>
                <List>
                  <Bold>
                    Network Advertising Initiative <br />
                  </Bold>
                  <a
                    href="http://www.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://www.networkadvertising.org/
                  </a>
                </List>
              </ul>
            </div>
          </Blurb>
          <Blurb>
            We will take all reasonable steps to ensure that your data is
            treated securely and in accordance with this privacy notice. Please
            note that the transmission of information via the internet is not
            completely secure: even doing our best to protect your personal
            data, we cannot guarantee the security of your data transmitted to
            our site (so any transmission is at your own risk), but, once we
            have received your information, we will use strict procedures and
            security features to prevent unauthorised access.
          </Blurb>
          <SharedComponents.Title
            className="secondTitle"
            title="What about the changes to this policy"
          />
          <Blurb>
            We keep this policy under regular review, so please check this page
            occasionally to ensure that you’re happy with any changes. This
            policy was last updated in 4th December 2019
          </Blurb>
          <hr />
          <Blurb></Blurb>
          <Blurb>
            These are the cookies policy of{" "}
            <a
              href="https://gethazelnut.com."
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              https://gethazelnut.com.
            </a>
          </Blurb>
        </Contianer>
      </MainContainer>
    </div>
  );
};

export default Terms;
