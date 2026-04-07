# 🎵 Moodify - Music Mood-Based Server

Welcome to **Moodify**! 🎶 A delightful Node.js server that brings music to life based on your mood. Discover songs tailored to your emotions with seamless authentication and song management. Let's groove! 🕺💃

## ✨ Features

- 🔐 **User Authentication**: Secure login, registration, and logout with JWT tokens
- 🎼 **Mood-Based Music**: Get songs based on your current mood (Happy, Sad, Neutral, Surprise)
- 📤 **Song Upload**: Upload your favorite tracks with mood classification
- 🎨 **Image Integration**: Poster images for songs using ImageKit
- 📧 **Email Notifications**: Welcome emails for new users
- 🚀 **Fast & Scalable**: Built with Express.js, MongoDB, and Redis caching
- 🛡️ **Input Validation**: Robust validation with express-validator
- 🍪 **Cookie Management**: Secure cookie-based sessions

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js 🚀
- **Database**: MongoDB with Mongoose 🗄️
- **Caching**: Redis for fast data access ⚡
- **Authentication**: JWT (JSON Web Tokens) 🔑
- **File Upload**: Multer for handling song files 📁
- **Image Management**: ImageKit for poster images 🖼️
- **Email Service**: Nodemailer for notifications 📬
- **Validation**: Express-validator for input checks ✅
- **Password Hashing**: bcrypt for security 🔒

## � Project Structure

Here's the organized structure of our Moodify server project! 🗂️

```
📂 moodify/server/
├── 📄 package.json          # 📦 Project dependencies and scripts
├── 📄 server.js             # 🚀 Main server entry point
└── 📂 src/
    ├── 📄 app.js            # ⚙️ Express app configuration
    ├── 📂 config/
    │   ├── 📄 dbconnection.js    # 🗄️ MongoDB connection setup
    │   ├── 📄 env.js             # 🔧 Environment variables loader
    │   └── 📄 redis.connect.js   # ⚡ Redis connection setup
    ├── 📂 controllers/
    │   ├── 📂 auth/
    │   │   ├── 📄 getme.js       # 👤 Get current user controller
    │   │   ├── 📄 login.js       # 🔑 User login controller
    │   │   ├── 📄 logout.js      # 👋 User logout controller
    │   │   └── 📄 register.js    # 📝 User registration controller
    │   └── 📂 song/
    │       ├── 📄 get_moodsong.js    # 🎭 Get mood-based songs
    │       ├── 📄 get_song.js        # 📚 Get all songs controller
    │       └── 📄 upload_song.js     # ⬆️ Song upload controller
    ├── 📂 middleware/
    │   ├── 📄 auth.js               # 🛡️ Authentication middleware
    │   ├── 📄 error.middleware.js   # 🚨 Error handling middleware
    │   ├── 📄 upload.middleware.js  # 📁 File upload middleware
    │   ├── 📄 uploadSong.validator.js # ✅ Song upload validation
    │   └── 📄 validate.middleware.js  # 🔍 General validation middleware
    ├── 📂 models/
    │   ├── 📄 auth.model.js     # 👤 User authentication model
    │   └── 📄 song.model.js     # 🎼 Song data model
    ├── 📂 routes/
    │   ├── 📄 auth.routes.js    # 🛣️ Authentication routes
    │   └── 📄 song.routes.js    # 🎵 Song management routes
    ├── 📂 services/
    │   ├── 📄 generateURL.services.js  # 🔗 URL generation service
    │   └── 📄 sendEmail.service.js     # 📧 Email sending service
    ├── 📂 utils/
    │   ├── 📄 apiError.js       # 🚫 API error utilities
    │   ├── 📄 asyncHandler.js   # 🔄 Async handler utility
    │   └── 📄 token.js          # 🎫 Token management utility
    └── 📂 validators/
        ├── 📄 get_moodsong.validator.js  # 🎭 Mood song validation
        ├── 📄 login.validator.js         # 🔑 Login validation
        └── 📄 register.validator.js      # 📝 Registration validation
```

## �📦 Installation

Get started with Moodify in just a few steps! 🎯

### Prerequisites
- Node.js (v14 or higher) 📦
- MongoDB database 🗄️
- Redis instance ⚡

### Setup Steps

1. **Clone the repository** 📥
   ```bash
   git clone https://github.com/your-username/moodify.git
   cd moodify/server
   ```

2. **Install dependencies** 📦
   ```bash
   npm install
   ```

3. **Create environment file** 🔧
   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/moodify
   JWT_SECRET=your_super_secret_jwt_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   ```

4. **Start the server** 🚀
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000` 🎉

## 🌍 Environment Variables

Configure these environment variables for proper functionality:

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port number | ✅ |
| `MONGO_URI` | MongoDB connection string | ✅ |
| `JWT_SECRET` | Secret key for JWT tokens | ✅ |
| `EMAIL_USER` | Email address for sending notifications | ✅ |
| `EMAIL_PASS` | Email password/app password | ✅ |
| `IMAGEKIT_PUBLIC_KEY` | ImageKit public key for image uploads | ✅ |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private key | ✅ |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint | ✅ |

## 🚀 Usage

### Authentication Endpoints

#### Register User 📝
```http
POST /moodify/register/api
Content-Type: application/json

{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password"
}
```

#### Login User 🔑
```http
POST /moodify/login/api
Content-Type: application/json

{
  "email": "your_email@example.com",
  "password": "your_password"
}
```

#### Get Current User 👤
```http
GET /moodify/getme
Authorization: Bearer <your_jwt_token>
```

#### Logout User 👋
```http
POST /moodify/logout/api
```

### Song Management Endpoints

#### Upload Song 🎵
```http
POST /moodify/upload/song
Content-Type: multipart/form-data

- song: <audio_file>
- mood: "happy" | "sad" | "neutral" | "surprise"
```

#### Get All Songs 📚
```http
GET /moodify/get/all_song
```

#### Get Songs by Mood 🎭
```http
GET /moodify/get/mood/song/{mood}
```

**Available moods**: `happy`, `sad`, `neutral`, `surprise`

## 📊 Data Models

### User Model 👤
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed)
}
```

### Song Model 🎼
```javascript
{
  songurl: String (required),
  posterurl: String (required),
  title: String (required),
  mood: String (enum: ["happy", "surprise", "neutral", "sad"])
}
```

## 🔍 API Response Format

All API responses follow this consistent format:

### Success Response ✅
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response ❌
```json
{
  "success": false,
  "message": "Error description",
  "error": { ... }
}
```

## 🧪 Validation Rules

### Registration 📝
- Username: Required, non-empty
- Email: Required, valid email format
- Password: 5-12 characters

### Login 🔑
- Email: Required, valid email format
- Password: Required, 5-12 characters

### Song Upload 🎵
- Song file: Required (audio file)
- Mood: Required (one of: happy, sad, neutral, surprise)

## 🤝 Contributing

We love contributions! 🎉 Here's how you can help:

1. Fork the repository 🍴
2. Create a feature branch: `git checkout -b feature/amazing-feature` 🌟
3. Commit your changes: `git commit -m 'Add amazing feature'` 💾
4. Push to the branch: `git push origin feature/amazing-feature` 🚀
5. Open a Pull Request 📬

## 📄 License

This project is licensed under the ISC License. 📜

## 👨‍💻 Author

**Md Ahsan Khan** - *Initial work* 💼

---

Made with ❤️ and lots of 🎵 music!</content>
<parameter name="filePath">e:\moodify\server\README.md
