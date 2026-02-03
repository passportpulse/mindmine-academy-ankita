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

  if (!name || !email || !phone || !course || !lastQualification || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
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
          port: process.env.SMTP_PORT,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"${name}" <${email}>`,
          to: process.env.CONTACT_EMAIL,
          subject: `New Enquiry: ${subject}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
        });

        await transporter.sendMail({
          from: `"Mindmine Academy" <${process.env.CONTACT_EMAIL}>`,
          to: email,
          subject: "Mindmine Academy – Enquiry Received",
          html: `
            <p>Hello ${name},</p>
            <p>Thank you for contacting <strong>Mindmine Academy</strong>.</p>
            <p>We have received your enquiry regarding "<strong>${subject}</strong>".</p>
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
