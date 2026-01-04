fetch('noticias.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('noticias');

    data.forEach(noticia => {
      const card = document.createElement('div');

      // ESTILO INLINE (esto IGNORA el CSS)
      card.style.background = 'yellow';
      card.style.border = '5px solid red';
      card.style.padding = '20px';
      card.style.marginBottom = '20px';

      card.innerHTML = `
        <h3>${noticia.titulo}</h3>
        <small>${noticia.fecha}</small>
        <p>${noticia.texto}</p>
      `;

      contenedor.appendChild(card);
    });
  });
