//Lihat Password
function togglePasswordVisibility1() {
    const passwordInput = document.getElementById('password1');
    const toggleIcon = document.getElementById('togglePasswordIcon1');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.classList.remove('ri-eye-line');
      toggleIcon.classList.add('ri-eye-off-line');
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.remove('ri-eye-off-line');
      toggleIcon.classList.add('ri-eye-line');
    }
  }