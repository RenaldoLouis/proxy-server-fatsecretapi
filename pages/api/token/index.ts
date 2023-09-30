// pages/api/token.js
import axios from 'axios';

export default async (req, res) => {
    try {
        const clientId = '4ad0b6ef0b984ff89cca7569eeb65226';
        const clientSecret = 'c5470d2bc42542fe89dd35314b460b9d';
        const data = new URLSearchParams({
            grant_type: 'client_credentials',
        });

        // Make a POST request to the token URL
        const response = await axios.post('https://oauth.fatsecret.com/connect/token', data, {
            auth: {
                username: clientId,
                password: clientSecret,
            },
        });

        // Return the response from the token URL
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
};