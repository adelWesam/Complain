document.getElementById("complaintForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const complaintText = document.getElementById("complaint").value;
    const email = "recipient-email@example.com";  // Hardcoded recipient for backend
    try {
      const response = await fetch("https://complain-new.onrender.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ complaint: complaintText, email }),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  });
  