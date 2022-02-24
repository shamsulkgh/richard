const axios = require("axios");

const handler = async (event) => {
  try {
    const { data } = await axios.get("http://api.weatherstack.com/current", {
      params: {
        access_key: process.env.API_SECRET,
        query: event.queryStringParameters.query,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
