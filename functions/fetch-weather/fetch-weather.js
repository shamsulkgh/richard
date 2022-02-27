const axios = require("axios");

const handler = async (event) => {
  const {maxRecords, view} = event.queryStringParameters
  try {
    const { data } = await axios.get("https://api.airtable.com/v0/appH9pGf1FeVfhzUe/Table1", {
      headers: {
        authorization: process.env.API_SECRET,
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
