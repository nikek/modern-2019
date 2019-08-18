export { default as home } from '/plugins/home/home.plugin';
export { default as about } from '/plugins/about/about.plugin';
export { default as service } from '/plugins/service/service.plugin';
export {
  default as serviceOverview,
} from '/plugins/service-overview/service-overview.plugin';
export { default as capacity } from '/plugins/capacity/capacity.plugin';
export { default as website } from '/plugins/website/website.plugin';
export {
  default as websiteOverview,
} from '/plugins/website-overview/website-overview.plugin';
export { default as apollo } from '/plugins/apollo/apollo.plugin';

/*
plugins

## Routing
A plugin can register routes on another plugin, most often to the app plugin router,
which is the root router. A plugin gets routing capabilities by setting the `router`
field to the return object of `getRoutingCapabilites()`

### Nested Routing
But for subroutes a plugin will register routes to a subrouter. For example
ServicePlugin register a route `/service*` to app.router and presents a LayoutComponent
with another router inside it. The CapacityPlugin could then register a route
`/capacity` to servicePlugin.router in order for it to be shown on `/service/capacity`

*/
