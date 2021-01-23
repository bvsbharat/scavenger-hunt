import { App } from "vue";
import faker from "./faker";
import helper from "./helper";
import lodash from "./lodash";

export default (app: App): void => {
  app.use(faker);
  app.use(helper);
  app.use(lodash);
};
