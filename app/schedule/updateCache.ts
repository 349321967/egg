import { Subscription } from 'egg';

export default class UpdateCache extends Subscription {
    static get schedule() {
        return {
            interval: '1s',
            type: 'all',
            immediate: true,
            disable : true,
        };
    }

    async subscribe() {
        console.info('jack....');
        const result = await this.app.curl('https://registry.npm.taobao.org/egg/latest', { dataType : 'json' });
        this.app.logger.info(result);
    }
}
