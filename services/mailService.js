const nodemailer = require("nodemailer");

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
 * Send sponsorship email
 * @param {Object} client
 * @param {string} client.email
 * @param {string} client.name (optional)
 */
async function sendMail(client) {
  const { email, name } = client;

  const mailOptions = {
    from: `"SPLASH – LHMC Cultural Fest" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Sponsorship Opportunity – SPLASH | LHMC Cultural Fest 2025",
    html: `
      <p>Dear ${name || "Sir/Ma’am"},</p>

      <p>
        Greetings from <strong>Lady Hardinge Medical College, New Delhi</strong>.
      </p>

      <p>
        My name is <strong>Mantasha Naaz</strong>, and I am part of the Sales & Marketing team for
        <strong>SPLASH – LHMC Cultural Fest 2025</strong>, one of Delhi’s most dynamic and widely
        celebrated college festivals. The fest brings together a diverse and vibrant student
        audience from <strong>LHMC, Delhi University, and several premier institutions across NCR</strong>.
      </p>

      <p>
        We are delighted to invite your esteemed brand to collaborate with us as a
        <strong>Sponsor / Brand Partner</strong> for this year’s edition of SPLASH.
        With a highly energetic youth audience, extensive social-media engagement, stage events,
        cultural showcases, competitions, and interactive zones, the fest offers an excellent
        platform for <strong>brand visibility, student interaction, and impactful on-ground activation</strong>.
      </p>

      <p><strong>Why Partner With SPLASH?</strong></p>
      <ul>
        <li>Large footfall from medical and non-medical colleges</li>
        <li>High social-media reach with strong student engagement</li>
        <li>Opportunities for stalls, product sampling, branding, and giveaways</li>
        <li>Stage mentions, influencer tie-ins, and premium visibility across event zones</li>
        <li>Highly active 18–25 year-old youth demographic</li>
        <li>Exclusive access to the medical student community</li>
      </ul>

      <p><strong>Sponsorship Opportunities:</strong></p>
      <ul>
        <li>Title Sponsor</li>
        <li>Co-Sponsor</li>
        <li>Powered By / Associate Sponsor</li>
        <li>Stall Partner / Gifting Partner / Food Partner</li>
        <li>Medical & Wellness Partner</li>
        <li>Media / Online Promotions Partner</li>
      </ul>

      <p>
        We would be happy to customize the deliverables to align with your brand’s marketing objectives.
      </p>

      <p>
        Kindly let us know your interest, and I will be glad to share the detailed sponsorship deck
        and available collaboration packages.
      </p>

      <p>
        Looking forward to a meaningful and impactful partnership.
      </p>

      <p>
        Warm regards,<br/>
        <strong>Mantasha Naaz</strong><br/>
        Sales & Marketing – SPLASH, LHMC Cultural Fest<br/>
        📧 naazmantasha83@gmail.com<br/>
        📞 +91-9693884135
      </p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
