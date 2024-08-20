document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    // Função para filtrar cards com base na pesquisa
    function filterCards() {
        const searchTerm = searchInput.value.toLowerCase().trim(); // Remove espaços extras
        console.log('Search Term:', searchTerm); // Log do termo de pesquisa
        const cards = document.querySelectorAll('.card'); // Seleciona todos os cards com a classe 'card'

        cards.forEach(card => {
            const titles = card.querySelectorAll('h1, h2'); // Obtém todos os elementos h1 e h2 dentro do card
            let matches = false;
            titles.forEach(title => {
                const text = title.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    matches = true;
                }
            });
            card.style.display = matches || searchTerm === '' ? 'block' : 'none';
        });
    }

    // Adiciona o evento de digitação na barra de pesquisa
    searchInput.addEventListener('input', filterCards);
});
