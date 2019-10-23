import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  i18n: {
    enable: true,
    package: 'egg-i18n',
  },
};

export default plugin;
