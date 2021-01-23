import { App } from "vue";
import _ from "lodash";

const install = (app: App): void => {
  app.config.globalProperties.$_ = _;
};

export { install as default };
