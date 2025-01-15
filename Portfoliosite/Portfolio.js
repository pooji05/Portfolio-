// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Dynamic Greeting Message
  const greetingElement = document.createElement('div');
  greetingElement.style.position = 'fixed';
  greetingElement.style.bottom = '10px';
  greetingElement.style.right = '10px';
  greetingElement.style.padding = '10px 20px';
  greetingElement.style.backgroundColor = '#333';
  greetingElement.style.color = '#fff';
  greetingElement.style.borderRadius = '5px';
  greetingElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  greetingElement.innerText = 'Welcome to my portfolio!';
  document.body.appendChild(greetingElement);
  
  setTimeout(() => {
    greetingElement.style.display = 'none';
  }, 5000);
  
  // Contact Section Alert
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.addEventListener('click', () => {
      alert('Thank you for visiting! Feel free to contact me anytime.');
    });
  }
  