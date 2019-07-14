import HomePage from './HomePage';

export default function homePlugin(app) {
  app.registerRoute('/', HomePage);
}
