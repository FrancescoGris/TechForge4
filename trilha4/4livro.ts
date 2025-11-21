
interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}


class Biblioteca {
    livros: Livro[] = [];
    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter((livro) => livro.disponivel === true);
    }
}

// pra teste
const minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "1984", autor: "George", disponivel: false });
minhaBiblioteca.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true });

const livrosParaLer = minhaBiblioteca.buscarLivrosDisponiveis();

console.log("Livros disponíveis para empréstimo:");
console.log(livrosParaLer);