const routes = (handler) => [
    {
      method: 'POST',
      path: '/Postnotes',
      handler: handler.postNoteHandler,
    },
    {
      method: 'GET',
      path: '/Getnotes',
      handler: handler.getNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: handler.getNoteByIdHandler,
    },
    {
      method: 'PUT',
      path: '/Editnotes/{id}',
      handler: handler.putNoteByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/Delnotes/{id}',
      handler: handler.deleteNoteByIdHandler,
    },
  ];
  
  module.exports = routes;
  