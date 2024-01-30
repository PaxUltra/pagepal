import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  password: "password",
  database: "pagepal",
  port: 5432,
});

db.connect();

app.get("/", async (req, res) => {
  const books = (await db.query("SELECT * FROM books ORDER BY id ASC")).rows;

  res.render("index.ejs", { bookList: books });
});

app.get("/book/:id", async (req, res) => {
  const book = (
    await db.query("SELECT * FROM books WHERE id = " + req.params.id)
  ).rows[0];

  res.render("book.ejs", { book: book });
});

app.get("/new-book", (req, res) => {
  res.render("book_form.ejs");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
