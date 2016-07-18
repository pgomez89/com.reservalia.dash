const express = require('express');
const path = require('path');
const router = express.Router();


/**
 * Controllers (route handlers).
 */
import { indexController, availabilityController, loginController, authController, logoutController } from './controllers';


/**
 * Application endpoints
 */
router.get('/', indexController );


//LOGIN

router.get( '/login', loginController );

router.get('/logout', logoutController );

router.post('/auth', authController );

router.get('/health-check', (req, res) => { res.send({status: 'ok'}); });

router.get('/availability', indexController );


/**
 * API Endpoints
 */

router.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, './public/images', 'favicon.ico')));
router.get('/loading.gif', (req, res) => res.sendFile(path.join(__dirname, './public/images', 'loading.gif')));

router.get('/availability/:startDate/:endDate', availabilityController );

module.exports = router;

