import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    this.app.logger.info('Hello,jack.');
    this.logger.info('hello,jjjjj' + ctx.isIOS());

    const a = {
      a: 1,
      b: 2,
    };

    const b = {
      c: 3,
      d: 4,
    };

    const c = {
      ...a,
      ...b,
    };

    console.info(c);
    console.info(ctx.__('Email'));

    ctx.body = await ctx.service.test.sayHi('egg');
    // ctx.body = ctx.__('Email');
  }
}
