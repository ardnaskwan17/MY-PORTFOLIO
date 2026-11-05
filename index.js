const themeBtn = document.getElementById('themeBtn');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const topBtn = document.getElementById('topBtn');


if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
updateThemeIcon();
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  updateThemeIcon();
});
function updateThemeIcon(){ themeBtn.textContent = document.body.classList.contains('dark') ? '☀' : '☾'; }

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));


const words = ['Aspiring Front-End Developer', 'BS Information Systems Student', 'Curious Builder', 'Future Full-Stack Developer'];
let wordIndex = 0, letterIndex = 0, deleting = false;
const typingText = document.getElementById('typingText');

function typeLoop(){
  const word = words[wordIndex];
  typingText.textContent = deleting ? word.slice(0, letterIndex--) : word.slice(0, letterIndex++);
  let speed = deleting ? 45 : 80;
  if (!deleting && letterIndex > word.length){ deleting = true; speed = 1100; }
  if (deleting && letterIndex < 0){ deleting = false; wordIndex = (wordIndex + 1) % words.length; letterIndex = 0; speed = 300; }
  setTimeout(typeLoop, speed);
}
typeLoop();


document.querySelectorAll('.fact-btn').forEach(button => {
  button.addEventListener('click', () => document.getElementById('factOutput').textContent = button.dataset.fact);
});


document.querySelectorAll('.skill').forEach(button => {
  button.addEventListener('click', () => document.getElementById('skillMessage').textContent = button.textContent + ': ' + button.dataset.info);
});


document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('hide', filter !== 'all' && !card.dataset.category.includes(filter));
    });
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));


window.addEventListener('scroll', () => topBtn.classList.toggle('show', window.scrollY > 500));
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


const copyEmail = document.getElementById('copyEmail');
copyEmail.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('ardnaskwan17@gmail.com'); document.getElementById('copyStatus').textContent = 'Email copied! ♡'; }
  catch { document.getElementById('copyStatus').textContent = 'Email: ardnaskwan17@gmail.com'; }
});

document.getElementById('year').textContent = new Date().getFullYear();