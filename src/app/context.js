import { getProviderCapabilities } from '/shared/providerManager';
import { getRoutingCapabilities } from '/shared/routeManager';

export default {
  router: getRoutingCapabilities(),
  providers: getProviderCapabilities(),
};
