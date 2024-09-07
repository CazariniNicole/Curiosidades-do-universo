const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');

const categorias = {
  universo: [
    {
      texto: "O universo é muito maior do que imaginamos: Ele tem cerca de 93 bilhões de anos-luz de diâmetro e contém mais de 100 bilhões de galáxias.",
      link: "https://aterraemmarte.com/curiosidades-do-universo-impressionantes/",
      imagem: "https://osr.org/wp-content/themes/osr/static/images/Default-Blog-Header.jpg"
    },
    // ... outros dados sobre o universo com link e imagem
  ],
  galaxias: [
    {
      texto:"As galáxias são sistemas estelares gigantescos, mantidos unidos pela gravidade.",
      link: "https://www.nationalgeographicbrasil.com/espaco/2023/05/os-4-fatos-sobre-as-galaxias-que-voce-nao-conhecia",
      imagem: "https://exemplo.com/imagem-universo1.jpg"
    },
    // ... outros dados sobre o universo com link e imagem
  ],
  planetas: [
    {
      texto: "Os planetas são corpos celestes que orbitam estrelas: Eles podem ser rochosos, como a Terra, ou gasosos, como Júpiter.",
      link: "https://osr.org/pt-br/blog/astronomia-br/planetas-do-sistema-solar/",
      imagem: "https://exemplo.com/imagem-planetas1.jpg"
    },
    // ... outros dados sobre planetas com link e imagem
  ],
  // ... outras categorias
};

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';

  Object.keys(categorias).forEach(categoria => {
    const resultados = categorias[categoria].filter(dado => dado.texto.toLowerCase().includes(searchTerm));

    if (resultados.length > 0) {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('category');
      categoryDiv.innerHTML = `
        <h3>${categoria}</h3>
        <ul>
          ${resultados.map(resultado => `
            <li><a href="${resultado.link}" target="_blank">${resultado.texto}</a></li>
          `).join('')}
        </ul>
      `;
      searchResults.appendChild(categoryDiv);
    }
  });
});

clearButton.addEventListener('click', () => {
  searchInput.value = '';
  searchResults.innerHTML = '';
});
  // ... (seu JavaScript)

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length; // Garante que o índice fique dentro dos limites
  carrossel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(slideIndex + 1);
});
