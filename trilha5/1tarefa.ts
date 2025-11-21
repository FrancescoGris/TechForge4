interface TarefaObjeto {
    descricao: string;
    tipo: 'Projeto' | 'Diária';
}

abstract class TaskManager {
    protected listaDeTarefas: TarefaObjeto[] = [];

    abstract addTask(task: string): void;
    abstract listTasks(): string[];

    protected verificaDuplicidade(task: string): boolean {
        return this.listaDeTarefas.some((t) => t.descricao === task);
    }
}

class Project extends TaskManager {
    addTask(task: string): void {
        if (this.verificaDuplicidade(task)) {
            console.log(`⚠️ A tarefa de projeto "${task}" já existe!`);
            return;
        }


        this.listaDeTarefas.push({
            descricao: task,
            tipo: 'Projeto'
        });
        console.log(`✅ Tarefa de Projeto adicionada: ${task}`);
    }

    listTasks(): string[] {
        return this.listaDeTarefas.map(t => `[PROJETO] ${t.descricao}`);
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        if (this.verificaDuplicidade(task)) {
            console.log(`⚠️ A tarefa diária "${task}" já existe!`);
            return;
        }

        this.listaDeTarefas.push({
            descricao: task,
            tipo: 'Diária'
        });
        console.log(`✅ Tarefa Diária adicionada: ${task}`);
    }

    listTasks(): string[] {
        return this.listaDeTarefas.map(t => `[DIÁRIA] ${t.descricao} (Lembrete)`);
    }
}

//testar

console.log("Gerenciamento de Projeto");
const projetoApp = new Project();
projetoApp.addTask("Desenvolver API");
projetoApp.addTask("Configurar Banco de Dados");
projetoApp.addTask("Desenvolver API");

console.log(projetoApp.listTasks());

console.log("\nGerenciamento Diário");
const diarioApp = new DailyTasks();
diarioApp.addTask("Responder e-mails");
diarioApp.addTask("Reunião Daily");

console.log(diarioApp.listTasks());