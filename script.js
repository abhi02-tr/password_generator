const lengthSlider = document.querySelector('.pass-length input');
const options = document.querySelectorAll('.option input');
const btn = document.querySelector('.btn');
const pass = document.querySelector('.input-box input');

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "1234567890",
    symbols: "!#^+",
};

const updateSlider = () =>{
    document.querySelector('.pass-length span').innerHTML = lengthSlider.value;
}

const generatePassword = () =>{
    let password = "";
    let randompass = '';
    options.forEach(option =>{
        if(option.checked){
            // console.log(option);
            password += characters[option.id];

        }
    });
    // console.log(password);
    for(let i=0; i<lengthSlider.value; i++){
        randompass += password[Math.floor(Math.random() * password.length)];
    }
    // console.log(randompass);
    pass.value = randompass;
}

updateSlider();
lengthSlider.addEventListener("input", updateSlider);

btn.addEventListener('click', generatePassword);