import envDev from './development';
import envPro from './production';
const environment = process.env.DEV || 'development';

let configDefault = envPro;
if (environment === 'development') {
    configDefault = envDev;
}
export default configDefault;