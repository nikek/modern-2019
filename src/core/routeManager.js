const routes = {};

function registerRoute(path, element) {
  if (routes[path]) {
    throw Error('Route path already registered: ', path);
    return;
  }
  routes[path] = element;
}

export default { registerRoute, routes };
