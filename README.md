# 🚀 Login Validation

A simple Node.js application that demonstrates robust **server-side validation** for user inputs using [`express`](https://expressjs.com/) and [`express-validator`](https://express-validator.github.io/docs/).  
The project features a modern frontend form and a backend API to ensure data integrity.

---

## ✨ Features

- 📝 **Validates user inputs for:**
  - 👤 **Full Name** (only letters and spaces)
  - 📧 **Email** (valid email format)
  - 📱 **Mobile** (Sri Lankan mobile numbers)
  - 🔒 **Password** (minimum 8 characters)
- ❌ **Displays error messages for invalid inputs**
- ✅ **Shows a success message when all inputs are valid**
- ⚡ **Real-time validation for better user experience**

---

## 📁 Project Structure

```
login-validation/
├── package.json
├── public/
│   ├── css/
│   │   └── styles.css
│   └── index.html
└── server.js
```

| File / Folder             | Description                             |
|-------------------------- |-----------------------------------------|
| `server.js`               | Backend server with validation logic    |
| `public/index.html`       | Frontend form for user input            |
| `public/css/styles.css`   | Styling for the frontend                |

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher) <img src="https://img.shields.io/badge/Node.js-14%2B-green?logo=node.js" height="20">
- npm (Node Package Manager)

---

## ⚙️ Installation

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/Achintha-999/express-lk-mobile-auth
   cd login-validation
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

---

## 🚦 Usage

1. **Start the server:**  
   ```bash
   node server.js
   ```

2. **Open your browser and navigate to:**  
   [http://localhost:3000](http://localhost:3000)

3. **Fill out the form and submit to see validation in action.**

---

## 🛡️ Validation Rules

- 👤 **Full Name:** Required, only letters and spaces allowed.
- 📧 **Email:** Required, must be a valid email format.
- 📱 **Mobile:** Required, must be a valid Sri Lankan mobile number.
- 🔒 **Password:** Required, minimum 8 characters.

---

## 📦 Example API Responses

<details>
<summary>❌ On Validation Error</summary>

```json
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
```
</details>

<details>
<summary>✅ On Successful Validation</summary>

```json
{
  "success": true,
  "message": "All inputs are valid!",
  "data": {
    "name": "Nimal Fernando",
    "email": "nimal@gmail.com",
    "mobile": "+94771234567"
  }
}
```
</details>

---

## 🎨 Screenshots

<img src="public/screenshots/form-preview.png" alt="Form Preview" width="400">
<sub><sup>Example of the user input form</sup></sub>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](../../issues).

---

## 📄 License

Distributed under the MIT License.  
See `LICENSE` for more information.

---

<p align="center">
  <img src="https://img.shields.io/badge/Express.js-Server-lightgrey?logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/express--validator-Validation-blueviolet" alt="express-validator">
  <img src="https://img.shields.io/badge/Made%20with-%E2%9D%A4-red" alt="Made with love">
</p>
