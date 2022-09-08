function Register(e){
    e.preventDefault();

    let formdata = {

        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
       password: document.getElementById("password").value,
       username: document.getElementById("username").value,
       mobile:document.getElementById("mobile").value,
       description:document.getElementById("description").value,
    };

    formdata = JSON.stringify(formdata);

    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{

    method: 'POST',
    body : formdata,
    headers:{
        'Content-Type':'application/json',
    },


    })
    .then((response)=>{
        return response.json();

    })
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    });
}

function login(e){
    e.preventDefault();

    let formdata = {

       
       username: document.getElementById("username-1").value,
       password: document.getElementById("password-1").value,
      
    };

    let body1 = JSON.stringify(formdata);

    fetch("https://masai-api-mocker.herokuapp.com/auth/login",{

    method: 'POST',
    body : body1,

    //mode:'no-cors',

    headers:{
        'Content-Type':'application/json',
    },


    })
    .then((response)=>{
        return response.json();

    })
    .then((response)=>{
        console.log(response);
        getMyProfile(response, formdata);
    })
    .catch((err)=>{
        console.log(err);
    });
}

function getMyProfile({token},{username}){
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },

    })
    .then((res)=>{
        return res.json();

    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err.message);
    });
} 