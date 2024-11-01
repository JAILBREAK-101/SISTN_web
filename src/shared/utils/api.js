const API_BASE_URL = "http://localhost:5001/api";

const customFetch = async (endpoint, method = "GET", body = null, headers = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        ...(body && { body: JSON.stringify(body) }),
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

export default customFetch;
