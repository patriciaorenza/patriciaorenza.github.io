// Typewriter tagline — edit this list to change the rotating phrases
const taglinePhrases = [
  'Data storyteller.',
  'Insight seeker.',
  'Business analyst.',
  'Basketball player & coach.'
];

const typewriterEl = document.getElementById('typewriter');
let twPhraseIndex = 0;
let twCharIndex = 0;
let twDeleting = false;

function runTypewriter() {
  const current = taglinePhrases[twPhraseIndex];

  if (!twDeleting) {
    twCharIndex++;
    typewriterEl.textContent = current.slice(0, twCharIndex);
    if (twCharIndex === current.length) {
      twDeleting = true;
      setTimeout(runTypewriter, 1400);
      return;
    }
  } else {
    twCharIndex--;
    typewriterEl.textContent = current.slice(0, twCharIndex);
    if (twCharIndex === 0) {
      twDeleting = false;
      twPhraseIndex = (twPhraseIndex + 1) % taglinePhrases.length;
    }
  }

  setTimeout(runTypewriter, twDeleting ? 40 : 70);
}

if (typewriterEl) runTypewriter();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');

navToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close sidebar when a nav link is tapped (mobile)
sidebar.querySelectorAll('.sidebar-nav a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
