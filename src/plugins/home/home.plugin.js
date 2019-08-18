import HomePage from './HomePage';
import { registerRoute } from '/app/app.plugin';

export default {
  init() {
    registerRoute('/', HomePage);
  },
};
