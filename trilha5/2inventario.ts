
abstract class Inventory {

    protected items: Record<string, number> = {};


    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}


class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {

        const currentQty = this.items[item] || 0;
        
        this.items[item] = currentQty + quantity;
        console.log(`Armazém: Adicionado ${quantity}x ${item}. Total: ${this.items[item]}`);
    }

    removeItem(item: string): void {

        if (this.items[item]) {
            delete this.items[item];
            console.log(`Armazém: Item '${item}' removido do registro.`);
        } else {
            console.log(`Erro: '${item}' não encontrado no armazém.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}


class StoreInventory extends Inventory {
    private readonly MAX_LIMIT = 10;

    addItem(item: string, quantity: number): void {
        const currentQty = this.items[item] || 0;
        const newTotal = currentQty + quantity;

        if (newTotal > this.MAX_LIMIT) {
            console.log(`Loja (ERRO): Não cabe adicionar ${quantity}x ${item}. Limite é 10 (Atual: ${currentQty}).`);
            return; 
        }

        this.items[item] = newTotal;
        console.log(`Loja: Adicionado ${quantity}x ${item}. Total: ${this.items[item]}`);
    }

    removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
            console.log(`Loja: Item '${item}' removido da prateleira.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

// testar
console.log("TESTE ARMAZÉM ");
const warehouse = new WarehouseInventory();
warehouse.addItem("Pneus", 50);
warehouse.addItem("Pneus", 20);
console.log("Inventário Armazém:", warehouse.getInventory());

// Teste da Loja (Limite restrito)
console.log("\nTESTE LOJA");
const store = new StoreInventory();
store.addItem("Notebook", 5); 
store.addItem("Notebook", 6);
store.addItem("Notebook", 2);

console.log("Inventário Loja:", store.getInventory());