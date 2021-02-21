const axios = require('axios')

const getQueryAPI = (query_path, response) => {
    axios
    .get("https://localhost:3001/"+query_path)
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
}

export getQueryAPI;
