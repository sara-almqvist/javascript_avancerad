import {getPosts, postData} from "./api.js"
import {createPostList, confirmationToUser} from "./ui.js"
//element-reference
const button = document.getElementById('button');
const userMessageField = document.getElementById('userMessage');
const form = document.getElementById('userInput');

button.addEventListener('click', async () => {
    const data = await getPosts();
    createPostList(data);
    });

form.addEventListener('submit', async e => {
    e.preventDefault();
    const message = userMessageField.value;
    const data = await postData(message);
    confirmationToUser(data);
})