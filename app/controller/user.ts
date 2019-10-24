import { Controller } from 'egg';

export default class UserController extends Controller {
    async list() {
        const userList = await this.service.user.list();
        this.ctx.body = userList;
    }
}
