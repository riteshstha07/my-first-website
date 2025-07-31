document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  console.log("Feedback:", { name, email, message });

  document.getElementById("responseMessage").textContent = "🎉 धन्यवाद! तपाईंको प्रतिक्रिया सुरक्षित गरियो।";
  this.reset();
});