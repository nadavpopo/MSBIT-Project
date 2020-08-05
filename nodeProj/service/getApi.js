const request = require('request');
let data = [];
request('https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json', (error, response, body) =>
{
    if (!error && response.statusCode == 200)
    {
        body = JSON.parse(body);
        body = data;
    }
})

exports.data = data;