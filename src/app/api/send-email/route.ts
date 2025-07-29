import { NextRequest, NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Initialize Brevo API
    const apiInstance = new brevo.TransactionalEmailsApi();

    // Set API key - you'll need to add this to your environment variables
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API_KEY is not set in environment variables");
      return NextResponse.json(
        { error: "Email service not configured properly" },
        { status: 500 }
      );
    }

    console.log("API Key exists:", apiKey ? "Yes" : "No");
    console.log("API Key length:", apiKey?.length || 0);

    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    // Create email content
    const emailContent = `
New Project Inquiry from ${name}

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || "Not provided"}
- Project Type: ${projectType || "Not specified"}
- Budget: ${budget || "Not specified"}

Project Description:
${message}

---
This email was sent from the Kodro contact form.
    `.trim();

    // Email data
    const emailData = {
      sender: {
        name: "Kodro Contact Form",
        email: "kodrodev@gmail.com", // Make sure this email is verified in Brevo
      },
      to: [
        {
          email: "kodrodev@gmail.com",
          name: "Kodro Team",
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `[KODRO] New Project Inquiry from ${name}`,
      textContent: emailContent,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Project Inquiry</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Project Type:</strong> ${
              projectType || "Not specified"
            }</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This email was sent from the Kodro contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    console.log("Attempting to send email to:", emailData.to[0].email);
    console.log("From:", emailData.sender.email);
    console.log("Subject:", emailData.subject);

    const result = await apiInstance.sendTransacEmail(emailData);

    console.log("Brevo response:", result.response.statusCode);
    console.log("Message ID:", result.body.messageId);

    return NextResponse.json({
      success: true,
      messageId: result.body.messageId,
    });
  } catch (error: unknown) {
    console.error("Email sending error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
