const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads = []
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click" , function save(){
  
    myLeads.push(inputEl.value)
    console.log(myLeads)
   
} )

for(let i=0;i<myLeads.length;i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
}