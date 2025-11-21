
abstract class FavoriteManager {
    protected favorites: string[] = [];

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {

        if (this.favorites.includes(item)) {
            console.log(`O filme "${item}" já está na lista.`);
            return;
        }
        

        this.favorites.push(item);
        console.log(`Filme adicionado: ${item}`);
    }

    getFavorites(): string[] {

       return [...this.favorites].sort((a, b) => a.localeCompare(b));
    }
}


class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        this.favorites.unshift(item);
        console.log(`Livro adicionado ao topo da pilha: ${item}`);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

//teste

console.log("Favoritos: FILMES (Ordenação Alfabética e Únicos)");
const meusFilmes = new MoviesFavoriteManager();
meusFilmes.addFavorite("Matrix");
meusFilmes.addFavorite("Avatar");
meusFilmes.addFavorite("Matrix");
meusFilmes.addFavorite("Batman");

console.log(meusFilmes.getFavorites());


console.log("\nFavoritos: LIVROS (Inserção no Início)");
const meusLivros = new BooksFavoriteManager();
meusLivros.addFavorite("Dom Quixote");
meusLivros.addFavorite("Pequeno Príncipe");
meusLivros.addFavorite("Harry Potter");

console.log(meusLivros.getFavorites());