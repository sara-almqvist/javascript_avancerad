//gamla sättet, eller funktion inne i objekt (dvs metod)
async function fetchUsers(){
try{
    const response = await fetch('https://api-userapi.onrender.com/api/users/getUsers', {
        method: 'GET',
        headers: {
            'x-api-key': 'elev-hemlighet-2026',
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {throw new Error ('Fel vid anrop')}

    const data = await response.json();
    return data
}
catch(error) {console.error('Fel', error)}
}

//Nya sättet, använd arrowfunktion
const fetchData = async() => {
    try {
        const res = await fetch('https://api-userapi.onrender.com/api/users/getUsers', {
        method: 'GET',
        headers: {
            'x-api-key': 'elev-hemlighet-2026',
            'Content-Type': 'application/json'
        }
    })

    if (!res.ok) {throw new Error('fel')}

    const data = await res.json();
    }
    catch (error) {console.error(error)}
}

//elementreferens
const list = document.getElementById('list');
const fetchBtn = document.getElementById('fetchUsers');
//console.log(list, fetchBtn);

fetchBtn.addEventListener('click', async () => {
    list.innerHTML = "";//undvika multipla listor vid flera knapptryckningar
    const users = await fetchUsers(); //Hämta användarna via API-anrop
    //Presentera användarna UI
    list.innerHTML = users.map(user => `<li>${user.name} - ${user.role}</li>`).join('')
})