const livros = "livro1, livro2, livro3".split(", ")
const maislivros = "livro4, livro5, livro6".split(", ")

console.log(livros)

livros.push(...maislivros)

console.log(livros)
