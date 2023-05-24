import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Create a transporter using your email service details
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // e.g., 'Gmail'
            auth: {
                user: 'ehtishamnazir28@gmail.com',
                pass: 'Shani_2526',
            },
        });

        try {
            // Send the email
            await transporter.sendMail({
                from: 'your-email@example.com',
                to: 'your-destination-email@example.com',
                subject: 'New Form Submission',
                html: `
          <h3>New Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.status(404).json({ message: 'Invalid request method' });
    }
}