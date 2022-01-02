const axios = require("axios");

exports.handler = async function (event) {
  console.log(event);
  const payload = JSON.parse(event.body);

  const { title, rcp_nm } = payload;
  const RECIPE_API_KEY = "fee7f81a72a24e28962e";
  const url = rcp_nm
    ? `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/1/1/RCP_NM="${rcp_nm}"`
    : `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/1/300/RCP_NM="${title}"`;

  try {
    const res = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.message,
    };
  }
};
