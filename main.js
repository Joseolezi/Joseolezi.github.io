
// open cv popup 
const popen = document.getElementById("poppen")

function openpop() {
    document.getElementById("popen");
    popupOverlay.style.display="block";
}

// close cv popup
function closepop() {
    document.getElementById("popclose");
    popupOverlay.style.display="none";
}


const InputName = document.getElementById("InputName")
const InputEmail = document.getElementById("InputEmail")
const InputTel = document.getElementById("InputTel")

const mensaje = document.getElementById("mensaje");

function sendEmail() {
    const name = InputName.value;
    const email = InputEmail.value;
    const phone = InputTel.value;
    const subject = motivo.value;
    const message = mensaje.value;

    const emailBody = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
    `;

    window.location.href = `mailto:jose.fandos.pgs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
}

  const constraints = {
      name: {
          presence: { allowEmpty: false }
      },
      email: {
          presence: { allowEmpty: false },
          email: true
      },
      message: {
          presence: { allowEmpty: false }
      }
  };

  const form = document.getElementById('formulario');

  form.addEventListener('submit', function (event) {
    const formValues = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        message: form.elements.message.value
    };

    const errors = validate(formValues, constraints);

    if (errors) {
      event.preventDefault();
      const errorMessage = Object
          .values(errors)
          .map(function (fieldValues) { return fieldValues.join(', ')})
          .join("\n");

      alert(errorMessage);
    }
  }, false);


