import nodemailer from 'nodemailer';

export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
}

export const sendLeadNotification = async (leadData: LeadData): Promise<void> => {
  // Skip email in development unless explicitly configured
  if (process.env.NODE_ENV === 'development' && !process.env.SMTP_HOST) {
    console.log('📧 Lead notification (development mode):', leadData);
    return;
  }

  // Fix common typo in SMTP_HOST (temporary fix)
  const smtpHost = process.env.SMTP_HOST === 'stmp.gmail.com' ? 'smtp.gmail.com' : process.env.SMTP_HOST;
  
  console.log(`📧 Using SMTP host: ${smtpHost}`);

  // Create transporter with SMTP settings
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.SMTP_FROM || 'noreply@cmtgmagic.com',
    to: 'studio@cmtgmagic.com',
    subject: `🎯 New Demo Request from ${leadData.firstName} ${leadData.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #7C3AED, #3B82F6); padding: 20px; border-radius: 10px 10px 0 0; color: white;">
          <h1 style="margin: 0; font-size: 24px;">🎬 New Demo Request</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">CMTG - Creative Magic to Go</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <h2 style="color: #7C3AED; margin-top: 0;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e9ecef;">
              <td style="padding: 12px 0; font-weight: bold; color: #495057;">Name:</td>
              <td style="padding: 12px 0; color: #212529;">${leadData.firstName} ${leadData.lastName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e9ecef;">
              <td style="padding: 12px 0; font-weight: bold; color: #495057;">Email:</td>
              <td style="padding: 12px 0;"><a href="mailto:${leadData.email}" style="color: #7C3AED; text-decoration: none;">${leadData.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e9ecef;">
              <td style="padding: 12px 0; font-weight: bold; color: #495057;">Phone:</td>
              <td style="padding: 12px 0;"><a href="tel:${leadData.phone}" style="color: #7C3AED; text-decoration: none;">${leadData.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #495057;">Company:</td>
              <td style="padding: 12px 0; color: #212529;">${leadData.company}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #28a745;">
            <h3 style="color: #28a745; margin-top: 0;">🎯 Next Steps</h3>
            <ul style="color: #495057; line-height: 1.6;">
              <li>Respond within 24 hours for optimal conversion</li>
              <li>Schedule a 30-minute demo call</li>
              <li>Prepare Hollywood editing samples relevant to their industry</li>
              <li>Discuss their current social media challenges</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${leadData.email}?subject=Your%20CMTG%20Demo%20Request%20-%20Let's%20Schedule!" 
               style="background: #7C3AED; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              📧 Reply to ${leadData.firstName}
            </a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 14px;">
          <p>Generated automatically by CMTG website • ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `,
  };

  try {
    console.log('📧 Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });
    
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Lead notification email sent successfully:', result.messageId);
  } catch (error) {
    const errorObj = error as any;
    console.error('❌ Failed to send lead notification email:', error);
    console.error('Error details:', {
      code: errorObj?.code,
      response: errorObj?.response,
      responseCode: errorObj?.responseCode
    });
    // Don't throw error to avoid breaking lead capture
  }
};