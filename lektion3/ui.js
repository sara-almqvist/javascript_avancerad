const renderUser = (users) => {
    const listElement = document.getElementById('list');
    const listItem = users.map(user => `<li>${user.name} - ${user.role}</li>`);
    listElement.innerHTML = listItem.join('');
};

export default renderUser;