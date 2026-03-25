import fetchData from "./api.js";
import renderUser from "./ui.js";


//elementreference
const fetchBtn = document.getElementById('fetchUsers');


fetchBtn.addEventListener('click', async () => {
   const users = await fetchData();
   renderUser(users);
   fetchBtn.textContent = "Användare hämtade";     
})