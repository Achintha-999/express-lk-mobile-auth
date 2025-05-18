const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Sri Lankan mobile validator
const isLankanMobile = mobile => {
    return /^(?:\+94|0)(7[0-8]|1[1-9]|2[1-9]|3[1-9]|4[1-9]|5[0-9]|6[0-9]|7[0-9]|8[1-9]|9[1-9]|0[1-9])\d{7}$/.test(mobile);
};

//Validator middleware
const validateInputs = [
    body('name')
      .notEmpty().withMessage('Name is required')
      .isAlpha('en-US', { ignore: ' ' }).withMessage('Name must contain only letters'),
    
    body('email')
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Invalid email format'),
      
    body('mobile')
      .notEmpty().withMessage('Mobile is required')
      .custom(isLankanMobile).withMessage('Invalid Sri Lankan mobile number'),
      
    body('password')
      .notEmpty().withMessage('Password is required')
      .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
  ];
  
  // route handler
  app.post('/validate', validateInputs, (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array().map(err => ({
          field: err.path,  // name/email/mobile/password
          message: err.msg
        }))
      });
    }
  
    res.json({ 
      success: true,
      message: "All inputs are valid!",
      data: {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
      }
    });
  });

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));