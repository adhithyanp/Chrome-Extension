import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js"
import { getDatabase,
          ref,
    push,
   onValue } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js"

 const firebaseConfig = {
  apiKey: "AIzaSyAOPoV3zm-Ms7uNiMPsgfJMkxNTF8adrgk",
  authDomain: "leads-tracker-app-1c575.firebaseapp.com",
  databaseURL: "https://leads-tracker-app-1c575-default-rtdb.firebaseio.com",
  projectId: "leads-tracker-app-1c575",
  storageBucket: "leads-tracker-app-1c575.appspot.com", 
  messagingSenderId: "429650056860",
  appId: "1:429650056860:web:1d41702e5c1b1ccfb3ff59"
    
 }

  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app)
 const referenceInDB = ref(database ,"leads" )


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")



const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

onValue(referenceInDB , function(snapshot){
    console.log(snapshot.val)
})

deleteBtn.addEventListener("dblclick", function() {
    
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB , inputEl.value)
    inputEl.value = ""
    
})