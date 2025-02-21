let krmivo = document.querySelector("#krmivo"); // Vybereme element select s id "krmivo"
let mn = document.querySelector("#mn");
let bio = document.querySelector("#bio");
let extra = document.querySelector("#extra");
let chudy = document.querySelector("#chudy");
let cp = document.querySelector("#cp");
let fir_kuryr = document.querySelector("#fir_kuryr");
let darkove = document.querySelector("#darkove");
let celkem_cena = document.querySelector("#celkem_cena");
let kapital = document.querySelector("#kapital");
let jmeno = document.querySelector("#jmeno");
let email = document.querySelector("#email");
let button = document.querySelector("#prepocitej"); // Vybereme tlačítko s id "odesli"

button.addEventListener("click", function () {
  let vybraneKrmivo = krmivo.value; // Získáme hodnotu vybraného krmiva
  let mn_fce = mn.value;
  let bio_fce = bio.value;
  let extra_fce = extra.value;
  let chudy_fce = chudy.value;
  let cp_fce = cp.value;
  let darkove_fce = darkove.value;
  let fir_kuryr_fce = fir_kuryr.value;
  let jmeno_fce = jmeno.value;
  let email_fce = email.value;
  let kapital_fce = kapital.value;

  if (bio.checked) {
    bio_fce = 0.3;
  } else {
    bio_fce = 0;
  }

  if (extra.checked) {
    extra_fce = 0.5;
  } else {
    extra_fce = 0;
  }
  if (chudy.checked) {
    chudy_fce = 0.85;
  } else {
    chudy_fce = 1;
  }
  if (cp.checked) {
    cp_fce = 250;
  } else {
    cp_fce = 0;
  }
  if (fir_kuryr.checked) {
    fir_kuryr_fce = 1.1;
  } else {
    fir_kuryr_fce = 1;
  }
  if (darkove.checked) {
    darkove_fce = 500;
  } else {
    darkove_fce = 0;
  }

  let procenta = (1 + bio_fce + extra_fce) * chudy_fce;
  let suma =
    (krmivo.value * mn_fce * procenta + cp_fce + darkove_fce) * fir_kuryr_fce;
  console.log(suma);
  celkem_cena.value = suma;
  if (suma <= kapital.value) {
    kapital.value = "ok";
  } else {
    kapital.value = "nedostatek kapitalu";
  }
  if (jmeno_fce.match(/^[A-Za-z]+$/)) {
    jmeno.value = "ok";
  } else {
    jmeno.value = "použil jsi nepovolený znak ";
  }
  if (email_fce.match(/.+@.+\..+/)) {
    email.value = "ok";
  } else {
    email.value = "špatný tvar email";
  }
});
