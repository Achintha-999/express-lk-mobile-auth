# Login Validation

A simple Node.js application that demonstrates server-side validation for user inputs using `express` and `express-validator`. The project includes a frontend form for user input and a backend API to validate the inputs.

## Features

- Validates user inputs for:
  - Full Name (only letters and spaces allowed)
  - Email (valid email format)
  - Mobile (Sri Lankan mobile numbers)
  - Password (minimum 8 characters)
- Displays error messages for invalid inputs.
- Shows a success message when all inputs are valid.
- Real-time validation for better user experience.

## Project Structure
login-validation/ ├── package.json ├── public/ │ ├── css/ │ │ └── styles.css │ └── index.html ├── server.js


- **`server.js`**: Backend server with validation logic.
- **`public/index.html`**: Frontend form for user input.
- **`public/css/styles.css`**: Styling for the frontend.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/login-validation.git](https://github.com/Achintha-999/express-lk-mobile-auth
   cd login-validation

2. Install dependencies:
 npm install

Usage
1. Start the server:   
node server.js

2. Open your browser and navigate to:
http://localhost:3000

3. Fill out the form and submit to see validation in action.

Validation Rules
Full Name: Required, only letters and spaces allowed.
Email: Required, must be a valid email format.
Mobile: Required, must be a valid Sri Lankan mobile number.
Password: Required, minimum 8 characters.

Example API Response

On Validation Error:
{
  "success": false,
  "errors": [
    {
      "field": "name",
      "message": "Name is required"
    },
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}

On Successful Validation:
{
  "success": true,
  "message": "All inputs are valid!",
  "data": {
    "name": "Nimal Fernando",
    "email": "nimal@gmail.com",
    "mobile": "+94771234567"
  }
}

