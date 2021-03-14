let data = [];
//gets data about students from 2 API's and merge it to one array of objects
//one object per each student
const getData = async () => {
  const reqStudents = await fetch(
    `https://apple-seeds.herokuapp.com/api/users/`
  );
  const studentsData = await reqStudents.json();
  console.log(studentsData);
  for (let i = 0; i < 3; i++) {
    const reqAdditionalInfo = await fetch(
      `https://apple-seeds.herokuapp.com/api/users/${i}`
    );
    const additionalData = await reqAdditionalInfo.json();
    data.push({
      id: studentsData[i].id,
      firstName: studentsData[i].firstName,
      lastName: studentsData[i].lastName,
      capsule: studentsData[i].capsule,
      age: additionalData.age,
      city: additionalData.city,
      gender: additionalData.gender,
      hobby: additionalData.hobby,
    });
  }
  console.log(data);
  render();
};
getData();

//renders relevant data to the UI, creates table,
//each object transforms to line of the table
const render = () => {

  const container = document.querySelector(".container");
  container.innerHTML = " ";
  const table = document.createElement("table");
  table.classList.add("table");
  const tableBody = document.createElement("tbody");
  const tr = document.createElement("tr");

  //creates title of the table and styles it
  const title = document.createElement("td");
  title.setAttribute("colspan", "10");
  title.classList.add("header");
  title.innerHTML = "Bootcamp students";
  // connecting table parts together
  tr.appendChild(title);
  tableBody.appendChild(tr);

  data.forEach((student) => {
    const tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML += student.id;
    let td2 = document.createElement("td");
    td2.innerHTML += student.firstName;
    let td3 = document.createElement("td");
    td3.innerHTML += student.lastName;
    let td4 = document.createElement("td");
    td4.innerHTML += student.age;
    let td5 = document.createElement("td");
    td5.innerHTML += student.capsule;
    let td6 = document.createElement("td");
    td6.innerHTML += student.gender;
    let td7 = document.createElement("td");
    td7.innerHTML += student.hobby;
    let td8 = document.createElement("td");
    td8.innerHTML += student.city;
    //deleteBtn
    const deleteBtn = createBtn("Delete");
    deleteBtn.addEventListener("click", (e) => deleteStudentInfo(e));
    deleteBtn.setAttribute("id", student.id);

    //updateBtn
    const updateBtn = createBtn("Update");
    updateBtn.addEventListener("click", (e) => updateStudentInfo(e));

    //cancelBtn
    const cancelBtn = createBtn("Cancel");
    cancelBtn.hidden = true;
    cancelBtn.addEventListener("click", (e) => cancelChanges(e));

    //confirmBtn
    const confirmBtn = createBtn("Confirm");
    confirmBtn.hidden = true;
    confirmBtn.addEventListener("click", (e) => confirmChanges(e));

    let td9 = document.createElement("td");
    td9.appendChild(deleteBtn);
    td9.appendChild(cancelBtn);
    let td10 = document.createElement("td");
    td10.appendChild(updateBtn);
    td10.appendChild(confirmBtn);
    //building one row
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);
    tr.appendChild(td10);
    tableBody.appendChild(tr);
  });

  table.appendChild(tableBody);
  container.appendChild(table);
};

const deleteStudentInfo = (e) => {
  let studentIndex = returnStudentIndex(e);
  data.splice(studentIndex, 1);
  render();
};

const updateStudentInfo = (e) => {
  
  let activeRaw = e.currentTarget.parentNode.parentNode;
  activeRaw.classList.add("active");
  let tdArray = document. querySelectorAll('tr.active > td');
   //on activeRaw insert inputs to tds
  for (let i = 1; i < 8; i++){
    let input = document.createElement("input");
    let content = tdArray[i].textContent;
    tdArray[i].textContent = '';
    input.value = content;
    tdArray[i].appendChild(input);
  };
  // toggleButtons();
  activeRaw.querySelector(".Cancel").hidden = false;
  activeRaw.querySelector(".Delete").hidden = true;
  activeRaw.querySelector(".Confirm").hidden = false;
  activeRaw.querySelector(".Update").hidden = true;   
  //takes inputs values and updated the data array:
  
};

const toggleButtons = (e) => {
  let activeRaw = e.currentTarget.parentNode.parentNode;
  let cancel = activeRaw.querySelector(".Cancel").hidden;
  cancel ? false : true;
  let del = activeRaw.querySelector(".Delete").hidden;
  del ? false : true;
  let confirm = activeRaw.querySelector(".Confirm").hidden;
  confirm ? false : true;
  let update = activeRaw.querySelector(".Update").hidden;
  update ? false : true;
}
const returnStudentIndex = (e) => {
  let i = parseInt(e.currentTarget.getAttribute("id"));
  let studentIndex = data.findIndex((student) => student.id === i);
  return studentIndex;
};

const createBtn = (text) => {
  const btn = document.createElement("button");
  btn.classList.add(text);
  btn.innerText = text;
  return btn;
};

//

const cancelChanges = (e) => {
  toggleButtons(e);
  let tdArray = document. querySelectorAll('tr.active > td');
  let input = tdArray.querySelector("input");
  for (let i = 1; i < 8; i++){
    input.hidden = true;
    tdArray[i].textContent = input.value;
  };       
};



//takes changed inputValue, updates the data, reRenders
const confirmChanges = (e) => {

}
