/*let name = document.querySelector('#name');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

let users = {};

function User(name, login, password){
    this.name = name;
    this.login = login;
    this.password = password;
}

function createId(users){
    return Object.keys(users).length;
}

submit.addEventListener('click', ()=>{
    const nameUser = name.value;
    const loginUser = login.value;
    const passwordUser = password.value; 
    
    const user =  new User(nameUser, loginUser, passwordUser);

    const userId = 'User' + createId(users);

    users[userId] = user;
    console.log(users);
    alert(`${nameUser}, вы успешно прошли регистрацию `);
})
*/
document.addEventListener('DOMContentLoaded', function() {
    let nameInput = document.querySelector('#name');
    let loginInput = document.querySelector('#login');
    let passwordInput = document.querySelector('#password');
    let submitButton = document.querySelector('#submit');

    let users = {};

    function UserObject(name, login, password){
        this.name = name;
        this.login = login;
        this.password = password;
    }

    function createId(users){
        return Object.keys(users).length;
    }

    submitButton.addEventListener('click', ()=>{
        const nameUser = nameInput.value;
        const loginUser = loginInput.value;
        const passwordUser = passwordInput.value; 
        
        const user = new UserObject(nameUser, loginUser, passwordUser);

        const userId = 'User' + createId(users);

        users[userId] = user;

        console.log(users);
        alert(`Все верно?\nИмя: ${nameUser}\nЛогин: ${loginUser}`)
        alert(`${nameUser}, вы успешно прошли регистрацию `);
    });
});
