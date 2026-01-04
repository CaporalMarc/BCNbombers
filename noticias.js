fetch('noticias.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('noticias');

    data.forEach(noticia => {
      const card = document.createElement('div');

      card.classList.add('noticia-card');

      card.innerHTML = `
        <h3>${noticia.titulo}</h3>
        <small>${noticia.fecha}</small>
        <p>${noticia.texto}</p>
      `;

      contenedor.appendChild(card);
    });
  });
