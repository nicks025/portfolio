document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    idea: form.idea.value
  };

  const messageEl = document.getElementById("formMessage");
  messageEl.textContent = "Sending...";
  messageEl.className = "";

  try {
    const res = await fetch("https://YOUR_RENDER_BACKEND_URL/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      messageEl.textContent = "Message sent!";
      messageEl.className = "success";
      form.reset();
    } else {
      throw new Error("Failed to send");
    }
  } catch (err) {
    messageEl.textContent = "Failed to send message.";
    messageEl.className = "error";
  }
});
