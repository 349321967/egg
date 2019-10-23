import { Context } from 'egg';

export default {
    isIOS(): boolean {
        const iosReg = /iphone|ipad|ipod/i;
        const ctx = this as Context;
        return iosReg.test(ctx.get('user-agent'));
    },

};
