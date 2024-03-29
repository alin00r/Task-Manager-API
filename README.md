﻿# Task-Manager-API
  
## Introduction 🌟
Welcome to My REST-API! This API is designed to provide a seamless experience for users who love to manage tasks efficiently.

## Technologies 🚀

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- resend
- sharp
- Multer
- Jest

## Features ✨

- [x] User Authentication: Allow users to sign up and log in.
- [x] Profile Management: Users can update their profile details and change their password.
- [x] Task Management: Implement CRUD operations for tasks, including marking tasks as completed.
- [x] File Upload: Allow users to upload a profile picture/avatar.
- [x] Email Service: Send welcome and cancellation emails to users.
- [x] Testing: Write tests for critical functionalities.
- [x] Documentation: Provide setup instructions and API documentation.

This concise list captures the main features of your app in a clear and easy-to-understand format.

## Setting Up Your Local Environment

Follow these steps to set up your local environment for the Natours app:

1. **Clone the Repository:**
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/alin00r/Task-Manager-API.git
   cd Task-Manager-API
   ```
2. **Install Dependencies:**
   Run the following command to install all the required dependencies:
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**

   Before you can run the Task-Manager-API app, you need to set up your environment variables. These variables store sensitive information required for the app to function properly. Follow these steps to configure your environment variables:

   1. **Create a `.env` File:**
      In the root directory of the app, create a file named `.env`.

   2. **Add the Following Environment Variables:**
      Replace the placeholders with your actual information. You might need to sign up for accounts and services to obtain the required credentials.

      ```dotenv

      # MongoDB Configuration
      MONGO_URI_ATLAS=your-mongodb-database-url

      # JSON Web Token Configuration
      JWT_SECRET=your-json-web-token-secret

      ```
# Endpoints
## Auth Endpoints
```POST``` ```/users/signup```

```POST``` ```/users/login```

```POST``` ```/users/logout```

```POST``` ```/users/logoutAll```

## Users Endpoints
```GET``` ```/users/me```

```DELETE``` ```/users/me```

```PATCH``` ```/users/me```

```GET``` ```/users/:id/avatar```

```POST``` ```/upload/me/avatar```

```DELETE``` ```/upload/me/avatar```

## Task Endpoints
```POST``` ```/task```

```GET``` ```/tasks```

```GET``` ```/tasks/:id```

```PATCH``` ```/tasks/:id```

```DELETE``` ```/tasks/:id```


# API reference

During API development, I use `Postman` for handling/testing all endpoints.

- Postman collection/documentation is available on this link [click here](https://documenter.getpostman.com/view/28708948/2sA2r3b7CB)
- Base URL endpoints: `http://127.0.0.1:3000/` or `http://localhost:3000/`



- [Ali Nour](https://github.com/alin00r)
