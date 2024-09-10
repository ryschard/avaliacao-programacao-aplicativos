import { Livro } from "./Livro";
import { Ebook } from "./Ebook";


function main() {
    const MeuLivro = new Livro('o senhor dos aneis', 'J.R.R. Tolkien', '978-0261102385');

    MeuLivro.displayDetails
}


main(); {
    function main() {

        const MeuEbook = new Ebook('a arte da guerra', 'sun tzu', '978-8531602574', 200);

        MeuEbook.displayDetails();
    }
}

main();