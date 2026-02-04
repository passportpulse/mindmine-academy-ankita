const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

// Get all enquiries
exports.getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create enquiry and send email
exports.createEnquiry = async (req, res) => {
  console.log(req.body);
  const { name, email, phone, course, lastQualification, message } = req.body;

  // log what backend is receiving (VERY IMPORTANT for Render)
  console.log("REQ BODY:", req.body);

  const missingFields = [];

  if (!name) missingFields.push("name");
  if (!email) missingFields.push("email");
  if (!phone) missingFields.push("phone");
  if (!course) missingFields.push("course");
  if (!lastQualification) missingFields.push("lastQualification");
  if (!message) missingFields.push("message");

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
      missingFields, // 👈 tells you exactly what's missing
      received: req.body,
    });
  }

  try {
    // 1️⃣ Save to DB immediately
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      course,
      lastQualification,
      message,
    });

    // 2️⃣ Send emails in background, no await
    setImmediate(async () => {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          secure: Number(process.env.SMTP_PORT) === 465, // true only for 465
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
        console.log("SMTP CONFIG:", {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS ? "SET" : "MISSING",
        });

        await transporter.sendMail({
          from: `"${name}" <${email}>`,
          to: process.env.CONTACT_EMAIL,
          subject: `New Enquiry: ${course}`,
          html: `
    <h3>📩 New Enquiry Received</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Last Qualification:</strong> ${lastQualification}</p>
    <p><strong>Course Interested In:</strong> ${course}</p>
    <hr/>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
        });

        await transporter.sendMail({
          from: `"Mindmine Academy" <${process.env.CONTACT_EMAIL}>`,
          to: email,
          subject: "Mindmine Academy – Enquiry Received",
          html: `
            <p>Hello ${name},</p>
            <p>Thank you for contacting <strong>Mindmine Academy</strong>.</p>
            <p>We have received your enquiry regarding "<strong>${course}</strong>".</p>
            <p>Our team will review your message and get back to you as soon as possible.</p>
            <br/>
            <p>Best regards,<br/>Mindmine Academy Team</p>
          `,
        });
        console.log("Emails sent successfully for enquiry:", enquiry._id);
      } catch (emailErr) {
        console.error("Email sending failed:", emailErr);
      }
    });

    // 3️⃣ Respond immediately to frontend
    res.status(201).json({
      success: true,
      message: "Enquiry submitted! Emails are being sent.",
    });
  } catch (err) {
    console.error("Enquiry creation error:", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to submit enquiry" });
  }
};
