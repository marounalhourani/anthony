const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (name === '') {
    showError('name', 'Name is required');
  } else if (name.length < 2) {
    showError('name', 'Name must be at least 2 characters');
  } else {
    showSuccess('name');
  }
  
  if (email === '') {
    showError('email', 'Email is required');
  } else if (!isValidEmail(email)) {
    showError('email', 'Invalid email address');
  } else {
    showSuccess('email');
  }
  
  if (message === '') {
    showError('message', 'Message is required');
  } else {
    showSuccess('message');
  }
});

function showError(inputId, errorMessage) {
  const formGroup = document.getElementById(inputId).parentNode;
  formGroup.classList.remove('success');
  formGroup.classList.add('error');
  const error = formGroup.querySelector('small');
  error.textContent = errorMessage;
}

function showSuccess(inputId) {
  const formGroup = document.getElementById(inputId).parentNode;
  formGroup.classList.remove('error');
  formGroup.classList.add('success');
}

function isValidEmail(email) {
  const emailRegex = /^[^@]+@\w+(\.\w+)+\w$/;
  return emailRegex.test(email);
}
