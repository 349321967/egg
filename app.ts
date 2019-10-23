import { Application, IBoot } from 'egg';

export default class FooBoot implements IBoot {
    private readonly app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    async configWillLoad() {
        console.info(this.app);
        console.info('FooBoot--configWillLoad');          
    }

    async configDidLoad() {
        console.info('FooBoot--configDidLoad'); 
    }

    async didLoad() {
        console.info('FooBoot--didLoad');
    }

    async willReady() {
        console.info('FooBoot--willReady');  
    }

    async didReady() {
        console.info('FooBoot--didReady');  
    }

    async serverDidReady() {
        console.info('FooBoot--serverDidReady');  
    }

    async beforeClose() {
        console.info('FooBoot--beforeClose'); 
    }

}
