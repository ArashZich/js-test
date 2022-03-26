const axios = require("axios");

const fetchData = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.data);
};

exports.fetchData = fetchData;
