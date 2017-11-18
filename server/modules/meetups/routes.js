import { Router } from 'express';

import * as MeetupController from './controller';
import { requireJwtAuth } from '../../utils/requireJWTAuth';

const routes = new Router();

routes.post('/meetups', requireJwtAuth, MeetupController.createMeetup);
routes.get('/meetups', MeetupController.getAllMeetups);

export default routes;
