let input_length = document.querySelector(".length");
let letter_check = document.querySelectorAll(".letter-check");
let generate_password = document.querySelector(".generate-password");
let generate = document.querySelector(".generate");
let password_result = document.querySelector(".password-result");

let letters = [
    {
        title: "Capital",
        letter: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    },
    {
        title: "Small",
        letter: ["abcdefghijklmnopqrstuvwxyz"]
    },
    {
        title: "Number",
        letter: ["0123456789"]
    },
    {
        title: "Symbols",
        letter: ["!@#$%^&*()-_+=/~"]
    },
];
var add_letters = [];
for (let i = 0; i < letter_check.length; i++) {
    letter_check[i].addEventListener("focus", (e)=>{
        if (e.target.value == letters[i].title) {
            add_letters += letters[i].letter;
            for (let i = 0; i < add_letters.length; i++) {
                // console.log(add_letters[i]);
            }
            console.log(add_letters);
        }
    });
    
    // letter_check[i].addEventListener("focusout", (e)=>{
        // console.log("hi")
        // if (e.target.value == letters[i].title) {
        //     let mapped_letters = add_letters.map(add_letter=>{
        //         console.log(add_letter);
        //     })
        //     for (let i = 0; i < add_letters.length; i++) {
        //         console.log(mapped_letters[i]);
        //     }
        //     console.log(add_letters);
        // }
    // });
}


input_length.addEventListener("change", function(){
    if (input_length.value < 8) {
        alert("please input a number that bigger than 7.");
        generate.setAttribute("disabled","disabled");
        generate.classList.add("disabled");
    }
    else{
        generate.removeAttribute("disabled");
        generate.classList.remove("disabled");
    };
});


function random_Char(){
    let chars=[];
    for (let i = 0; i < add_letters.length; i++) {
        chars +=[add_letters[i]];
    }
    let char;
    for (let i = 0; i < chars.length; i++) {
        char = chars[parseInt(Math.random(0,i)*i)]; 
    };
    return char;
}
// console.log(random_Char());

function random_password(length){
    let password = "";
    for (let i = 0; i < length; i++) {
        password += random_Char();
    }
    return password;
}

generate.addEventListener("click", function(){
    generate_password.style.borderBottom = "1px solid black";
    generate_password.style.paddingBottom = "15px";
    password_result.innerHTML = 
    `<span class="password">${random_password(input_length.value)}</span>
    <img src="./img/copy.svg" alt="copy" class="copy">`;
})

let copy = document.querySelector(".copy");
let password = document.querySelector(".password");
password_result.addEventListener("click",(e)=>{
    if (e.target.classList.contains("copy")) {
        navigator.clipboard.writeText(e.target.parentNode.childNodes[0].innerHTML);
        password_result.innerHTML += "<p class='copied'>Copied Successfully</p>";
    }
})