import HomePage from './HomePage';
import { registerRoute } from '/core/app/appRouter';

export default {
  init() {
    registerRoute('/', HomePage);
  },
};
