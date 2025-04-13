const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = getPasswordStrength(password);

  feedback.textContent = strength.message;
  feedback.className = `text-sm font-medium ${strength.color}`;
});

function getPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[\W_]/.test(password)) score++;

  if (score <= 2) {
    return { message: 'Weak Password 😟', color: 'text-red-600' };
  } else if (score === 3 || score === 4) {
    return { message: 'Moderate Password 😐', color: 'text-yellow-600' };
  } else {
    return { message: 'Strong Password 💪', color: 'text-green-600' };
  }
}
