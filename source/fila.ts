export class Fila {
    private tamanho: number;
    private muitobaixo: number[]
    private baixa: number[]
    private normal: number[]
    private alta: number[]
    private muitoalta: number[]

    constructor(tamanho: number) {
        this.tamanho = tamanho;
        this.muitobaixo = [];
        this.baixa = [];
        this.normal = [];
        this.alta = [];
        this.muitoalta = [];
    }
    public cheia(): boolean {
        let soma = this.muitobaixo.length + this.baixa.length + this.normal.length + this.alta.length + this.muitoalta.length;
        if (soma >= this.tamanho) {
            return true
        } else {
            return false
        }
    }
    public push(elemento: number, status: "muitobaixa" | "baixa" | "normal" | "alta" | "muitoalta"): void {
        if (this.cheia() == true) {
            console.log("nao inseriu(fila cheia)");
            return;
        } else {
            console.log("inseriu");
        }

        if (status == "muitobaixa") {
            this.muitobaixo.push(elemento);
        } else if (status == "baixa") {
            this.baixa.push(elemento);
        } else if (status == "muitoalta") {
            this.muitoalta.push(elemento);
        } else if (status == "normal") {
            this.normal.push(elemento);
        } else if (status == "alta") {
            this.alta.push(elemento);
        }

    }
    public pop(): number | null {
        if (this.muitoalta.length > 0) {
            return this.muitoalta.shift()!;
        }
        if (this.alta.length > 0) {
            return this.alta.shift()!;
        }
        if (this.normal.length > 0) {
            return this.normal.shift()!;
        }
        if (this.baixa.length > 0) {
            return this.baixa.shift()!;
        }
        if (this.muitobaixo.length > 0) {
            return this.muitobaixo.shift()!;
        }

        console.log("Fila vazia");
        return null;

    }
    public vazia(): boolean {
        const soma =
            this.muitobaixo.length + this.baixa.length + this.normal.length + this.alta.length + this.muitoalta.length;

        return soma === 0;
    }
    public elemento(): number {
        const elemento = this.muitobaixo.length + this.baixa.length + this.normal.length + this.alta.length + this.muitoalta.length;
        return elemento;
    }
    public proximoElemento(): number | null {
        if (this.muitoalta.length > 0) {
            return this.muitoalta[0];
        }
        if (this.alta.length > 0) {
            return this.alta[0];
        }
        if (this.normal.length > 0) {
            return this.normal[0];
        }
        if (this.baixa.length > 0) {
            return this.baixa[0];
        }
        if (this.muitobaixo.length > 0) {
            return this.muitobaixo[0];
        }

        console.log("Fila vazia");
        return null;

    }
    public limpar(): void {
        this.muitobaixo = [];
        this.baixa = [];
        this.normal = [];
        this.alta = [];
        this.muitoalta = [];
    }
}


