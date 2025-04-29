const toggleBtn = document.getElementById('toggle-btn');
const icon = document.getElementById('icon');
const darkAnim = document.getElementById('dark-animation');
const lightAnim = document.getElementById('light-animation');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.add('animate');

  // Hide animations before toggle
  darkAnim.style.display = 'none';
  lightAnim.style.display = 'none';

  setTimeout(() => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      icon.textContent = '🌙';

      setTimeout(() => {
        darkAnim.style.display = 'block';
      }, 2000);

    } else {
      icon.textContent = '☀️';

      setTimeout(() => {
        lightAnim.style.display = 'block';
      }, 2000);
    }

    toggleBtn.classList.remove('animate');
  }, 300);
});
