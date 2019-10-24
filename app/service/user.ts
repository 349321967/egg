import { Service } from 'egg';

export default class UserService extends Service {
    public async list() {
        const userList = await this.ctx.model.User.findAll({ limit: 10 });
        return userList;
    }
}