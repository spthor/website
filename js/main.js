(function () {
  'use strict';

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav__list--open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fname = document.getElementById('fname')?.value?.trim() || '';
      const email = document.getElementById('email')?.value?.trim() || '';
      const subject = document.getElementById('subject')?.value?.trim() || 'Portfolio Contact';
      const message = document.getElementById('message')?.value?.trim() || '';

      const body = `Name: ${fname}
Email: ${email}

Message:
${message}`;
      const mailtoLink = `mailto:soumitrathorat@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
    });
  }
})();
