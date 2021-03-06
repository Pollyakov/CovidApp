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
  });
  console.log("Continent array ", continent);
  let countries = continent.map((c) => {
    return c["name"];
  });
  console.log(`Countries of ${e.path[0].textContent} are: ${countries}`);
  displayList(countries);
};
const displayList = (countries) => {
  // const target = document.querySelector(".container");
  // const olEl = document.createElement("ol");
  // for (const c of countries) {
  //   let countrList.innerHTML += `<div>${c}</div>`;
  // }
  let mytable = "<table><tr>";
  for (let name of countries) {
    mytable += "<td>" + name + "</td>";
  }
  mytable += "</tr></table>";
  countryList.innerHTML = mytable;
};

let btns = document.querySelector(".btns");
let countryList = document.querySelector(".countries");
btns.addEventListener("click", (e) => getCountries(e));

//COVID API
const stats = [];
let code = "AF";
const url2 =
  "https://api.codetabs.com/v1/proxy?quest=" +
  `http://corona-api.com/countries/${code}`;

const url =
  "https://api.codetabs.com/v1/proxy?quest=" +
  `http://corona-api.com/countries`;

const getStats = async () => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  console.log("Covid stats ", jsonResponse);
};
getStats();
