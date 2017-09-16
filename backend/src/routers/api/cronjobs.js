import 'babel-polyfill';
import { Router } from 'express';
import cCurrenciesd , * as cCurrencies from './../../controllers/cronjobs/currencies';
const router = Router();

router.get('/',(req, res) => {
  res.end(cCurrencies.abd());
});

router.get('/getcurrency',(req, res) => {
  res.end(cCurrenciesd());
});

export default router;