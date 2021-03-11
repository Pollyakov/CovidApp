let data = [];
//gets data about students from 2 API's and merge it to one array of objects
//one object per each student
const getData = async () => {
  const reqStudents = await fetch(
    `https://apple-seeds.herokuapp.com/api/users/`
  );
  const studentsData = await reqStudents.json();
  console.log(studentsData);
  for (let i = 0; i < 32; i++) {
    const reqAdditionalInfo = await fetch(
      `https://apple-seeds.herokuapp.com/api/users/${i}`
    );
    const additionalData = await reqAdditionalInfo.json();
    console.log(additionalData);
    data.push({
      id: studentsData[i].id,
      firstName: studentsData[i].firstName,
      lastName: studentsData[i].lastName,
      capsule: studentsData[i].capsule,
      age: additionalData.age,
      city:additionalData.city,
      gender:additionalData.gender,
      hobby:additionalData.hobby,
    });
  }
  console.log(data);
  render();
};
getData();
//renders relevant data to the UI, creates table, 
//each object transforms to line of the table
const render = () => {
     //creates table and its parts
  const table = document.querySelector(".table");
  const tableBody = document.createElement("tbody");
  const tr = document.createElement("tr");
  //creates title of the table and styles it
  const title = document.createElement("td");
  title.setAttribute("colspan", "10");
  title.classList.add("header");
  title.innerHTML = "Bootcamp students";
  // building parts together
  tr.appendChild(title);//
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
        const deleteBtn = document.createElement("button");
        const updateBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        updateBtn.classList.add("update");
        deleteBtn.innerText = "Delete";
        updateBtn.innerText = "Update";
        let td9 = document.createElement("td");
        td9.appendChild(deleteBtn);
        // td9.innerHTML += deleteBtn;
        let td10= document.createElement("td");
        td10.appendChild(updateBtn);
     
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
    document.body.appendChild(table);

}
