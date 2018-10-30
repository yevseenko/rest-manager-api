import noteRoutes from './note_routes';
import menu from './menu';

export default function(app, db) {
  noteRoutes(app, db);
  menu(app, db);
  // Тут, позже, будут и другие обработчики маршрутов 
};
