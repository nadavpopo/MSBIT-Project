const request = require('request');
let data = [];
request('https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json', (error, response, body) =>
{
    if (!error && response.statusCode == 200)
    {
        body = JSON.parse(body);

        body.map(item =>
        {
            if (item.status == 1)
            {
                (item.type == 1 ? item = item.fedex : item = item);
                (item.type == 2 ? item = item.ups[0] : item = item);
                let newObj =
                {
                    'id': item.id,
                    'name': item.name,
                    'description': item.description,
                    'url': item.thumbnailUrl
                };
                data.push(newObj);
            }
        });
    }
})

exports.data = data;