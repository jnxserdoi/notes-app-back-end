const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const notesHandler = new NotesHandler(service, validator);
    server.route(routes(notesHandler));
  },
};
// /* eslint-disable camelcase */

// // exports.shorthands = undefined;

// exports.up = (pgm) => {
//   pgm.createTable('notes', {
//     id: {
//       type: 'VARCHAR(50)',
//       primaryKey: true,
//     },
//     title: {
//       type: 'TEXT',
//       notNull: true,
//     },
//     body: {
//       type: 'TEXT',
//       notNull: true,
//     },
//     tags: {
//       type: 'TEXT[]',
//       notNull: true,
//     },
//     created_at: {
//       type: 'TEXT',
//       notNull: true,
//     },
//     updated_at: {
//       type: 'TEXT',
//       notNull: true,
//     },
//   });
// };

// exports.down = (pgm) => {
//   pgm.dropTable('notes');
// };
