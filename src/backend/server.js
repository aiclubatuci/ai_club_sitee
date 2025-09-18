// const mailchimp = require("@mailchimp/mailchimp_marketing");

// mailchimp.setConfig({
//     apiKey: process.env.MAILCHIMP_API_KEY,
//     server: process.env.MAILCHIMP_SERVER_PREFIX,
// });

// export const addSubscriber = async (formData) => {
  
//     const email = formData.get("email");
//     try {
//         await mailchimp.lists.addListMember(process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID, { // replace with your own list_id
//             email_address: email,
//             status: "subscribed",
//         });
//         return { successMessage: `Success! ${email} was successfully added to our mailing list!` };
//     } catch (error) {
//         console.log(error.response.body.title);
        
//         if (error.response.body.title === "Member Exists") {
//             return { errorMessage: `Oops! It looks like the email ${email} is already subscribed to our newsletter!` };
//         } else {
//             return { errorMessage: `Oops! There was a problem subscribing ${email} to our newsletter!`}
//         }
//     }
// }

const express = require('express');
const cors = require('cors');
const mailchimp = require('@mailchimp/mailchimp_marketing');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Mailchimp
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

// Subscribe endpoint - this replaces your addSubscriber function
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ errorMessage: "You must fill out the email field to sign up for our mailing list!" });
    }

    try {
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: "subscribed",
        });
        
        res.json({ 
            successMessage: `Success! ${email} was successfully added to our mailing list!` 
        });
    } catch (error) {
        console.log(error.response?.body?.title);
        
        if (error.response?.body?.title === "Member Exists") {
            res.json({ 
                errorMessage: `Oops! It looks like the email ${email} is already subscribed to our newsletter!` 
            });
        } else {
            res.json({ 
                errorMessage: `Oops! There was a problem subscribing ${email} to our newsletter!`
            });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
