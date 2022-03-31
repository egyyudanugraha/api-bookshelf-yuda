const { addBooks, getBooks, getDetailBook, updateBook, deleteBook } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBook,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBook,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
  },
];

module.exports = routes;
