<script lang="ts">
  import LegalDocument from '$lib/components/LegalDocument.svelte';
  import { company, legalDocuments } from '$lib/legal';

  const sections = [
    { id: 'scope', title: 'Who We Are and What This Policy Covers' },
    { id: 'information', title: 'Information We Collect' },
    { id: 'cookies', title: 'Cookies and Tracking Technologies' },
    { id: 'use', title: 'How We Use Information' },
    { id: 'legal-bases', title: 'Legal Bases for Processing' },
    { id: 'sharing', title: 'How We Share Information' },
    { id: 'retention', title: 'Data Retention' },
    { id: 'security', title: 'Security' },
    { id: 'transfers', title: 'International Data Transfers' },
    { id: 'rights', title: 'Your Rights and Choices' },
    { id: 'links', title: 'Links to Other Websites' },
    { id: 'changes', title: 'Changes to This Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];
</script>

<LegalDocument
  title={legalDocuments.privacy.title}
  description="How Cyphermeister LLC collects, uses, shares, and protects personal information on cyphermeister.com."
  lastUpdated={legalDocuments.privacy.lastUpdated}
  {sections}
>
  <p class="lead">
    This Privacy Policy (the "Policy") describes how {company.legalName} ("{company.shortName}," "we,"
    "us," or "our") collects, uses, and shares personal information when you visit
    <a href={company.siteUrl}>{company.domain}</a> (the "Website") or communicate with us, and the rights
    and choices available to you.
  </p>

  <aside class="summary" aria-label="Summary of this policy">
    <p class="summary-label">At a glance</p>
    <ul>
      <li>
        The Website sets <strong>no cookies</strong> and uses <strong>no analytics, advertising, or
        tracking</strong> technologies.
      </li>
      <li>
        There are no user accounts. The only personal information we receive from visitors is what you
        choose to send us by email.
      </li>
      <li>
        The Website is hosted on GitHub Pages and loads fonts from Google Fonts. Those providers receive
        standard technical data, such as your IP address, when your browser requests the pages and fonts.
      </li>
      <li>
        We <strong>do not sell</strong> personal information, and we do not share it with third parties
        for their own marketing.
      </li>
      <li>
        Questions or requests: <a href="mailto:{company.contactEmail}">{company.contactEmail}</a>.
      </li>
    </ul>
  </aside>

  <section id="scope">
    <h2>Who We Are and What This Policy Covers</h2>
    <p>
      {company.legalName} is a limited liability company organized in the United States that provides
      consulting services in distributed systems, blockchain technologies, and applied cryptography. For
      the purposes of data-protection law, {company.legalName} is the controller of the personal
      information described in this Policy.
    </p>
    <p>
      This Policy applies to personal information we collect through the Website and through your
      communications with us, including as a prospective or current client. It does not apply to
      information that we process on behalf of a client in the course of an engagement; that processing is
      governed by the applicable engagement agreement.
    </p>
  </section>

  <section id="information">
    <h2>Information We Collect</h2>

    <h3>Information you provide to us</h3>
    <p>
      When you contact us, whether by email or through the contact form on the Website, we receive your
      email address, your name if you include it, the contents of your message, and any attachments you
      send. The contact form does not submit anything to the Website or to our servers: it composes a
      message in your own email application, and the message is sent from your email account to
      <a href="mailto:{company.contactEmail}">{company.contactEmail}</a>.
    </p>
    <p>
      If you become a client, we collect the information needed to enter into and perform the engagement,
      such as business contact details, billing and payment information, and the information you share
      with us in the course of the work.
    </p>

    <h3>Information collected automatically</h3>
    <p>
      The Website is a static site with no server-side application code of our own. It is hosted on
      <strong>GitHub Pages</strong>, a service operated by GitHub, Inc. When you visit the Website, your
      browser automatically sends technical information to GitHub's servers, including your IP address,
      browser type and version, operating system, the pages you request, the referring page, and the date
      and time of your visit. GitHub may log this information to maintain the security and integrity of
      its service and to comply with legal obligations, as described in the
      <a
        href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
        target="_blank"
        rel="noopener noreferrer">GitHub General Privacy Statement</a
      >. We do not receive visitor logs or analytics from GitHub Pages.
    </p>
    <p>
      The Website loads its typefaces from <strong>Google Fonts</strong>, a service operated by Google
      LLC. To deliver the fonts, your browser sends a request, including your IP address and browser
      information, to Google's servers. Google describes how it handles these requests in the
      <a href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener noreferrer"
        >Google Fonts privacy FAQ</a
      >
      and the
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
        >Google Privacy Policy</a
      >.
    </p>
    <p>
      We do not ourselves collect, and do not have access to, any of this automatically transmitted
      information.
    </p>
  </section>

  <section id="cookies">
    <h2>Cookies and Tracking Technologies</h2>
    <p>
      The Website does not set cookies, does not use local storage or similar technologies to identify or
      track visitors, and does not use any analytics, advertising, session-replay, or social-media
      tracking technologies. Because the Website does not track you, we do not display a cookie consent
      banner.
    </p>
    <p>
      To our knowledge, neither GitHub Pages nor the Google Fonts API sets cookies when serving the
      Website. Browser "Do Not Track" and Global Privacy Control signals do not change how the Website
      operates, because the Website does not track visitors across websites and we do not sell or share
      personal information.
    </p>
  </section>

  <section id="use">
    <h2>How We Use Information</h2>
    <p>We use the personal information described above to:</p>
    <ul>
      <li>respond to your inquiries and communicate with you;</li>
      <li>evaluate, negotiate, enter into, and perform consulting engagements;</li>
      <li>issue invoices, process payments, and maintain business and accounting records;</li>
      <li>
        protect the security and integrity of our systems and communications, and prevent fraud and
        abuse;
      </li>
      <li>comply with legal, regulatory, tax, and accounting obligations; and</li>
      <li>establish, exercise, or defend legal claims and enforce our agreements.</li>
    </ul>
    <p>
      We do not use personal information for targeted advertising, automated decision-making, or
      profiling, and we do not sell it.
    </p>
  </section>

  <section id="legal-bases">
    <h2>Legal Bases for Processing</h2>
    <p>
      If you are located in the European Economic Area, the United Kingdom, or Switzerland, we process
      your personal information on the following legal bases:
    </p>
    <ul>
      <li>
        <strong>Performance of a contract</strong>, or steps taken at your request before entering into
        one, when we respond to your inquiry about our services or perform an engagement;
      </li>
      <li>
        <strong>Legitimate interests</strong>, when we operate and secure the Website, communicate with
        you, and administer our business, provided those interests are not overridden by your rights and
        interests;
      </li>
      <li>
        <strong>Legal obligation</strong>, when we retain records or disclose information as required by
        law; and
      </li>
      <li><strong>Consent</strong>, where you have given it, which you may withdraw at any time.</li>
    </ul>
  </section>

  <section id="sharing">
    <h2>How We Share Information</h2>
    <p>We share personal information only in the following circumstances:</p>
    <ul>
      <li>
        <strong>Service providers.</strong> We use third-party providers to host the Website (GitHub),
        deliver web fonts (Google), and provide email, document storage, accounting, invoicing, and
        payment-processing services. These providers process personal information only as needed to
        provide their services to us and are bound by contractual or legal obligations regarding its use.
      </li>
      <li>
        <strong>Professional advisers.</strong> We may share information with our lawyers, accountants,
        and other advisers where necessary for them to advise us.
      </li>
      <li>
        <strong>Legal requirements and protection of rights.</strong> We may disclose information when
        required by law, regulation, subpoena, or court order, or when we believe disclosure is necessary
        to protect the rights, property, or safety of {company.shortName}, our clients, or others.
      </li>
      <li>
        <strong>Business transfers.</strong> If {company.shortName} is involved in a merger, acquisition,
        financing, reorganization, or sale of all or part of its assets, personal information may be
        transferred as part of that transaction, subject to this Policy.
      </li>
      <li><strong>With your direction or consent.</strong></li>
    </ul>
    <p>
      We do not sell, rent, or trade personal information, and we do not share it with third parties for
      their own marketing purposes.
    </p>
  </section>

  <section id="retention">
    <h2>Data Retention</h2>
    <p>
      We retain correspondence for as long as needed to respond to you and for a reasonable period
      afterward to maintain continuity in our business relationship. We retain records relating to client
      engagements for the duration of the engagement and afterward for as long as required by applicable
      tax, accounting, professional, and legal record-keeping obligations, or as needed to establish,
      exercise, or defend legal claims. When personal information is no longer needed for these purposes,
      we delete or anonymize it.
    </p>
  </section>

  <section id="security">
    <h2>Security</h2>
    <p>
      We take reasonable administrative, technical, and organizational measures to protect personal
      information against unauthorized access, loss, misuse, or alteration. The Website is served over
      HTTPS. No method of transmission over the internet or of electronic storage is completely secure,
      however, and we cannot guarantee absolute security.
    </p>
  </section>

  <section id="transfers">
    <h2>International Data Transfers</h2>
    <p>
      We are based in the United States, and the service providers described above may process personal
      information in the United States and in other countries whose data-protection laws may differ from
      those of your country. Where required by applicable law, we rely on appropriate safeguards for such
      transfers, such as standard contractual clauses incorporated into our providers' terms, or on the
      fact that the transfer is necessary to respond to a request you have made or to perform a contract
      with you.
    </p>
  </section>

  <section id="rights">
    <h2>Your Rights and Choices</h2>
    <p>
      Depending on where you live, you may have some or all of the following rights regarding your
      personal information: to access it; to correct it; to have it deleted; to restrict or object to its
      processing; to receive a copy of it in a portable format; to withdraw consent where processing is
      based on consent; and to lodge a complaint with a data-protection supervisory authority.
    </p>
    <p>
      If you are a California resident, you have the right to know what personal information we collect,
      use, and disclose about you; to request its deletion or correction; and not to be discriminated
      against for exercising your rights. We do not sell or "share" personal information as those terms
      are defined under California law, and we have not done so in the preceding twelve months.
    </p>
    <p>
      To exercise any of these rights, contact us at
      <a href="mailto:{company.contactEmail}">{company.contactEmail}</a>. We may need to verify your
      identity before acting on your request, and we will respond within the time required by applicable
      law. You may also stop communicating with us, or ask us to delete your correspondence, at any time.
    </p>
  </section>


  <section id="links">
    <h2>Links to Other Websites</h2>
    <p>
      The Website contains links to third-party websites, including GitHub. This Policy does not apply to
      those websites, and we are not responsible for their privacy practices. We encourage you to review
      the privacy policy of any website you visit.
    </p>
  </section>

  <section id="changes">
    <h2>Changes to This Policy</h2>
    <p>
      We may update this Policy from time to time. When we do, we will post the revised Policy on this page
      and update the "Last updated" date above. If the changes are material, we will take reasonable steps
      to notify current clients, such as by email.
    </p>
  </section>

  <section id="contact">
    <h2>Contact Us</h2>
    <p>
      If you have questions about this Policy or about how we handle personal information, please contact
      us:
    </p>
    <address>
      <strong>{company.legalName}</strong><br />
      <a href="mailto:{company.contactEmail}">{company.contactEmail}</a>
    </address>
  </section>
</LegalDocument>
