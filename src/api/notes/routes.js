/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
const routes = (handler) => [
    {
      method: 'POST',
      path: '/notes',
      handler: handler.postNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: handler.getNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: handler.getNoteByIdHandler,
    },
    {
      method: 'PUT',
      path: '/Putnotes/{id}',
      handler: handler.putNoteByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: handler.deleteNoteByIdHandler,
    },
  ];
  
  module.exports = routes;
  