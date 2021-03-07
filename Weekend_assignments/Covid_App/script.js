let world = [];
let btns = document.querySelector(".btns");
let countryList = document.querySelector(".countries");
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
};
//getting data from both APIs onLoad
document.addEventListener("DOMContentLoaded", function () {
  getWorld();
  getStats();
});
const getCountries = (e) => {
  const continent = world.filter((c) => {
    return c["region"] == e.path[0].textContent;
  });
  let countries = continent.map((c) => {
    return c["name"];
  });
  console.log(`Countries of ${e.path[0].textContent} are: ${countries}`);
  displayList(countries);
};
const displayList = (countries) => {
  if (countryList.innerHTML) {
    countryList.innerHTML = "";
  }
  for (const c of countries) {
    countryList.innerHTML += `<div>${c}</div>`;
  }
};

btns.addEventListener("click", (e) => getCountries(e));
countryList.addEventListener("click", (e) => statsForThisCountry(e));

//COVID API
const stats = [];
// const url2 =
// "https://api.codetabs.com/v1/proxy?quest=" +
// `http://corona-api.com/countries/${code}`;

const url =
  "https://api.codetabs.com/v1/proxy?quest=" +
  `http://corona-api.com/countries`;

//returns an array of objects with statistics about
// corona, from all over the world.
const getStats = async () => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  console.log("jsonResponse ", jsonResponse.data);
  let data = jsonResponse.data;
  let stats = data.map((c) => {
    return {name: c.name,
            confirmed: c.latest_data.confirmed,
            recovered: c.latest_data.recovered,
            critical: c.latest_data.critical,
            deaths: c.latest_data.deaths,
            };
  });
  console.log("Stats",stats);
};

const statsForThisCountry = (e) => {
  console.log(e.target.innerHTML,
     typeof e.target.innerHTML); //Algiria
  //take stats from stats for this country
  for(let i=0; i < stats.length-1; i++){
    console.log("i am into for loop?");
    var obj = stats[i];
     if (obj.name == e.target.innerHTML){
      console.log("Chosen country stats:", obj);
     };
  };
  DisplayGraph(obj);
};

const DisplayGraph = (obj)=> {
  const ctx = document.getElementById("myChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        [obj.keys];
      ],
      datasets: [
        {
          label: "covid cases",
          backgroundColor: "rgb(100, 99, 132)",
          borderColor: "rgb(250, 5, 50)",
          data: [obj.values],
        },
      ],
    },
    options: {},
  });

}
