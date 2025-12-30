const fs = require("fs");
const path = require("path");
const { sendMail } = require("../services/mailService");

const FILE_PATH = path.join(__dirname, "../data/emails.json");

function readEmails() {
  return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
}

function writeEmails(data) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

async function processNextEmail() {
  const emails = readEmails();
  const nextIndex = emails.findIndex((e) => e.status === "pending");

  if (nextIndex === -1) {
    console.log("✅ All emails processed");
    return;
  }

  const client = emails[nextIndex];

  try {
    await sendMail(client);
    emails[nextIndex].status = "sent";
    console.log(`📧 Sent → ${client.email}`);
  } catch (err) {
    emails[nextIndex].status = "failed";
    console.error(`❌ Failed → ${client.email}`);
  }

  writeEmails(emails);
}

function startScheduler() {
  console.log("🚀 Email scheduler started (1 email/min)");
  setInterval(processNextEmail, 30 * 1000);
}

module.exports = { startScheduler };
