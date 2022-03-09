
let car = true;
let license = true;
let age = 15;
let usa = false;

//(car && (age >= 18 && license)|| (age >= 21 && usa)) ? console.log("Puedes conducir") : console.log("No puedes conducir");
if (car && (license  && age >=18) || (usa && age >= 21)) {
    console.log("Puedes manejar")
} else {
    console.log("No puedes manejar")
}

let alberto = {
    money : true,
    pastilla : true,
}
//--Esta bien pero node no lo lee.
//--(alberto.pastilla && alberto.money) ? console.log("Puedes ir a Japon") : console.log("No puedes ir a Japon");

