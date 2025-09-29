const flashlight = document.getElementById('flashlight');

window.addEventListener('mousemove', (e) => {
  const xPercent = (e.clientX / window.innerWidth) * 100 + '%';
  const yPercent = (e.clientY / window.innerHeight) * 100 + '%';
  document.documentElement.style.setProperty('--spot-x', xPercent);
  document.documentElement.style.setProperty('--spot-y', yPercent);
});
