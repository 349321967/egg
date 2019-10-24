import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.all('/', controller.home.index);
  router.get('/user/list', controller.user.list);
};
