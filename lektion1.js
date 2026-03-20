//Workshop din första Promise-kedja

/*fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Något gick fel: ', err))
    .finally( () => console.log('Klart!'));*/



//Workshop Kedja flera anrop
//Med .then
/*fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
        console.log(data.name)
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)})
    .then(res => res.json())
    .then(data => console.log(data[0].title))
    .catch(err => console.error('Något gick fel: ', err))
    .finally(() => console.log('Hämtningar klara'));*/

//Med async/await
async function getUserPost(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await res.json();
        console.log(data.name);
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${data.id}`;
        const response = await fetch(url);
        const postData = await response.json();
        console.log(postData[0].title);
    } catch (err) {console.error('Det gick fel: ',err)}
    finally {console.log('Allt är klart!')}
}

//getUserPost();

async function hämtaTodo(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/5');
        if (!res.ok){throw new Error(`HTTP ${res.status}`)};
        const data = await res.json();
        console.log(`Todo: ${data.title}`);
    }
    catch {(err) => console.err(err.message)}
    finally {console.log("Klart!");}
}

//hämtaTodo();
