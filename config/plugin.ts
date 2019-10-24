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
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};

export default plugin;
