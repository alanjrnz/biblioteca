document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
    const searchInput = document.getElementById('searchInput');

    // Filtragem de categorias
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const filterValue = button.getAttribute('data-filter');

            cards.forEach(card => {
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Busca
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h1, h2').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Abrir página de resumo ao clicar no botão
    const resumoButtons = document.querySelectorAll('.btn-resumo');

    resumoButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtém o nome do livro a partir do atributo data-book
            const bookName = this.getAttribute('data-book');

            // Redireciona para a página HTML correspondente dentro da pasta 'pages'
            window.location.href = `pages/${bookName}.html`;
        });
    });
});


    document.getElementById('voltarIndex').addEventListener('click', function() {
        window.location.href = '../index.html'; // Caminho relativo para a página inicial
    });

