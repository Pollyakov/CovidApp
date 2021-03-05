let world = [];
//url with proxy
const AllCountriesURL =
  `https://api.codetabs.com/v1/proxy?quest=` +
  `https://restcountries.herokuapp.com/api/v1
  `;
const getWorld = async () => {
  const allResp = await fetch(AllCountriesURL);
  const allJson = await allResp.json();
  console.log(allJson[0].cca2);
  // e- eto object Afganistana 
  // allJson.forEach((e) => {
  //   if (!world[e.region]) {
  //     world[e.region] = [e];
  //   } else {world[e.region].push(e);}  });
  world = allJson.map( (c) => {return {"cca2": c.cca2,
                                "region": c.region}
                            
});
console.log(world);
};
getWorld();
const stats = [];
let code = "AF";
const url = "https://api.codetabs.com/v1/proxy?quest=" +
`http://corona-api.com/countries/${code}`;

const getStats = async () => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log("Covid stats ", jsonResponse);
};

getStats();






