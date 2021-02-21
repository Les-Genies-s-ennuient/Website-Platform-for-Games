import axios from 'axios'

export class ApiConnector {
    apiEndpoint = 'https://localhost:3001/'

    async getQueryAPI (query_path: any) {
        axios
        .get(this.apiEndpoint + query_path)
        .then(function(response: any) {
            console.log(response);
        })
        .catch(function(error: any) {
            console.log(error);
        });
    }
}

export const apiConnector = new ApiConnector()
