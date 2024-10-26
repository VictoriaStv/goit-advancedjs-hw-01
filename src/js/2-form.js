const formData = {
  email: '',
  message: '',
};

function saveToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

document.querySelector('.login-form').addEventListener('input', event => {
  const { name, value } = event.target;

  if (name in formData) {
    formData[name] = value.trim(); 
    saveToLocalStorage(); 
  }
});

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    Object.assign(formData, JSON.parse(savedData)); 
    document.querySelector('[name="email"]').value = formData.email; 
    document.querySelector('[name="message"]').value = formData.message; 
  }
});

document.querySelector('.login-form').addEventListener('submit', event => {
  event.preventDefault(); 

  if (!formData.email || !formData.message) {
    alert('Fill please all fields'); 
    return;
  }

  console.log('Submitted data:', formData); 
  localStorage.removeItem('feedback-form-state'); 
  Object.assign(formData, { email: '', message: '' }); 

  document.querySelector('[name="email"]').value = '';
  document.querySelector('[name="message"]').value = '';
});
