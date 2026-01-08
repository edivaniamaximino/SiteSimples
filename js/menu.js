document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  }


  const form = document.getElementById('contactForm');
  const successMessage = document.querySelector('.form-success');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xqeardgq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        successMessage.style.display = 'block';
        form.reset();

        setTimeout(() => {
          window.location.href = 'obrigado.html';
        }, 2000);
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }

    } catch (error) {
      alert('Erro de conexão. Tente novamente.');
    }
  });

});
