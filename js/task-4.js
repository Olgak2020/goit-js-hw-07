const login= document.querySelector('.login-form');
 login.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  
  if (!email || !password) {
      alert('Please fill in both the email and password fields.');
      return;
  }
  
  console.log('Email:', email);
  console.log('Password:', password);
  
    event.target.reset();
});
