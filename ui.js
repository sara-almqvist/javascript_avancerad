export function createPostList(data){
    /*data.forEach(element => {
            const li = document.createElement('li');
            li.textContent= element.title;
            parentList.appendChild(li);
        })*/
    const ul = document.getElementById('list');
    ul.innerHTML = data.map(d => `<li>${d.title}</li>`).join('')
}

export function confirmationToUser(data){
    document.getElementById('svar').textContent = `Tack för ditt inlägg med ID ${data.id}`;
}
