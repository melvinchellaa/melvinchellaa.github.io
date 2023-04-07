// code fix #1 Event Handler
    // Set default color mode
    document.body.className = "contrast-mode";
  
    // Color Scheme
    document.getElementById("contrast-mode").addEventListener("click", function () {
      document.body.className = "contrast-mode";
    });
  
    document.getElementById("light-mode").addEventListener("click", function () {
      document.body.className = "light-mode";
    });
  
    document.getElementById("dark-mode").addEventListener("click", function () {
      document.body.className = "dark-mode";
    });

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from being submitted and refreshing the page
  
    // Check if the name is valid
    if (isNameValid()) {
      // Perform client-side validation and form submission logic here
      console.log("Form submitted successfully.");
      showNotification("Form submitted!");
    } else {
      showNotification("Please enter a name longer than 3 characters.");
    }
  });
  
  // code fix #2 Also has event handlers
  function openInNewTab(link) {
    window.open(link, '_blank').focus();
  }
  
  document.getElementById('linkedin').addEventListener('click', function(event) {
    event.preventDefault();
    openInNewTab(this.href);
  });
  
  document.getElementById('instagram').addEventListener('click', function(event) {
    event.preventDefault();
    openInNewTab(this.href);
  });
  
  document.getElementById('github').addEventListener('click', function(event) {
    event.preventDefault();
    openInNewTab(this.href);
  });
  
  // Conditional
  function isNameValid() {
    let name = document.getElementById("name").value;
    return name.length > 3;
  }
  
  // Notification / Event Handler
  function showNotification(message) {
    // Display the notification with the provided message
    alert(message);
  }
  

  