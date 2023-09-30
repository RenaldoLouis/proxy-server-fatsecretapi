// auth.js
import axios from 'axios';

export async function getAccessToken() {
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

        // Return the access token
        return response.data.access_token;
    } catch (error) {
        console.error('Error obtaining access token:', error);
        throw error;
    }
}