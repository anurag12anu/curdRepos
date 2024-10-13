const router = require("express").Router();
const bookmodel = require("../model/booksModel");

router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookmodel(data);
    await newBook.save().then(() => {
      res
        .status(200)
        .json({ message: "books are add in databasae successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/getbook", async (req, res) => {
  let books;
  try {
    books = await bookmodel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
});
router.get("/getbook/:id", async (req, res) => {
  let books;
  const id = req.params.id;
  try {
    books = await bookmodel.findById(id);
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
});
router.put("/updateBook/:id", async (req, res) => {
  const id = req.params.id;
  const { booksname, description, auther, prise } = req.body;

  let book;
  try {
    book = await bookmodel.findByIdAndUpdate(id, {
      booksname,
      description,
      auther,
      prise,
    });
    await book.save().then(() => {
      res.status(200).json(book);
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const book = await bookmodel.findByIdAndDelete(id);
    if (book) {
      res.status(200).json({ message: "This book is deleted successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the book" });
  }
});
module.exports = router;
