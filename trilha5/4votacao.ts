
abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    voteFor(candidate: string): void {

        const currentVotes = this.votes[candidate] || 0;
        this.votes[candidate] = currentVotes + 1;
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        const currentVotes = this.votes[candidate] || 0;
        this.votes[candidate] = currentVotes + 1;
    }

    getResults(): object {
        const entries = Object.entries(this.votes);

        const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

        return sortedEntries.map(entry => entry[0]);
    }
}

//teste

console.log("Sistema: Election (Totais)");
const eleicao = new Election();
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato B");
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato C");
eleicao.voteFor("Candidato A");

console.log(eleicao.getResults());


console.log("\nSistema: Poll (Ranking)");
const enquete = new Poll();
enquete.voteFor("Opcao 1"); 
enquete.voteFor("Opcao 2");
enquete.voteFor("Opcao 2"); 
enquete.voteFor("Opcao 3");
enquete.voteFor("Opcao 3");
enquete.voteFor("Opcao 3");


console.log(enquete.getResults());