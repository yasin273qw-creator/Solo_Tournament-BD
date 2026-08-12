const form = document.querySelector("#form");

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
  const file = document.querySelector("#shot").files[0];

  if (!file) {
    event.preventDefault();
    alert("Payment screenshot দিন।");
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    event.preventDefault();
    alert("Screenshot 10 MB-এর মধ্যে রাখুন।");
    return;
  }

  // FormSubmit-এ তথ্য ও screenshot পাঠানোর জন্য
  // এখানে form submission বন্ধ করা হচ্ছে না।
});
