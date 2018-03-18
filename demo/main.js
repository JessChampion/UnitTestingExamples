import Vue from 'vue';

import DemoCartApp from './DemoCartApp';

Vue.config.productionTip = false;

Vue.use(DemoCartApp);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { DemoCartApp },
  template: '<DemoCartApp />'
});
