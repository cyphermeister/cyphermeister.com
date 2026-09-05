<script lang="ts">
  import LegalDocument from '$lib/components/LegalDocument.svelte';
  import { company, legalDocuments } from '$lib/legal';

  const sections = [
    { id: 'acceptance', title: 'Acceptance of These Terms' },
    { id: 'about', title: 'About Cyphermeister and the Services' },
    { id: 'engagements', title: 'Consulting Engagements' },
    { id: 'use', title: 'Use of the Website' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'communications', title: 'Communications and Feedback' },
    { id: 'no-advice', title: 'No Professional or Investment Advice' },
    { id: 'third-parties', title: 'Third-Party Links and Services' },
    { id: 'confidentiality', title: 'Confidentiality' },
    { id: 'warranties', title: 'Disclaimer of Warranties' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'governing-law', title: 'Governing Law and Dispute Resolution' },
    { id: 'changes', title: 'Changes to These Terms' },
    { id: 'general', title: 'General Provisions' },
    { id: 'contact', title: 'Contact Us' }
  ];
</script>

<LegalDocument
  title={legalDocuments.terms.title}
  description="Terms & Conditions governing use of the Cyphermeister LLC website and the provision of its consulting services."
  lastUpdated={legalDocuments.terms.lastUpdated}
  {sections}
>
  <p class="lead">
    These Terms &amp; Conditions (the "Terms") govern your access to and use of the website located at
    <a href={company.siteUrl}>{company.domain}</a> (the "Website") and the consulting and related
    professional services (the "Services") offered by {company.legalName} ("{company.shortName}," "we,"
    "us," or "our"). Please read them carefully. By accessing or using the Website, or by engaging us to
    provide Services, you agree to be bound by these Terms and by our
    <a href={legalDocuments.privacy.path}>Privacy Policy</a>, which is incorporated into these Terms by
    reference.
  </p>

  <section id="acceptance">
    <h2>Acceptance of These Terms</h2>
    <p>
      By accessing or using the Website you confirm that you have read, understood, and agree to be bound
      by these Terms. If you do not agree to these Terms, you must not access or use the Website.
    </p>
    <p>
      If you access the Website or engage the Services on behalf of a company or other legal entity, you
      represent and warrant that you have the authority to bind that entity to these Terms, in which case
      "you" and "your" refer to that entity.
    </p>
  </section>

  <section id="about">
    <h2>About Cyphermeister and the Services</h2>
    <p>
      {company.legalName} is a limited liability company organized in the United States. We provide
      consulting services in distributed systems, blockchain and Web3 technologies, and applied
      cryptography. The Website provides general information about our firm and the Services we offer,
      and a means of contacting us.
    </p>
    <p>
      Descriptions of Services on the Website are provided for general information only. They do not
      constitute a binding offer, and the availability, scope, and pricing of any Services are determined
      solely by the applicable Engagement Agreement described in Section 3.
    </p>
  </section>

  <section id="engagements">
    <h2>Consulting Engagements</h2>
    <p>
      We provide Services only under a separate written agreement between {company.shortName} and the
      client, such as a master services agreement, statement of work, consulting agreement, or signed
      proposal (each, an "Engagement Agreement"). The Engagement Agreement sets out the scope of work,
      deliverables, timelines, fees, confidentiality obligations, ownership of work product, warranties,
      and other terms specific to that engagement.
    </p>
    <p>
      No client relationship is created, and no engagement exists, until an Engagement Agreement has been
      executed by both parties. Estimates, proposals, and informal communications are non-binding unless
      and until they are incorporated into an Engagement Agreement.
    </p>
    <p>
      If there is a conflict between these Terms and an Engagement Agreement, the Engagement Agreement
      controls with respect to the Services it covers. These Terms continue to govern your use of the
      Website.
    </p>
  </section>

  <section id="use">
    <h2>Use of the Website</h2>
    <p>
      You may use the Website only for lawful purposes and in accordance with these Terms. You agree that
      you will not:
    </p>
    <ul>
      <li>use the Website in any manner that violates any applicable law or regulation;</li>
      <li>
        attempt to gain unauthorized access to, interfere with, damage, or disrupt the Website, the
        servers on which it is hosted, or any connected system or network;
      </li>
      <li>
        use any robot, spider, scraper, or other automated means to access the Website, other than
        search-engine indexing conducted in accordance with our robots.txt file;
      </li>
      <li>introduce viruses, malware, or any other malicious or technologically harmful material;</li>
      <li>
        impersonate {company.shortName}, its personnel, or any other person or entity, or misrepresent
        your affiliation with any person or entity;
      </li>
      <li>use the Website or our contact details to send unsolicited commercial communications; or</li>
      <li>remove, obscure, or alter any copyright, trademark, or other proprietary notice on the Website.</li>
    </ul>
    <p>
      We may suspend, restrict, or terminate your access to the Website at any time, with or without
      notice, including if we reasonably believe you have violated these Terms.
    </p>
  </section>

  <section id="intellectual-property">
    <h2>Intellectual Property</h2>
    <p>
      The Website and its contents, including all text, graphics, logos, design elements, and the
      selection and arrangement of those materials (collectively, the "Content"), are owned by
      {company.legalName} or its licensors and are protected by copyright, trademark, and other
      intellectual property laws.
    </p>
    <p>
      Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
      non-transferable, revocable license to access and view the Content for your personal or internal
      business purposes. You may not reproduce, distribute, modify, create derivative works of, publicly
      display, or otherwise exploit any Content without our prior written consent, except as expressly
      permitted by these Terms or by applicable law.
    </p>
    <p>
      "Cyphermeister," the Cyphermeister logo, and related names and marks are trademarks of
      {company.legalName}. You may not use them without our prior written permission.
    </p>
    <p>
      Source code for the Website is published in our
      <a href={company.githubUrl} target="_blank" rel="noopener noreferrer">GitHub repository</a> under an
      open-source license. That license governs your use of the licensed source code; it does not grant
      any rights in our name, logo, or trademarks. Ownership of, and rights in, work product created under
      an Engagement Agreement are governed exclusively by that agreement.
    </p>
  </section>

  <section id="communications">
    <h2>Communications and Feedback</h2>
    <p>
      The contact form on the Website opens your own email application so that you can send a message to
      us; the Website itself does not store or transmit the contents of the form. Messages you send us by
      email travel over the public internet and may not be secure.
    </p>
    <p>
      If you provide us with ideas, suggestions, or other feedback about the Website or the Services
      ("Feedback"), you grant {company.shortName} a perpetual, irrevocable, worldwide, royalty-free
      license to use and exploit the Feedback for any purpose without any obligation to you.
    </p>
  </section>

  <section id="no-advice">
    <h2>No Professional or Investment Advice</h2>
    <p>
      The Content is provided for general informational purposes only. It does not constitute legal, tax,
      accounting, financial, or investment advice, and nothing on the Website is a recommendation, offer,
      or solicitation to buy, sell, or hold any cryptocurrency, digital asset, token, security, or other
      financial instrument.
    </p>
    <p>
      Blockchain and digital-asset technologies involve significant technical, regulatory, and financial
      risk. You should obtain independent professional advice before making any decision based on the
      Content. Professional advice, analysis, and deliverables are provided by us only under an
      Engagement Agreement.
    </p>
  </section>

  <section id="third-parties">
    <h2>Third-Party Links and Services</h2>
    <p>
      The Website may contain links to third-party websites and services, including GitHub, that are not
      owned or controlled by {company.shortName}. We are not responsible for the content, privacy
      practices, security, or availability of any third-party site, and a link does not imply our
      endorsement. Your use of third-party sites is at your own risk and subject to their terms.
    </p>
    <p>
      The Website is hosted by, and loads certain resources from, third-party providers. These providers,
      and the information they may receive when you visit the Website, are described in our
      <a href={legalDocuments.privacy.path}>Privacy Policy</a>.
    </p>
  </section>


  <section id="confidentiality">
    <h2>Confidentiality</h2>
    <p>
      Confidentiality obligations relating to an engagement are set out in the applicable Engagement
      Agreement or in a separate non-disclosure agreement between you and {company.shortName}.
    </p>
    <p>
      Unless we have entered into a written confidentiality agreement with you, information you send us
      outside an Engagement Agreement is not subject to a contractual duty of confidentiality. We
      nonetheless handle all personal information in accordance with our Privacy Policy, and we do not
      disclose the details of prospective engagements to third parties except as described there or as
      required by law.
    </p>
  </section>

  <section id="warranties">
    <h2>Disclaimer of Warranties</h2>
    <p>
      THE WEBSITE AND THE CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY
      KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT
      THAT THE WEBSITE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR
      THAT THE CONTENT IS ACCURATE, COMPLETE, OR CURRENT.
    </p>
    <p>
      ANY WARRANTIES APPLICABLE TO THE SERVICES ARE SET OUT EXCLUSIVELY IN THE APPLICABLE ENGAGEMENT
      AGREEMENT.
    </p>
    <p>
      SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS
      MAY NOT APPLY TO YOU.
    </p>
  </section>

  <section id="liability">
    <h2>Limitation of Liability</h2>
    <p>
      TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, {company.legalName.toUpperCase()} AND ITS
      MEMBERS, MANAGERS, OFFICERS, EMPLOYEES, CONTRACTORS, AND AGENTS (COLLECTIVELY, THE "CYPHERMEISTER
      PARTIES") WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY DAMAGES OR LOSSES OF ANY KIND,
      WHETHER DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE, INCLUDING
      WITHOUT LIMITATION ANY LOSS OF PROFITS, REVENUE, BUSINESS, DATA, DIGITAL ASSETS, OR GOODWILL,
      ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE WEBSITE
      OR THE CONTENT, OR YOUR RELIANCE ON ANY CONTENT, WHETHER BASED ON CONTRACT, TORT (INCLUDING
      NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE
      POSSIBILITY OF SUCH DAMAGES. YOUR USE OF THE WEBSITE AND THE CONTENT IS ENTIRELY AT YOUR OWN RISK.
    </p>
    <p>
      LIABILITY IN CONNECTION WITH THE SERVICES IS GOVERNED EXCLUSIVELY BY THE APPLICABLE ENGAGEMENT
      AGREEMENT.
    </p>
  </section>

  <section id="indemnification">
    <h2>Indemnification</h2>
    <p>
      You agree to indemnify, defend, and hold harmless the Cyphermeister Parties from and against any
      and all claims, liabilities, damages, losses, costs, and expenses, including reasonable attorneys'
      fees, arising out of or relating to (a) your violation of these Terms, (b) your use or misuse of
      the Website or the Content, or (c) your violation of any applicable law or of the rights of any
      third party.
    </p>
  </section>

  <section id="governing-law">
    <h2>Governing Law and Dispute Resolution</h2>
    <p>
      These Terms, and any dispute or claim arising out of or relating to them or to the Website, are
      governed by the laws of the United States and of the state in which {company.legalName} is
      organized, without regard to conflict-of-law rules.
    </p>
    <p>
      Before commencing any formal proceeding, you agree to first contact us at
      <a href="mailto:{company.contactEmail}">{company.contactEmail}</a> and to attempt in good faith to
      resolve the dispute informally for a period of at least thirty (30) days. If the dispute is not
      resolved within that period, any legal action or proceeding arising out of or relating to these
      Terms or the Website shall be brought exclusively in the state or federal courts located in the
      state in which {company.legalName} is organized, and you consent to the personal jurisdiction of,
      and venue in, those courts. Nothing in this Section
      prevents either party from seeking injunctive or other equitable relief in any court of competent
      jurisdiction to protect its intellectual property or confidential information.
    </p>
    <p>
      Dispute resolution for matters arising under an Engagement Agreement is governed by that agreement.
    </p>
  </section>

  <section id="changes">
    <h2>Changes to These Terms</h2>
    <p>
      We may revise these Terms from time to time. When we do, we will post the revised Terms on this page
      and update the "Last updated" date above. Revised Terms take effect when posted. Your continued use
      of the Website after revised Terms take effect constitutes your acceptance of them. Changes to the
      terms governing an active engagement will be made only by written amendment to the applicable
      Engagement Agreement.
    </p>
  </section>

  <section id="general">
    <h2>General Provisions</h2>
    <p>
      <strong>Entire agreement.</strong> These Terms, together with the Privacy Policy and any Engagement
      Agreement, constitute the entire agreement between you and {company.shortName} regarding the Website
      and supersede all prior or contemporaneous understandings regarding its subject matter.
    </p>
    <p>
      <strong>Severability.</strong> If any provision of these Terms is held to be invalid or
      unenforceable, that provision will be enforced to the maximum extent permissible and the remaining
      provisions will remain in full force and effect.
    </p>
    <p>
      <strong>No waiver.</strong> Our failure to enforce any right or provision of these Terms is not a
      waiver of that right or provision.
    </p>
    <p>
      <strong>Assignment.</strong> You may not assign or transfer these Terms without our prior written
      consent. We may assign these Terms without restriction, including in connection with a merger,
      acquisition, reorganization, or sale of assets.
    </p>
    <p>
      <strong>Electronic communications.</strong> You consent to receive communications from us
      electronically, and you agree that electronic communications satisfy any legal requirement that such
      communications be in writing.
    </p>
    <p>
      <strong>Headings.</strong> Section headings are for convenience only and do not affect the
      interpretation of these Terms.
    </p>
  </section>

  <section id="contact">
    <h2>Contact Us</h2>
    <p>If you have questions about these Terms, please contact us:</p>
    <address>
      <strong>{company.legalName}</strong><br />
      <a href="mailto:{company.contactEmail}">{company.contactEmail}</a>
    </address>
  </section>
</LegalDocument>
