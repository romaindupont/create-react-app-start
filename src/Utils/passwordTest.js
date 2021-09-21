
export function PasswordTest (myValue) {
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const psdId = document.getElementById('password');
  const psdError = document.getElementById('errorPassword');
  if (regex.test(myValue)) {
    psdId.style.color="green";
    psdError.textContent="Mot de passe valide";
  }
  else {
    psdId.style.color="red"
    psdError.textContent="Mot de passe invalide";
  }
};
