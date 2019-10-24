import { Service } from 'egg';
import { QueryTypes } from 'sequelize';

export default class UserService extends Service {
    public async list() {
        const userList = await this.ctx.model.User.findAll({ limit: 10 });

        //自定义sql
        const dataList = await this.ctx.model.query("select * from users", { type : QueryTypes.SELECT });
        console.info(dataList);

        return userList;
    }
}