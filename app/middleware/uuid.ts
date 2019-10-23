import { Context, Application, EggAppConfig } from 'egg';

export default function uuidMiddleWare(options: EggAppConfig['uuid'], app: Application): any {
    return async (ctx: Context, next: () => Promise<any>) => {
        console.info(ctx);
        console.info(app);
        console.info(options.name);
        await next();
    };    
}
