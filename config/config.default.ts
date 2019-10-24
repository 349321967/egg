import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571377079062_6355';

//   config.security = {
//     csrf : {
//       enable: false,
//     }
//  }

  // add your egg config in here
  config.middleware = [ 'uuid' ];

  config.i18n = {
    // 默认语言，默认 "en_US"
    defaultLocale: 'zh-CN',
    // URL 参数，默认 "locale"
    queryField: 'locale',
    // Cookie 记录的 key, 默认："locale"
    cookieField: 'locale',
    // Cookie 默认 `1y` 一年后过期， 如果设置为 Number，则单位为 ms
    cookieMaxAge: '1y',
  };

  // mysql
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    uuid: {
      name: 'ebuuid',
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
