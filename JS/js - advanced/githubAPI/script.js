
const input = document.querySelector("input");
let user = input.value;
let data = {};
const api =`https://api.github.com/users/`;


//asynch func for getting requiered data
const getData = async () => {
  //get hole userObject
  console.log(api + `${user}`+ `/`);
  const dataObject = await fetch(api + `${user}`);
  const jsonDataObject = await dataObject.json();
  console.log(jsonDataObject);
  //get relevant info
  const name = jsonDataObject.login;
  const avatar = jsonDataObject.avatar_url;
  const repos = jsonDataObject.public_repos;
  console.log(name, avatar, repos);
  displayData();
};
getData();

const displayData = () => {
    let container = document.createElement("div");
    container.classList.add("show");
    let avatarImg = document.createElement("div");
    avatarImg.classList.add("img");
    avatarImg.setAttribute("src", `${jsonDataObject.avatar_url}`)

}

const btn  = document.querySelector("button");
btn.addEventListener('click', getData);