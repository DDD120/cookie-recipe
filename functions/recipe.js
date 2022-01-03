const axios = require("axios");
const { VUE_APP_RECIPE_API_KEY } = process.env;

exports.handler = async function (event) {
  const payload = JSON.parse(event.body);
  const { title, rcp_nm } = payload;
  const url = rcp_nm
    ? `http://openapi.foodsafetykorea.go.kr/api/${VUE_APP_RECIPE_API_KEY}/COOKRCP01/json/1/1/RCP_NM="${rcp_nm}"`
    : `http://openapi.foodsafetykorea.go.kr/api/${VUE_APP_RECIPE_API_KEY}/COOKRCP01/json/1/300/RCP_NM="${title}"`;

  const URL = encodeURI(url);

  try {
    const { data } = await axios.get(URL);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.response.status,
      body: error.message,
    };
  }
};
