const Book = require("./book");
async function  saveBook (req, res)  { 
    const { title, author, publishedDate, numberOfPages } = req.body;
  
    try {
      const newBook = await Book.create({
        title,
        author,
        publishedDate,
        numberOfPages,
      });
      res.status(201).json(newBook); // Return the created book with a 201 status
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while saving the book." });
    }
}
async function  listAllBooks (req, res) {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving books.' });
    }
}

 async function  getBookById (req, res)  {
    const { id } = req.params;

    try {
        const book = await Book.findByPk(id); // Find the book by primary key (ID)
        
        if (!book) {
            return res.status(404).json({ error: 'Book not found.' }); // Return 404 if book not found
        }
        
        res.json(book); // Return the book details as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving the book.' });
    }
};

async function updateBook(req, res)  {
    const { id } = req.params;
    const { title, author, publishedDate, numberOfPages } = req.body;
    try {
        const book = await Book.findByPk(id); 
        if (!book) {
            return res.status(404).json({ error: 'Book not found.' }); 
        }
        if (title) book.title = title;
        if (author) book.author = author;
        if (publishedDate) book.publishedDate = publishedDate;
        if (numberOfPages) book.numberOfPages = numberOfPages;

        await book.save(); 

        res.json(book); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the book.' });
    }
}

async function deleteBook(req, res)  {
    const { id } = req.params;

    try {
        const book = await Book.findByPk(id); 
        if (!book) {
            return res.status(404).json({ error: 'Book not found.' }); 
        }
        await book.destroy(); 
        res.json({ message: 'Book successfully deleted.' }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the book.' });
    }
}
module.exports = { saveBook,listAllBooks,getBookById,updateBook,deleteBook };