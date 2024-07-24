
  const inputElem = document.getElementById('name-input');
  const outputElem = document.getElementById('name-output');
  inputElem.addEventListener('input', function() {
       const input = this.value.trim();
       
      
     if (input) {
       outputElem.textContent = input;
    } else {
        outputElem.textContent = 'Anonymous';
     }
  });