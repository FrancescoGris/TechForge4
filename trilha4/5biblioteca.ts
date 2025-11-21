
interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}


class BibliotecaGestao {
    livros: LivroBiblioteca[] = [];

    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }


    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {

        const disponiveis = this.livros.filter(livro => livro.disponivel);

        return disponiveis.sort((a, b) => {
            return a.titulo.localeCompare(b.titulo);
        });
    }
}

//teste
const biblioteca = new BibliotecaGestao();

biblioteca.adicionarLivro({ titulo: "O Hobbit", autor: "Tolkien", genero: "Fantasia", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Duna", autor: "Frank Herbert", genero: "Ficção Científica", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Neuromancer", autor: "William Gibson", genero: "Cyberpunk", disponivel: false });
biblioteca.adicionarLivro({ titulo: "A Sociedade do Anel", autor: "Tolkien", genero: "Fantasia", disponivel: true });

console.log("Livros de Tolkien");
console.log(biblioteca.buscarPorAutor("Tolkien"));

console.log("\nLivros Disponíveis (Ordenados A-Z)");
console.log(biblioteca.obterLivrosDisponiveisOrdenados());