const form = document.querySelector("#form");
const done = document.querySelector("#done");

document.querySelectorAll("[data-copy]").forEach(button => {
  button.onclick = async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = "COPIED ✓";

      setTimeout(() => {
        button.textContent = "COPY";
      }, 1200);
    } catch (error) {
      alert(button.dataset.copy);
    }
  };
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const registrationId =
    "STBD-" + Date.now().toString(36).toUpperCase();

  done.innerHTML = `
    <div class="success">
      <b>✅ Request Submitted</b><br><br>
      Registration ID:
      <b>${registrationId}</b><br><br>
      আপনার তথ্য ও Payment Screenshot যাচাইয়ের জন্য জমা হয়েছে।
      <br><br>
      Approval হলে WhatsApp-এর মাধ্যমে আপনাকে জানানো হবে।
    </div>
  `;

  form.reset();
});
