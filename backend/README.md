# Saher Flow Solutions Backend API

A complete authentication backend built with Express.js, MongoDB, and JWT tokens.

## Features

- User registration with email verification
- User login/logout
- Password reset functionality
- JWT-based authentication
- Role-based access control (User/Admin)
- Profile management
- Email notifications
- Input validation and sanitization
- Security best practices

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/saher-flow-solutions
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRE=7d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CLIENT_URL=http://localhost:5173
   ```

3. **Start MongoDB:**
   Make sure MongoDB is running on your system.

4. **Run the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /register` - Register a new user
- `POST /login` - Login user
- `GET /verify-email/:token` - Verify email address
- `POST /forgot-password` - Request password reset
- `PUT /reset-password/:token` - Reset password
- `GET /me` - Get current user (Protected)
- `POST /logout` - Logout user (Protected)

### User Routes (`/api/user`)

- `PUT /profile` - Update user profile (Protected)
- `PUT /change-password` - Change password (Protected)
- `DELETE /account` - Deactivate account (Protected)
- `GET /all` - Get all users (Admin only)

### Health Check

- `GET /api/health` - API health check

## Request/Response Examples

### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "company": "Tech Corp",
  "password": "Password123"
}
```

### Login User
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "Password123"
}
```

### Protected Routes
Include the JWT token in the Authorization header:
```bash
Authorization: Bearer <your-jwt-token>
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- Rate limiting ready
- CORS configuration
- Email verification
- Password reset with time-limited tokens
- Role-based access control

## Database Schema

### User Model
- firstName (String, required)
- lastName (String, required)
- email (String, required, unique)
- company (String, required)
- password (String, required, hashed)
- role (String, enum: ['user', 'admin'])
- isEmailVerified (Boolean)
- emailVerificationToken (String)
- emailVerificationExpires (Date)
- passwordResetToken (String)
- passwordResetExpires (Date)
- lastLogin (Date)
- isActive (Boolean)
- createdAt (Date)
- updatedAt (Date)

## Email Configuration

The API uses Nodemailer for sending emails. Configure your email provider in the `.env` file:

For Gmail:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `EMAIL_PASS`

## Error Handling

The API returns consistent error responses:
```json
{
  "success": false,
  "message": "Error description",
  "errors": [] // Validation errors if any
}
```

## Success Responses

Success responses follow this format:
```json
{
  "success": true,
  "message": "Success message",
  "data": {
    // Response data
  }
}
```