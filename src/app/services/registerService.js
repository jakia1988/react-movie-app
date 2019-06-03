import { message } from 'antd';

function setStorage(value) {
    // Get the existing data
    let users = localStorage.getItem('userDetails');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    users = users ? JSON.parse(users) : [];

    // Add new data to localStorage Array
    users.push(value);

    // Save back to localStorage
    localStorage.setItem('userDetails', JSON.stringify(users));
}

export function registerUser(obj) {
    setStorage(obj);
    message.success('Register successful'); 
    setTimeout(()=> message.success('Please login to continue'), 2000)
}