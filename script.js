// Script simples de boas-vindas no console
console.log("Bem-vindo ao Cantinho do Aconchego! 💖");

<script>
  const imagens = document.querySelectorAll('.foto-momento');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
      }
    });
  }, {
    threshold: 0.1
  });

  imagens.forEach(img => observer.observe(img));
</script>
