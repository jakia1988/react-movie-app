import { message } from 'antd';

export function checkAuth(creds) {
    const checkAuth = localStorage.getItem('userDetails');
    if(checkAuth !== null && checkAuth !== undefined){
       return checkExistingUser(creds)
    }else{
       return checkExistingUser(creds)  
    }
}

function checkExistingUser(creds) {
    const {email, password} = creds;
    let flag = false;
    let users = JSON.parse(localStorage.getItem('userDetails'));
    users.forEach((e)=>{
        if(e.email === email && e.password === password){
            localStorage.setItem('currentUser', JSON.stringify(creds));
            message.success('Login sucessful'); 
            flag = true;
        } else{
            flag = false;
        }
    });
    return flag;    
}