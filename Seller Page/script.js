const { generateKey } = require("crypto");

const inp = document.querySelector('input');
const but  =  document.querySelector('button');
const p = document.querySelector('p');


const digits = '123456789ABDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';


function generateKey(){

var pTag = document.getElementById("SrNumber");

let serial = "";

but.addEventListener("click", ()=>{



    serial = "";
    p.textContent = '';
    for(let i=0;i<inp.value;i++){

        let rand = Math.floor(Math.random() * digits.length);

        serial += digits[rand];

        serialNumbers.push(serial);

        SrNumber.in
    }

    pTag.innerHTML = SrNumber;

});

}
