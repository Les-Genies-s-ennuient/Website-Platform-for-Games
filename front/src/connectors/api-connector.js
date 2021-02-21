const axios = require('axios')

export class ApiConnector {
    apiEndpoint = 'https://localhost:3001/'

    async getQueryAPI (query_path) {
        axios
        .get(this.apiEndpoint + query_path)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}

export const apiConnector = new ApiConnector()
