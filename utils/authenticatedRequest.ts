import axios from 'axios';
import { getAccessToken } from './auth';

export async function makeAuthenticatedRequest(apiUrl, method, params = {}) {
    try {
        // Get the access token
        const accessToken = await getAccessToken();

        // Make an authenticated request to the specified API
        const response = await axios({
            method,
            url: apiUrl,
            params,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                // Add any other required headers here
            },
        });

        // Return the response data
        return response.data;
    } catch (error) {
        console.error('Error making authenticated request:', error);
        throw error;
    }
}