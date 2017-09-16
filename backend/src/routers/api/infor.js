import 'babel-polyfill';
import { Router } from 'express';
const router = Router();

router.get('/',(req, res) => {
    const valAbd = abd();
    console.log('-----------------', valAbd);
    res.end('api inFOr');
});

const abd = async () => {
    const valPro = await pro('test information');
    console.log(valPro);
    return valPro;
}
const pro = (test) => {
    return Promise.resolve(test);
}
router.get('/abc',(req, res) => {
    res.end('api inFOr Abc');
});

export default router;