const dbController = require('../controllers/dbController.js');

const databaseApi = (app) => {
    // Get All Books
    app.get('/api/books', (req, res) => {
        dbController.getAllBooks(result => {
            res.json(result);
        });
    });

    // Add Book
    app.post('/api/books/add', (req, res) => {
        dbController.addBook(req.body, (result => {
            res.json(result);
        }));
    });

    // Delete Book
    app.delete('/api/books/delete/:bookId', (req, res) => {
        console.log("Delete Book");
    });
}

module.exports = databaseApi;