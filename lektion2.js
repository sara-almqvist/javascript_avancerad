//element-reference
const button = document.getElementById('button');
const parentList = document.getElementById('list');
const userMessageField = document.getElementById('userMessage');
const form = document.getElementById('userInput');
const svar = document.getElementById('svar');
const submitBtn = document.getElementById('submitBtn');

//testa alla elementreferenser med console.log och ta sedan bort om allt fungerar för att undvika buggar

button.addEventListener('click', async ()=>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const data = await res.json();
        data.forEach(element => {
            const li = document.createElement('li');
            li.textContent= element.title;
            parentList.appendChild(li);
        })
    }
    catch {console.error('Det gick fel')}
});

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const message = userMessageField.value;
    try{ 
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: message, body: "test", userId: 1})
        });
         if (!res.ok){
            console.log('Något gick fel med svaret')
            return
        }
        const data = await res.json();
        console.log(data);
        //userMessageField.value = ""; //rensa formuläret
        form.reset();//återställer formuläret
        svar.innerText = "Tack för ditt inlägg!"; //bekräftelse till användaren
    }
    catch(error) {console.error("FEL: ", error);
        svar.innerText= "Något gick fel";
    }
    finally{console.log("Knapptryckning klar!")}
})
