let world = [];
const AllCountriesURL =
  `https://api.codetabs.com/v1/proxy?quest=` +
  `https://restcountries.herokuapp.com/api/v1
  `;
const getWorld = async () => {
  const allResp = await fetch(AllCountriesURL);
  const allJson = await allResp.json();
  world = allJson.map((c) => {
    return { cca2: c.cca2, region: c.region, name: c.name.common };
  });
  console.log("World", world);

};
//getting world object with countries per continent onLoad
document.addEventListener("DOMContentLoaded", function () {
  getWorld();
});
//
const getCountries = (e) => {
  const continent = world.filter((c) => { 
    return c["region"] == e.path[0].textContent;
    }
  );
  console.log("Continent array ", continent);
}; 
let btns = document.querySelector(".btns");
btns.addEventListener("click", (e) => getCountries(e));

//COVID API
// const stats = [];
// let code = "AF";
// const url =
//   "https://api.codetabs.com/v1/proxy?quest=" +
//   `http://corona-api.com/countries/${code}`;

// const url =
//   "https://api.codetabs.com/v1/proxy?quest=" +
//   `http://corona-api.com/countries`;

// const getStats = async () => {
//   const response = await fetch(url);
//   const jsonResponse = await response.json();
//   console.log("Covid stats ", jsonResponse);
// };
// getStats();
