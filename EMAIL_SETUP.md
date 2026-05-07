# Email Backend Setup Guide

This portfolio now includes a backend server to send emails from the contact form.

## Prerequisites

- Node.js installed on your machine
- Gmail account (or any email service supported by Nodemailer)

## Installation

1. Install the new dependencies:
```bash
npm install
```

This will install:
- `express` - Backend framework
- `nodemailer` - Email sending service
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
- `concurrently` - Run dev and server simultaneously

## Gmail Configuration (Important!)

To send emails via Gmail, you need to generate an **App Password**:

1. Go to your [Google Account](https://myaccount.google.com/)
2. Navigate to **Security** (left sidebar)
3. Enable **2-Step Verification** if not already enabled
4. Search for "App passwords" in the security settings
5. Select "Mail" and "Windows Computer" (or your device)
6. Google will generate a 16-character password
7. Copy this password and paste it in the `.env` file as `EMAIL_PASSWORD`

## Environment Variables

The `.env` file has been created with the following variables:

```env
EMAIL_USER=sahanshrestha2000@gmail.com
EMAIL_PASSWORD=your_app_password_here
RECIPIENT_EMAIL=sahanshrestha2000@gmail.com
VITE_API_BASE_URL=http://localhost:3001
```

**Replace `EMAIL_PASSWORD` with your Gmail App Password**

## Running the Application

### Development Mode (Frontend + Backend)
```bash
npm run dev:all
```

This runs both:
- Frontend: `http://localhost:5173` (Vite dev server)
- Backend: `http://localhost:3001` (Express server)

### Frontend Only
```bash
npm run dev
```

### Backend Only
```bash
npm run server
```

## Testing

1. Start the application: `npm run dev:all`
2. Go to `http://localhost:5173`
3. Fill out the contact form and submit
4. You should receive two emails:
   - One notification email at your configured email address
   - One confirmation email sent to the user who submitted the form

## Alternative Email Services

If you want to use a different email service instead of Gmail:

### Using Gmail SMTP without App Password:
```javascript
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASSWORD,
}
```

### Using a Different Provider (e.g., SendGrid, Mailgun):
Update the `transporter` configuration in `server.js`

Example for SendGrid:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});
```

## Troubleshooting

- **"Less secure apps" error**: Make sure to use App Passwords, not your regular Gmail password
- **"ENOTFOUND"**: Check that the backend server is running (port 3001)
- **CORS errors**: Ensure the backend is configured with CORS enabled
- **Emails not sending**: Check your `.env` file has the correct EMAIL_PASSWORD and EMAIL_USER

## Production Deployment

For production, you'll need to:

1. Set environment variables on your hosting service (Heroku, Vercel, etc.)
2. Update `VITE_API_BASE_URL` to your production API URL
3. Use a production-grade email service (SendGrid, AWS SES, etc.)
4. Deploy both frontend and backend (or use a serverless function for the backend)

## Security Notes

- Never commit `.env` file to version control (it's already in `.gitignore`)
- Use environment variables for all sensitive data
- Consider using serverless functions (AWS Lambda, Vercel Functions) for the email endpoint
- Implement rate limiting to prevent abuse
