const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads = []

inputBtn.addEventListener("click" , function save(){
    console.log("Button clicked!")
    myLeads.push("www.awesomelead.com")
    console.log(myLeads)
} )

