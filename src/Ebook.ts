export class Ebook {
    constructor(
        public titulo: string,
        public autor: string,
        public isbn: string,
        public ContagemPaginas: number,
    ) {}
    displayDetails(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Número de Páginas: ${this.ContagemPaginas}`);
        console.log('--------------------------');
    }
}