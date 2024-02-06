import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import 'dotenv/config'

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  password: process.env.DB_PASSWORD,
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

app.post("/create-book", async (req, res) => {
  const values = [req.body.title, req.body.author, req.body.olid, req.body.description, req.body.notes, `https://covers.openlibrary.org/b/olid/${req.body.olid}-L.jpg`, req.body.rating]
  await db.query('INSERT INTO books (title, author, olid, description, notes, cover, rating) VALUES ($1, $2, $3, $4, $5, $6, $7)', values);
  res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
  const value = [req.params.id];
  await db.query('DELETE FROM books WHERE id = $1', value);

  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  const book = (
    await db.query("SELECT * FROM books WHERE id = " + req.params.id)
  ).rows[0];

  res.render("book_form.ejs", { book: book });
});

app.post("/edit/:id", async (req, res) => {
  const values = [req.body.title, req.body.author, req.body.olid, req.body.description, req.body.notes, `https://covers.openlibrary.org/b/olid/${req.body.olid}-L.jpg`, req.body.rating, req.params.id];
  await db.query('UPDATE books SET title=$1, author=$2, olid=$3, description=$4, notes=$5, cover=$6, rating=$7 WHERE id=$8;', values);

  res.redirect(`/book/${req.params.id}`)
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
