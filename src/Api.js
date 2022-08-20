import axios from 'axios';

/**
 * URLs and other api constants
 */
const constants = {
    api: {
        baseURL: 'https://akashazapimgtservice.azure-api.net/akashazfunctionapp',
    },
};

/**
 * Create an Axios Client with defaults
 */
export default axios.create({
    baseURL: constants.api.baseURL,
    headers: {'Ocp-Apim-Subscription-Key': '5e958ca46fc64250b5e3fdb13be33ff0' }
});