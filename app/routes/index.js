import noteRoutes from './note_routes';
import menu from './menu';
import tables from './tables';
import staff from './staff';

export default function(app) {
  noteRoutes(app);
  menu(app);
  tables(app);
  staff(app);
};
