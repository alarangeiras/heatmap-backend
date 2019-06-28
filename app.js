const express = require('express');

let locations = [];

let app = express();
const PORT = process.env.PORT || 3000;

app.get('/updateMap/:location/:qtd', (req, res) => {
	var location = req.params.location;
	var qtd = req.params.qtd;
	found = false;
	locations = locations.map(content => {
		if (content && content.location == location) {
			content.qtd = qtd;
			found = true;	
		}

		return content;
	});
	if (!found) {
		locations.push({
			location: location,
			qtd: qtd
		});
	}


	res.status(200);
	res.json({
		code: 200,
		message: "atualizado com sucesso"
	})
});

app.get('/summary', (req, res) => {
	res.json(locations);
});

app.listen(PORT, () => {
	console.log(`the server is running on ${PORT}`);
});