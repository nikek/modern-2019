import home from '/plugins/home/home.plugin';
import about from '/plugins/about/about.plugin';
import service from '/plugins/service/service.plugin';
import serviceOverview from '/plugins/service/plugins/service-overview/service-overview.plugin';
import capacity from '/plugins/service/plugins/capacity/capacity.plugin';

export default {
  home,
  about,
  service,
  // Service sub plugins
  serviceOverview,
  capacity,
};
