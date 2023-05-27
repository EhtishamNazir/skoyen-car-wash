import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body;

        // Connect to MongoDB
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db(process.env.MONGODB_DB);

        // Insert the form data into the collection
        await db.collection('contact_forms').insertOne({
            name,
            email,
            phone,
            message,
        });

        // Close the MongoDB connection
        client.close();

        // Send confirmation email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: 'ehtishamnazir28@gmail.com',
            to: email,
            subject: 'Confirmation Email',
            text: 'Thank you for contacting us. We have received your message.',
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
