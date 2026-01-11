// const nodemailer = require("nodemailer");

// /**
//  * Create reusable transporter
//  */
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS, // Gmail App Password
//   },
// });

// /**
//  * Send sponsorship email
//  * @param {Object} client
//  * @param {string} client.email
//  * @param {string} client.name (optional)
//  */
// async function sendMail(client) {
//   const { email, name } = client;

//   const mailOptions = {
//     from: `"SPLASH – LHMC Cultural Fest" <${process.env.EMAIL_USER}>`,
//     to: email,
//     subject: "Sponsorship Opportunity – SPLASH | LHMC Cultural Fest 2025",
//     html: `
//       <p>Dear ${name || "Sir/Ma’am"},</p>

//       <p>
//         Greetings from <strong>Lady Hardinge Medical College, New Delhi</strong>.
//       </p>

//       <p>
//         My name is <strong>Mantasha Naaz</strong>, and I am part of the Sales & Marketing team for
//         <strong>SPLASH – LHMC Cultural Fest 2025</strong>, one of Delhi’s most dynamic and widely
//         celebrated college festivals. The fest brings together a diverse and vibrant student
//         audience from <strong>LHMC, Delhi University, and several premier institutions across NCR</strong>.
//       </p>

//       <p>
//         We are delighted to invite your esteemed brand to collaborate with us as a
//         <strong>Sponsor / Brand Partner</strong> for this year’s edition of SPLASH.
//         With a highly energetic youth audience, extensive social-media engagement, stage events,
//         cultural showcases, competitions, and interactive zones, the fest offers an excellent
//         platform for <strong>brand visibility, student interaction, and impactful on-ground activation</strong>.
//       </p>

//       <p><strong>Why Partner With SPLASH?</strong></p>
//       <ul>
//         <li>Large footfall from medical and non-medical colleges</li>
//         <li>High social-media reach with strong student engagement</li>
//         <li>Opportunities for stalls, product sampling, branding, and giveaways</li>
//         <li>Stage mentions, influencer tie-ins, and premium visibility across event zones</li>
//         <li>Highly active 18–25 year-old youth demographic</li>
//         <li>Exclusive access to the medical student community</li>
//       </ul>

//       <p><strong>Sponsorship Opportunities:</strong></p>
//       <ul>
//         <li>Title Sponsor</li>
//         <li>Co-Sponsor</li>
//         <li>Powered By / Associate Sponsor</li>
//         <li>Stall Partner / Gifting Partner / Food Partner</li>
//         <li>Medical & Wellness Partner</li>
//         <li>Media / Online Promotions Partner</li>
//       </ul>

//       <p>
//         We would be happy to customize the deliverables to align with your brand’s marketing objectives.
//       </p>

//       <p>
//         Kindly let us know your interest, and I will be glad to share the detailed sponsorship deck
//         and available collaboration packages.
//       </p>

//       <p>
//         Looking forward to a meaningful and impactful partnership.
//       </p>

//       <p>
//         Warm regards,<br/>
//         <strong>Mantasha Naaz</strong><br/>
//         Sales & Marketing – SPLASH, LHMC Cultural Fest<br/>
//         📧 naazmantasha83@gmail.com<br/>
//         📞 +91-9693884135
//       </p>
//     `,
//   };

//   return transporter.sendMail(mailOptions);
// }

// module.exports = { sendMail };

const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

/**
 * Create reusable transporter
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

/**
 * Send sponsorship email with PDF attachment
 * @param {Object} client
 * @param {string} client.email
 * @param {string} client.brand
 */
async function sendMail(client) {
  const { email, brand } = client;

  const attachmentPath = path.join(
    __dirname,
    "../attachments/SPLASH_2026_compressed.pdf"
  );
  const attachmentExists = fs.existsSync(attachmentPath);
  // console.log(`Attachment exists: ${attachmentExists}`);
  const mailOptions = {
    from: `"SPLASH – LHMC Cultural Fest" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Sponsorship Opportunity – SPLASH 2026 | LHMC Cultural Fest",
    html: `
      <p>Dear ${brand || "Team"} Team,</p>

      <p>
        I hope this message finds you well.
      </p>

      <p>
        We are pleased to invite your esteemed brand to be a part of
        <strong>SPLASH 2026</strong>, the annual cultural fest of
        <strong>Lady Hardinge Medical College, New Delhi</strong>.
        SPLASH is one of the most anticipated medical college festivals in the country,
        bringing together a vibrant audience of over <strong>10,000+</strong> students and professionals.
      </p>

      <p><strong>Event Highlights:</strong></p>
      <ul>
        <li><strong>Dates:</strong> 5th – 8th February 2026</li>
        <li><strong>Venue:</strong> Lady Hardinge Medical College, Connaught Place, New Delhi</li>
        <li><strong>Audience:</strong> 10,000+ medical students and young professionals</li>
      </ul>

      <p>
        SPLASH is more than just an event—it is a platform that enables brands to connect
        directly with future healthcare leaders and decision-makers through high-impact,
        on-ground and digital engagement.
      </p>

      <p><strong>Why Partner With SPLASH 2026?</strong></p>
      <ul>
        <li>Extensive brand visibility across social media, event promotions, banners, and posters</li>
        <li>Direct engagement with attendees through stalls, activities, and branding opportunities</li>
        <li>Access to a niche yet influential medical student community</li>
        <li>Prime location in Connaught Place, ensuring wide exposure beyond campus</li>
      </ul>

      <p>
        We are seeking sponsorship partners to support event logistics, planning, and promotions.
        In return, we offer premium brand exposure and meaningful engagement opportunities.
      </p>

      <p>
        Please find the detailed sponsorship deck attached for your reference.
      </p>

      <p>
        For further discussion, feel free to contact us at:
        <br/>
        <strong>+91 8860902600</strong><br/>
        <strong>+91 9582262331</strong>
      </p>

      <p>
        We look forward to exploring a mutually beneficial partnership with your brand.
      </p>

      <p>
        Best regards,<br/>
        <strong>Marketing Heads</strong><br/>
        Students' Union<br/>
        Lady Hardinge Medical College
      </p>
    `,
    attachments: [
      {
        filename: "SPLASH_2026_compressed.pdf",
        path: path.join(__dirname, "../attachments/SPLASH_2026_compressed.pdf"),
        contentType: "application/pdf",
      },
    ],
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
