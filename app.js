const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000, () => console.log("Server Running"));

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const url = 'https://api.weatherstack.com/current?access_key={9456fc94b9c04522da5953b2af380409}&query=${city}';
    const options = {
	method: 'GET'
};

try {
	const response = await fetch(url, options);
	res.send({response.data});
} catch (error) {
	res.status(500).send({ error: 'An error occurred while fetching the weather data' });
}
});
