export async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) throw new Error(`Fel: ${res.status}`)
    return res.json()  
}

export async function postData(message){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: message, body: "test", userId: 1})
        });
        
        return res.json()
}