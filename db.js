const axios = require("axios").default;

const options1 = {
  method: 'GET',
  url: 'https://latest-laptop-deals.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'b9d4ea1f77mshbfb2b12d4373846p1e4fe4jsn65e193528f13',
    'X-RapidAPI-Host': 'latest-laptop-deals.p.rapidapi.com'
  }
};

const neka_funkcija = axios.request(options1).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

const randomCocktail = (req,res,next) => {
    
    const options = {
        method: 'GET',
        url: 'https://latest-laptop-deals.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': 'b9d4ea1f77mshbfb2b12d4373846p1e4fe4jsn65e193528f13',
          'X-RapidAPI-Host': 'latest-laptop-deals.p.rapidapi.com'
        }
      };
    
    // let data = response1.data;
    
    const req1 = axios.request(options);
    const req2 = axios.request(options);
    const req3 = axios.request(options);
    
    axios.all([req1, req2, req3]).then(axios.spread(function(response1, response2, response3){
        
        // data1 = formatDrinks(response1.data["drinks"]);
        // data2 = formatDrinks(response2.data["drinks"]);
        // data3 = formatDrinks(response3.data["drinks"]);
        // data = (data1.concat(data2)).concat(data3);
        
        res.status(200).json(response1.data);
    })).catch(function(error){
        console.error(error);
        next(error);
    }
    
    )
};





module.exports = {randomCocktail};
