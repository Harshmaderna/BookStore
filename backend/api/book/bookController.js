import book from "./bookModel.js";

const bookController = {
  createBook: async (req, res) => {
    try {
      const { name, price, category, title, image } = req.body;
      if (!name || !price || !category || !title || !image) {
        return res.status(400).json({ message: "All field are required" });
      }
      const newBook = await book.create({
        name,
        price,
        category,
        title,
        image,
      });
      console.log("Book created Successfully: ", newBook); 
      return res.status(200).json({
        message: "Book created Successfully.",
        book: newBook,
      });
    } catch (error) {
      console.log("Error creating book: ", error.message);
      return res.status(500).json({ message: "internal server error" });
    } 
  },
  getBook: async (req, res) => {
    try {
      const books = await book.findAll();
      if (!books) {
        return res.status(404).json({ message: "No books found" }); 
      }
      console.log("Books fetched: ", books);
      return res
        .status(200)
        .json({ messsage: "All books are fetched Successfully:", book: books });
    } catch (error) {
      console.log("Error geting a Book", error.message);
      return res.status(500).json({ message: "internal server error" });
    }
  },
  getBookById: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({ message: "Book id is required" });
      }
      const bookData = await book.findByPk(id);
      if (!bookData) {
        return res.status(404).json({ message: "Book not found" });
      }
      console.log("fetched books", bookData)
      return res.status(200).json({
        message: "Book fetched successfully.",
        book: bookData,
      });
    } catch (error) {
      console.log("Error find books", error.message);
    }
  },
};

export default bookController;
