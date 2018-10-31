import noteRoutes from './note_routes';
import menu from './menu';
import tables from './tables';
import staff from './staff';

export default function(app, db) {
  noteRoutes(app, db);
  menu(app, db);
  tables(app, db);
  staff(app, db);
  // Тут, позже, будут и другие обработчики маршрутов 
};
