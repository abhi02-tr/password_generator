const lengthSlider = document.querySelector('.pass-length input');
const options = document.querySelectorAll('.option input');
const btn = document.querySelector('.btn');
const pass = document.querySelector('.input-box input');
const passIndicator = document.querySelector('.pass-indicator');

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "1234567890",
    symbols: "!#^+",
};

const updateSlider = () =>{
    document.querySelector('.pass-length span').innerHTML = lengthSlider.value;
    generatePassword();
    updatePassIndicator();
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
        let random = password[Math.floor(Math.random() * password.length)];
        if(!randompass.includes(random) || random == ''){
            randompass += random;
        }
        else{
            i--;
        }
    }
    // console.log(randompass);
    pass.value = randompass;
    
}

const updatePassIndicator = () =>{
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <=16 ? 'medium' :'strong';
};

updateSlider();
lengthSlider.addEventListener("input", updateSlider);

btn.addEventListener('click', generatePassword);

// copy code
const copy = document.querySelector('.material-symbols-outlined');



const copyPass = () =>{
    navigator.clipboard.writeText(pass.value);
    copy.innerHTML = 'check';

    setTimeout(()=>{
        copy.innerHTML = 'content_copy';

    }, 1500);
};

copy.addEventListener('click', copyPass);