import nodemailer from "nodemailer";

const sendWelcomeEmail = async (email,name) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sk6582757@gmail.com",
      pass: "gqct tldg kolx shmd"
    }
  });

  await transporter.sendMail({
    from: "sk6582757@gmail.com",
    to: email,
    subject: "🎧 Welcome to Moodify – Music that understands your mood!",
    text: `
🎉 Welcome to Moodify!

Hey ${name}! 👋

We’re excited to have you on Moodify 🎧

Moodify is not just a music platform — it understands your emotions.
Our smart system detects your facial expressions 😄😢😴 and suggests songs that match your mood perfectly.

✨ Happy mood? Enjoy energetic beats!
🌧 Feeling low? Relax with calming melodies.
🔥 Feeling pumped? Get ready for powerful tracks!

Just show your expression 📸 and let Moodify create the perfect vibe for you.

🎶 Your Mood. Your Music. Your Vibe.

Enjoy the experience and start exploring today!

❤️ Team Moodify
`
  });

};

export default sendWelcomeEmail;