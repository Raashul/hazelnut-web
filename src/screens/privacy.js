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
    margin-bottom: 15px;

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
  font-size: 100%;
  font-weight: bold;
`;

const Privacy = props => {
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
            title="Privacy Notice"
          />
          <Blurb> Last Update: 4th December 2019</Blurb>
          <SharedComponents.Title
            className="mainTitle"
            title="BASICS ABOUT US"
          />
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
            title="COLLECTION AND USAGE OF PERSONAL DATA ABOUT YOU"
          />
          <Blurb>
            What Information Do We Collect? When you access our web pages,
            certain technical information is automatically collected. We collect
            no other information except when you deliberately send it to us, for
            example, by emailing us or signing up.
          </Blurb>
          <Blurb>
            We analyse aggregate traffic/access information for resource
            management and site planning purposes. We reserve the right to use
            log detail to investigate resource management or security Concerns.
            Some of our web pages use “cookies.” Usually a cookie enables a
            website to tailor what you see according to the way you entered the
            site (for example, if you entered via a certain link, or if you are
            using a mobile device). We also use non-identifying and aggregate
            information to better design our website. For example, we may
            determine that the average visitor typically views our website for a
            certain number of minutes, or that a certain percentage of men vs.
            women applied to our program. Nevertheless, we do not gather or
            disclose information that could identify those specific individuals.
            Our web pages may use Google Analytics or other similar services to
            analyse web traffic for design purposes. In such cases, the
            information described above may be shared with the entities
            providing the analytical service. We do not control the privacy
            policies of these entities, however their services also fall under
            the requirements for compliance set out by the General Data
            Protection Regulation (25/5/2018).
          </Blurb>
          <Blurb>
            When you choose to provide information about yourself or someone
            else with us, we use the information only to fulfil, or respond to
            your request. We do not share this information with outside parties,
            except to the extent necessary to complete that request.
          </Blurb>
          <Blurb>
            We never use or share the information you provide to us in ways
            unrelated to the intended purpose and without also providing you an
            opportunity to opt-out. We are dedicated to preventing unauthorised
            data access, maintaining data accuracy, and ensuring the appropriate
            use of information. We strive to put in place appropriate safeguards
            to secure the information we collect online.
          </Blurb>
          <SharedComponents.Title
            className="secondTitle"
            title="What Do We Use Your Information For?"
          />
          <Blurb>
            The information we collect from you may be used in any of the
            following ways:
            <div
              style={{
                paddingTop: "10px",
                paddingLeft: "20px"
              }}
            >
              <ul>
                <List>To process your experience on our platform. </List>
                <List>
                  To assist our staff with the support and management of
                  account.
                </List>
                <List>
                  To administer a contest, promotion, survey or other site
                  features.
                </List>
                <List>
                  The email address you provide may be used to send you
                  information, respond to enquiries,and/or other requests or
                  questions.
                </List>
              </ul>
            </div>
          </Blurb>
          <SharedComponents.Title
            className="secondTitle"
            title="How Long Is My Information Retained?"
          />
          <Blurb>
            We normally keep your personal data providing you have demonstrated
            an interest in our products and services within the past two years.
            You can request us to delete it at any point, and can easily opt-out
            of any communication using the associated links within our
            correspondence or by emailing us at{" "}
            <a
              href="mailto:support@gethazelnut.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@gethazelnut.com.
            </a>
          </Blurb>
          <SharedComponents.Title className="mainTitle" title="YOUR CONSENT" />
          <Blurb>
            By using our website, you consent to our privacy policy.
          </Blurb>
          <SharedComponents.Title
            className="mainTitle"
            title="RETENTION OF PERSONAL DATA ABOUT YOU"
          />
          <Blurb>
            We normally keep your personal data providing you have demonstrated
            an interest in our products and services within the past two years.
            You can delete your account on gethazelnut.com made through
            gethazelnut.com at any given point of time through preference and
            settings present in profile section on gethazelnut.com. You can
            request us to delete it at any point, and can easily opt-out of any
            communication by emailing us for the same at{" "}
            <a
              href="mailto:support@gethazelnut.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@gethazelnut.com.
            </a>
            .
          </Blurb>
          <SharedComponents.Title
            className="mainTitle"
            title="RECIPIENTS OF PERSONAL DATA ABOUT YOU"
          />
          <Blurb>
            We may transfer information about you to partners for purposes
            connected with the ones mentioned in this privacy notice or for the
            management of our business. We do this to provide you with different
            and relevant user resources.
          </Blurb>
          <SharedComponents.Title className="mainTitle" title="YOUR RIGHTS" />
          <Blurb>
            You are guaranteed several rights, which are mentioned below:
            <div
              style={{
                paddingTop: "10px",
                paddingLeft: "20px"
              }}
            >
              <ul>
                <List>
                  <Bold>Right to be informed |</Bold> You have the right to be
                  informed about the processing of your personal data. Thus, in
                  order to make you able to make decisions regarding your
                  privacy and have control over your personal data, we tell you
                  why we need your personal data, what is the legal ground for
                  processing it and every relevant detail regarding the
                  processing activities, as you can see in this privacy policy.
                </List>
                <List>
                  <Bold>Right to access | </Bold>You have the right to access
                  your own personal data and the right to receive relevant
                  information regarding the processing of your personal data.
                  Thus, you can ask us for a copy of the personal data we hold
                  about you so that you can know if and what kind of personal
                  data is being processed, why it is being processed and who is
                  processing it, being able to enforce your rights. You can
                  contact us so as to exercise this right.
                </List>
                <List>
                  <Bold>Right to rectification | </Bold>You have the right to
                  have your personal data rectified/completed in case it is
                  inaccurate/incomplete. You can contact us so as to exercise
                  this right.
                </List>
                <List>
                  <Bold>Right to erasure | </Bold>In certain circumstances, you
                  may request the erasure of personal data where there is no
                  compelling reason for its continued processing. You can
                  contact us so as to exercise this right.
                </List>
                <List>
                  <Bold>Right to restriction of processing |</Bold> Under
                  certain circumstances, we may suspend processing activities –
                  and you may also ask us to pause the processing of your
                  personal data. In other words, we will keep your data, but
                  won't further process it – and you can contact us so as to
                  exercise this right.
                </List>
                <List>
                  <Bold>Right to data portability |</Bold> You may obtain your
                  data from us so as to transfer it to another system: thus, we
                  will provide you with a copy in a structured, commonly used
                  format. You can contact us so as to exercise this right.
                </List>
                <List>
                  <Bold>Right to object | </Bold>In some circumstances, you have
                  the right to object (*i.e., say that you don't – or no longer
                  – agree with the processing and ask us to stop) to the
                  processing of your personal data regarding your particular
                  situation. This right applies to processing based on direct
                  marketing purposes and, usually, to some other purposes (such
                  as some legitimate interests).
                </List>
                <List>
                  <Bold>Rights regarding automated decision making |</Bold> You
                  have the primary right not to be subject to activities only
                  based on automated processing and whose decision has legal or
                  relevant effects on you. However, whenever we carry out
                  automated decision making (either because of a contract or
                  because of your consent), you shall be able to be informed,
                  express your point of view, challenge eventual decisions and
                  obtain human intervention. You can contact us so as to gather
                  further information. If you have provided consent for the
                  processing of your data, you have – in certain circumstances –
                  the right to withdraw that consent at any time, which will not
                  affect the lawfulness of the processing before your consent
                  was withdrawn. By the way, if you want to know more about your
                  rights, we suggest that you read the guidance provided by the
                  Information Commissioner's Office of the United Kingdom, which
                  is available{" "}
                  <a
                    href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    online .
                  </a>
                </List>
              </ul>
            </div>
          </Blurb>
          <Blurb>
            Lastly, if you are not happy with the way we are dealing with
            personal data, you may contact a supervisory authority:
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
            title="ABOUT YOUR PRIVACY"
          />
          <Blurb>
            Information shall be handled based on the principle of
            confidentiality, so it is stored securely and accessed by authorised
            individuals only. We are committed to implementing and maintaining
            appropriate technical, security and organisational measures to
            protect personal data against unauthorised or unlawful processing
            and use, and against accidental loss, destruction, damage, theft or
            disclosure, such as we encrypt the transmission and storage of that
            information using industry standard encryption technologies
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
            className="mainTitle"
            title="OUR PRIVACY MANAGER/DATA PROTECTION OFFICER"
          />
          <Blurb>
            We have a Privacy Manager/Data Protection Officer who is responsible
            for matters regarding privacy and data protection. Thus, in case you
            have any questions regarding this policy and/or our privacy
            practices:
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
            title="FOR FURTHER INFORMATION ABOUT US"
          />
          <Blurb>
            In case you want to contact us, please feel free to do so!
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
            title="REVIEW OF THIS POLICY"
          />
          <Blurb>
            We keep this policy under regular review, so please check this page
            occasionally to ensure that you’re happy with any changes. This
            policy was last updated in 5th December 2019.
          </Blurb>
        </Contianer>
      </MainContainer>
    </div>
  );
};

export default Privacy;
