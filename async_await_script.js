// API User
const apiUser = "https://jsonplaceholder.typicode.com/users";

// Box Result
const tableBox = document.getElementById('tBody');

// Input Search
const inputSearch = document.getElementById('inputSearch');

// Button Search
const btnSearch = document.getElementById('btnSearch');

// Button Choose One
const btnChoose = document.getElementById('btnChoose');

// Dropdown Menu
const nameDrop = document.getElementById('nameDrop');
const userDrop = document.getElementById('usernameDrop');
const emailDrop = document.getElementById('emailDrop');

// Active Result
let activeResult;

// Table result
async function getTemplate(){
    try {
        const res = await fetch(`${apiUser}`);
        const json = await res.json();
        activeResult = json;
        //console.log(activeResult);
        cicleRes(activeResult);
        
    } catch (error) {
        console.log(error);
    }
}
getTemplate();

// Cicle Result
function cicleRes(el){
    el.forEach(element => {
        createLayout(element);
    });
}

// Create Table Layout
function createLayout({id, name, username, email}){
    let trTable = document.createElement('tr');

            let tdId = document.createElement('td');
            let textId = document.createTextNode(id);
            tdId.appendChild(textId);

            let tdName = document.createElement('td');
            let textName = document.createTextNode(name);
            tdName.appendChild(textName);

            let tdUser = document.createElement('td');
            let textUser = document.createTextNode(username);
            tdUser.appendChild(textUser);

            let tdEmail = document.createElement('td');
            let textEmail = document.createTextNode(email);
            tdEmail.appendChild(textEmail);

            trTable.appendChild(tdId);
            trTable.appendChild(tdName);
            trTable.appendChild(tdUser);
            trTable.appendChild(tdEmail);

            tableBox.appendChild(trTable);
}