window.addEventListener('beforeunload',save);

let accountsTableBody=document.querySelector("#accounts-table-body");
let allLinks=document.querySelectorAll('.nav-link');
let accountsView=document.querySelector("#accounts-view");
let addAccountView=document.querySelector("#add-account-view");
let views=document.querySelectorAll('.view');
let idInput=document.querySelector('[placeholder="id"]');
let nameInput=document.querySelector('[placeholder="name"]');
let lastnameInput=document.querySelector('[placeholder="lastname"]');
let phoneInput=document.querySelector('[placeholder="phone"]');
let emailInput=document.querySelector('[placeholder="email"]');
let saveBtn=document.querySelector("#save");
let eId=document.querySelector(".eId");
let eName=document.querySelector(".eName");
let eLastname=document.querySelector(".eLastname");
let eEmail=document.querySelector(".eEmail");
let ePhone=document.querySelector(".ePhone");
let editBtn=document.querySelector("#edit");
let id;


editBtn.addEventListener('click',saveEditedAccount);
function saveEditedAccount(){
     let editedAccount={
       id:eId.value,
       name:eName.value,
       lastname:eLastname.value,
       email:eEmail.value,
       phone:ePhone.value
     }
     db[id]=editedAccount;
     createAccountsTable();
     showView("#accounts-view");

}

saveBtn.addEventListener('click',saveAccount);
function saveAccount(){
   const newAccount={
        id:idInput.value,
        name:nameInput.value,
        lastname:lastnameInput.value,
        phone:phoneInput.value,
        email:emailInput.value
   }
   db.push(newAccount);
   idInput.value="";
   nameInput.value="";
   lastnameInput.value="";
   phoneInput.value="";
   emailInput.value="";
   createAccountsTable();
   showView('#accounts-view');
}


for (let i = 0; i < allLinks.length; i++) {
     allLinks[i].addEventListener('click',showView);  
}
  function showView(e){
    for (let i = 0; i < views.length; i++) {
      views[i].style.display='none';    
     }
     if(e instanceof Event){
      e.preventDefault();
      let id=`#${this.getAttribute("href")}`;
     document.querySelector(id).style.display="block";
     }else{
       document.querySelector(e).style.display="block";
     }
  }
  
function createAccountsTable(){
     let htmlAccounts="";
     for (let i = 0; i < db.length; i++) {
         const account = db[i];
         htmlAccounts+=`
         <tr>
         <td>${account.id}</td>
         <td>${account.name}</td>
         <td>${account.lastname}</td>
         <td>${account.email}</td>
         <td>${account.phone}</td>
         <td><button data-id="${i}" class="edit-btn btn btn-sm btn-warning form-control">Edit</button></td>
         <td><button data-id="${i}" class="delete-btn btn btn-sm btn-danger form-control">Delete</button></td>
         </tr>
         
         `
     }
     accountsTableBody.innerHTML=htmlAccounts;
     let allEditBtns=document.querySelectorAll(".edit-btn");
     let allDeleteBtns=document.querySelectorAll(".delete-btn");

     for (let i = 0; i < allDeleteBtns.length; i++) {
       allDeleteBtns[i].addEventListener('click',deleteAccount);
       allEditBtns[i].addEventListener('click',editAccount); 
     }
}
 createAccountsTable();
function deleteAccount(){
   let id=this.getAttribute("data-id");
   db.splice(id,1);
   createAccountsTable();
   showView('#accounts-view');

}
function editAccount(){
   id=this.getAttribute("data-id");
  let selectedAccount=db[id];
  eId.value=selectedAccount.id;
  eName.value=selectedAccount.name;
  eLastname.value=selectedAccount.lastname;
  eEmail.value=selectedAccount.email;
  ePhone.value=selectedAccount.phone;
  showView('#edit-account-view');

}

function save(){
  localStorage.db=JSON.stringify(db);
}