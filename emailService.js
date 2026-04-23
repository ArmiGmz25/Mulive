document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (!e.target.checkValidity()) {
    e.target.reportValidity();
    return;
  }

  const btn = document.getElementById("contact-btn");

  btn.textContent = "Enviando...";
  btn.disabled = true;

  const params = {
    from_name: document.getElementById("contact-nombre").value,
    from_email: document.getElementById("contact-email").value,
    phone: document.getElementById("contact-tel").value,
    message: document.getElementById("contact-msg").value,
  };

  // Notificación a Mulive
  emailjs
    .send("service_npz7c8m", "template_k9le82b", params)
    .then(() => {
      // Auto-reply al cliente
      return emailjs.send("service_npz7c8m", "template_3js0ynl", params);
    })
    .then(() => {
      e.target.reset();
      const toast = new bootstrap.Toast(
        document.getElementById("toast-success"),
      );
      toast.show();
    })
    .catch((err) => {
      console.error(err);
      const toast = new bootstrap.Toast(document.getElementById("toast-error"));
      toast.show();
    })
    .finally(() => {
      btn.textContent = "Enviar mensaje";
      btn.disabled = false;
    });
});
