document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Form data ko collect karna
    const service = document.getElementById("service").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Console pe data print karenge
    console.log("Service:", service);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Phone:", phone);
    console.log("Message:", message);

    alert("Your message has been submitted successfully!");
    this.reset();
});
