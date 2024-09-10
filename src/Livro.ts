export class Livro {
    constructor(
        public titulo: string,
        public autor: string,
        public isbn: string,
    ) {}

    displayDetails(): void {
        console.log(`titulo: ${this.titulo}`);
        console.log(`autor: ${this.autor}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log('---------------------------');

    }
}
