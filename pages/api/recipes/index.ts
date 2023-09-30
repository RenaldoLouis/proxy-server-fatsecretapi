// Example usage in an API route

import { makeAuthenticatedRequest } from "../../../utils/authenticatedRequest";

export default async (req, res) => {
    try {
        // Define the API endpoint and parameters
        const apiUrl = 'https://platform.fatsecret.com/rest/server.api';
        const method = 'recipe_types.get.v2';
        const format = 'json';

        // Make an authenticated request to the FatSecret API
        const data = await makeAuthenticatedRequest(apiUrl, 'GET', {
            method,
            format,
            contentType: 'application/json',
            // Add any other required parameters here
        });

        res.status(200).json(data);
    } catch (error) {
        console.error('Error in API route:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
};