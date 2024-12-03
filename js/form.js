const loader = document.querySelector('.loader');

//select inputs
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

submitBtn.addEventListener('click', () => {
   if(name.value.length<3){
        showAlert('name must be 3 letter long');
    } else if(!email.value.length){
        showAlert('enter your email');
    } else if(password.value.length < 8){
        showAlert('password should be 8 letters long');
    } else{
        //submit form
        loader.style.display = 'block';
        sendData('/signup',{
            name: name.value,
            email: email.value,
            password: password.value,
            
        })
    }
})

//send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    }
}

//alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
    alertBox.classList.remove('show');
    },3000);
};
<script type="module">
  // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {apiKey}: "AIzaSyCFnunTUpNw6_8FIqaIh2nrj6sxcMyh1aI",
    authDomain: "giftz-fd18f.firebaseapp.com",
    projectId: "giftz-fd18f",
    storageBucket: "giftz-fd18f.firebasestorage.app",
    messagingSenderId: "91783621750",
    appId: "1:91783621750:web:091b94618efccac8834357"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
</script>;
