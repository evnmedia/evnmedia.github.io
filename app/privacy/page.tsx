"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-gray max-w-4xl mx-auto"
        >
          <h1>PRIVACY POLICY</h1>
          <p className="text-muted-foreground">Last updated January 25, 2023</p>

          <p>
            This privacy notice for EVN LTD ('Company', 'we', 'us', or 'our'), describes how and why we might collect,
            store, use, and/or share ("process") your information when you use our services ('Services'), such as when
            you:
          </p>
          <ul>
            <li>Visit our website at evnmedia.com, or any website of ours that links to this privacy notice</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>

          <p>
            <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy
            rights and choices. If you do not agree with our policies and practices, please do not use our Services. If
            you still have any questions or concerns, please contact us at: team@evnmedia.com
          </p>

          <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
          <h3>Personal information you disclose to us:</h3>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining
            information about us or our products and Services, when you participate in activities on the Services, or
            otherwise when you contact us.
          </p>
          <p>
            <strong>Personal Information Provided by You:</strong> The personal information that we collect depends on
            the context of your interactions with us and the Services, the choices you make, and the products and
            features you use. The personal information we collect may include the following:
          </p>
          <ul>
            <li>names</li>
            <li>phone numbers</li>
            <li>email addresses</li>
            <li>contact preferences</li>
            <li>contact or authentication data</li>
            <li>billing addresses</li>
            <li>debit/credit card numbers</li>
            <li>usernames</li>
            <li>passwords</li>
            <li>job titles</li>
            <li>mailing addresses</li>
          </ul>

          <p>
            <strong>Sensitive Information:</strong> We do not process sensitive information.
          </p>

          <p>
            All personal information that you provide to us must be true, complete, and accurate, and you must notify us
            of any changes to such personal information.
          </p>

          <h3>Information automatically collected:</h3>
          <p>
            We automatically collect certain information when you visit, use, or navigate the Services. This information
            does not reveal your specific identity (like your name or contact information) but may include device and
            usage information, such as your IP address, browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location, information about how and when you use our
            Services, and other technical information. This information is primarily needed to maintain the security and
            operation of our Services, and for our internal analytics and reporting purposes.
          </p>
          <p>The information we collect includes:</p>
          <ul>
            <li>
              <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and
              performance information our servers automatically collect when you access or use our Services and which we
              record in log files. Depending on how you interact with us, this log data may include your IP address,
              device information, browser type, and settings and information about your activity in the Services (such
              as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions
              you take such as which features you use), device event information (such as system activity, error reports
              (sometimes called 'crash dumps'), and hardware settings).
            </li>
            <li>
              <strong>Device Data.</strong> We collect device data such as information about your computer, phone,
              tablet, or other device you use to access the Services. Depending on the device used, this device data may
              include information such as your IP address (or proxy server), device and application identification
              numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier,
              operating system, and system configuration information.
            </li>
            <li>
              <strong>Location Data.</strong> We collect location data such as information about your device's location,
              which can be either precise or imprecise. How much information we collect depends on the type and settings
              of the device you use to access the Services. For example, we may use GPS and other technologies to
              collect geolocation data that tells us your current location (based on your IP address). You can opt out
              of allowing us to collect this information either by refusing access to the information or by disabling
              your Location setting on your device. However, if you choose to opt out, you may not be able to use
              certain aspects of the Services.
            </li>
          </ul>

          <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p>
            We process your personal information for a variety of reasons, depending on how you interact with our
            Services, including:
          </p>
          <ul>
            <li>To deliver and facilitate delivery of services to the user</li>
            <li>To respond to user inquiries/offer support to users</li>
            <li>
              To send administrative information to you. We may process your information to send you details about our
              products and services, changes to our terms and policies, and other similar information
            </li>
            <li>To fulfil and manage your orders</li>
            <li>To enable user-to-user communications</li>
            <li>To request feedback</li>
            <li>To send you marketing and promotional communications</li>
            <li>To deliver targeted advertising to you</li>
            <li>To protect our Services</li>
            <li>To identify usage trends</li>
            <li>To determine the effectiveness of our marketing and promotional campaigns</li>
            <li>To save or protect an individual's vital interest</li>
          </ul>

          <h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
          <p>
            We only process your personal information when we believe it is necessary and we have a valid legal reason
            (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide
            you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil
            our legitimate business interests.
          </p>

          <p>
            <strong>If you are located in the EU or UK, this section applies to you:</strong>
          </p>
          <p>
            The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we
            rely on in order to process your personal information. As such, we may rely on the following legal bases to
            process your personal information:
          </p>
          <ul>
            <li>
              <strong>Consent.</strong> We may process your information if you have given us permission (i.e. consent)
              to use your personal information for a specific purpose. You can withdraw your consent at any time.
            </li>
            <li>
              <strong>Performance of a Contract.</strong> We may process your personal information when we believe it is
              necessary to fulfil our contractual obligations to you, including providing our Services or at your
              request prior to entering into a contract with you.
            </li>
            <li>
              <strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably
              necessary to achieve our legitimate business interests and those interests do not outweigh your interests
              and fundamental rights and freedoms. For example, we may process your personal information for some of the
              purposes described in order to:
              <ul>
                <li>Send users information about special offers and discounts on our products and services</li>
                <li>Develop and display personalised and relevant advertising content for our users</li>
                <li>Analyse how our Services are used so we can improve them to engage and retain users</li>
                <li>Support our marketing activities</li>
                <li>Diagnose problems and/or prevent fraudulent activities</li>
                <li>Understand how our users use our products and services so we can improve user experience</li>
              </ul>
            </li>
            <li>
              <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for
              compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory
              agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in
              which we are involved.
            </li>
            <li>
              <strong>Vital Interests.</strong> We may process your information where we believe it is necessary to
              protect your vital interests or the vital interests of a third party, such as situations involving
              potential threats to the safety of any person.
            </li>
          </ul>

          <p>
            <strong>If you are located in Canada, this section applies to you:</strong>
          </p>
          <p>
            We may process your information if you have given us specific permission (i.e. express consent) to use your
            personal information for a specific purpose, or in situations where your permission can be inferred (i.e.
            implied consent). You can withdraw your consent at any time.
          </p>
          <p>
            In some exceptional cases, we may be legally permitted under applicable law to process your information
            without your consent, including, for example:
          </p>
          <ul>
            <li>
              If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
            </li>
            <li>For investigations and fraud detection and prevention</li>
            <li>For business transactions provided certain conditions are met</li>
            <li>
              If it is contained in a witness statement and the collection is necessary to assess, process, or settle an
              insurance claim
            </li>
            <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
            <li>
              If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
            </li>
            <li>
              If it is reasonable to expect collection and use with consent would compromise the availability or the
              accuracy of the information and the collection is reasonable for purposes related to investigating a
              breach of an agreement or a contravention of the laws of Canada or a province
            </li>
            <li>
              If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating
              to the production of records
            </li>
            <li>
              If it was produced by an individual in the course of their employment, business, or profession and the
              collection is consistent with the purposes for which the information was produced
            </li>
            <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
            <li>If the information is publicly available and is specified by the regulations</li>
          </ul>

          <h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
          <p>
            We may share your data with third-party vendors, service providers, contractors, or agents ('third parties')
            who perform services for us or on our behalf and require access to such information to do that work. We have
            contracts in place with our third parties, which are designed to help safeguard your personal information.
            This means that they cannot do anything with your personal information unless we have instructed them to do
            it. They will also not share your personal information with any organisation apart from us. They also commit
            to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of
            third parties we may share personal information with are as follows:
          </p>
          <ul>
            <li>Data Analytics Services</li>
            <li>Data Storage Service Providers</li>
            <li>Finance & Accounting Tools</li>
            <li>Payment Processors</li>
            <li>Performance Monitoring Tools</li>
          </ul>
          <p>We also may need to share your personal information in the following situations:</p>
          <ul>
            <li>
              <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion
              of our business to another company.
            </li>
            <li>
              <strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will
              require those affiliates to honour this privacy notice. Affiliates include our parent company and any
              subsidiaries, joint venture partners, or other companies that we control or that are under common control
              with us.
            </li>
            <li>
              <strong>Business Partners.</strong> We may share your information with our business partners to offer you
              certain products, services, or promotions.
            </li>
          </ul>

          <h2>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p>
            We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice
            unless otherwise required by law.
          </p>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this
            privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting,
            or other legal requirements).
          </p>
          <p>
            When we have no ongoing legitimate business need to process your personal information, we will either delete
            or anonymise such information, or, if this is not possible (for example, because your personal information
            has been stored in backup archives), then we will securely store your personal information and isolate it
            from any further processing until deletion is possible.
          </p>

          <h2>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
          <p>
            We aim to protect your personal information through a system of organisational and technical security
            measures.
          </p>
          <p>
            We have implemented appropriate and reasonable technical and organisational security measures designed to
            protect the security of any personal information we process. However, despite our safeguards and efforts to
            secure your information, no electronic transmission over the Internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
            unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or
            modify your information. Although we will do our best to protect your personal information, transmission of
            personal information to and from our Services is at your own risk. You should only access the Services
            within a secure environment.
          </p>

          <h2>7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p>
            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services,
            you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to
            such minor dependent's use of the Services. If we learn that personal information from users less than 18
            years of age has been collected, we will deactivate the account and take reasonable measures to promptly
            delete such data from our records. If you become aware of any data we may have collected from children under
            age 18, please contact us at: team@evnmedia.com
          </p>

          <h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p>
            In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection
            laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii)
            to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv)
            if applicable, to data portability. In certain circumstances, you may also have the right to object to the
            processing of your personal information. You can make such a request by contacting us by using the contact
            details provided in Section 12 of this policy.
          </p>
          <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>
          <p>
            If you are located in the EEA or UK and you believe we are unlawfully processing your personal information,
            you also have the right to complain to your local data protection supervisory authority. You can find their
            contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
          </p>
          <p>
            If you are located in Switzerland, the contact details for the data protection authorities are available
            here: https://www.edoeb.admin.ch/edoeb/en/home.html.
          </p>
          <p>
            <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal
            information, which may be express and/or implied consent depending on the applicable law, you have the right
            to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using
            the contact details provided in Section 12 of this policy.
          </p>
          <p>
            However, please note that this will not affect the lawfulness of the processing before its withdrawal nor,
            when applicable law allows, will it affect the processing of your personal information conducted in reliance
            on lawful processing grounds other than consent.
          </p>
          <p>
            <strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our
            marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that
            we send, or by contacting us using the details provided in Section 12 of this policy. You will then be
            removed from the marketing lists. However, we may still communicate with you – for example, to send you
            service-related messages that are necessary for the administration and use of your account, to respond to
            service requests, or for other non-marketing purposes.
          </p>
          <p>If you have questions or comments about your privacy rights, you may email us at: team@evnmedia.com</p>

          <h2>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p>
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (DNT)
            feature or setting you can activate to signal your privacy preference not to have data about your online
            browsing activities monitored and collected. At this stage no uniform technology standard for recognising
            and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals
            or any other mechanism that automatically communicates your choice not to be tracked online. If a standard
            for online tracking is adopted that we must follow in the future, we will inform you about that practice in
            a revised version of this privacy notice.
          </p>

          <h2>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
          <p>
            California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are
            California residents to request and obtain from us, once a year and free of charge, information about
            categories of personal information (if any) we disclosed to third parties for direct marketing purposes and
            the names and addresses of all third parties with which we shared personal information in the immediately
            preceding calendar year. If you are a California resident and would like to make such a request, please
            submit your request in writing to us using the contact information provided below.
          </p>
          <p>
            If you are under 18 years of age, reside in California, and have a registered account with Services, you
            have the right to request removal of unwanted data that you publicly post on the Services. To request
            removal of such data, please contact us using the contact information provided below and include the email
            address associated with your account and a statement that you reside in California. We will make sure the
            data is not publicly displayed on the Services, but please be aware that the data may not be completely or
            comprehensively removed from all our systems (e.g. backups, etc.).
          </p>

          <h2>11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated
            'Revised' date and the updated version will be effective as soon as it is accessible. If we make material
            changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or
            by directly sending you a notification. We encourage you to review this privacy notice frequently to be
            informed of how we are protecting your information.
          </p>

          <h2>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at: team@evnmedia.com or by post to:
          </p>
          <p>
            EVN MEDIA LTD
            <br />
            22 Greenwood Close
            <br />
            Morden
            <br />
            SM4 4HX
            <br />
            London
          </p>

          <h2>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
          <p>
            Based on the applicable laws of your country, you may have the right to request access to the personal
            information we collect from you, change that information, or delete it. To request to review, update, or
            delete your personal information please contact us at: team@evnmedia.com
          </p>
        </motion.div>
      </div>
    </div>
  )
}

