let accountsTableBody=document.querySelector("#accounts-table-body");
let allLinks=document.querySelectorAll('.nav-link');
let accountsView=document.querySelector("#accounts-view");
let addAccountView=document.querySelector("#add-account-view");
let views=document.querySelectorAll('.view');

for (let i = 0; i < allLinks.length; i++) {
     allLinks[i].addEventListener('click',showView);  
}
  function showView(e){
     e.preventDefault();
     for (let i = 0; i < views.length; i++) {
         views[i].style.display='none';    
        }

    let id=`#${this.getAttribut("href")}`;
    document.querySelector(id).style.display="block";
    
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
         </tr>
         
         `
     }
     accountsTableBody.innerHTML=htmlAccounts;
}
createAccountsTable();