<h1 align="center">PagePal</h1>

# About

<!-- TODO: Image -->

PagePal is a website where you can keep notes on books that you have read.

## Built With

* [![Node][Node.js]][node-url]
* [![Express][Express.js]][express-url]
* [![EJS][EJS]][ejs-url]
* [![PostgreSQL][Postgres]][postgres-url]

# Setup

Please be aware that the current iteration of PagePal is not meant to be used by others. It is simply a personal project meant to develop my own skills. Pursuant to this, installation instructions have been provided as an exercise.

## Prerequisites

* [Node.js][node-url]
* [PostgreSQL][postgres-url]

## Installation

1. Clone the repository
```sh
git clone https://github.com/PaxUltra/pagepal.git
```
2. From the project root, run `npm install`
3. Create a `.env` file, and enter the PostgreSQL password in it
```sh
DB_PASSWORD="<your-db-password>"
```

# Usage

## Launch PagePal on a Dev Server

From the project root, run the following:
```sh
node index.js
```

<!-- TODO: Add pictures and descriptions for how to use the site -->

# Future Improvements

- [ ] Add user authentication
- [ ] Add book search
- [ ] Improve styling
- [ ] Store book covers to avoid redundant API calls

# Contact

Adam Huffman - [LinkedIn](#) - adam.huffman.pro@gmail.com

Project Link: https://github.com/PaxUltra/pagepal

# Acknowledgments

* [Body Parser](https://github.com/expressjs/body-parser)
* [Dotenv](github.com/motdotla/dotenv)
* [Img Shields](https://shields.io)
* [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS AND IMAGES -->
<!-- https://shields.io/ -->
<!-- https://simpleicons.org/ -->
[Node.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org
[Express.js]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/
[EJS]: https://img.shields.io/badge/ejs-B4CA65?style=for-the-badge&logo=ejs&logoColor=black
[ejs-url]: https://ejs.co/
[Postgres]: https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[postgres-url]: https://www.postgresql.org/
