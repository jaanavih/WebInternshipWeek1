document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
  
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        alert('Name and email are required fields.');
        return;
      }
  
      
  
    
      alert('Thank you for your submission!');
      form.reset(); 
    });
  });
  