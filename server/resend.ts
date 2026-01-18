// Resend email integration for IRIS-AI contact form
import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return {
    apiKey: connectionSettings.settings.api_key, 
    fromEmail: connectionSettings.settings.from_email
  };
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
export async function getUncachableResendClient() {
  const credentials = await getCredentials();
  return {
    client: new Resend(credentials.apiKey),
    fromEmail: connectionSettings.settings.from_email
  };
}

export interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    const result = await client.emails.send({
      from: fromEmail,
      to: 'mahlatsek@uj.ac.za',
      subject: `[IRIS-AI Contact] ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${data.name} (${data.email})</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <hr style="border: 1px solid #e5e7eb;" />
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <hr style="border: 1px solid #e5e7eb;" />
          <p style="color: #6b7280; font-size: 12px;">
            This message was sent via the IRIS-AI project website contact form.
          </p>
        </div>
      `,
      replyTo: data.email,
    });

    return !!result.data?.id;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
