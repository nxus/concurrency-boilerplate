/*
* @Author: mike
* @Date:   2016-08-31 09:50:44
* @Last Modified 2016-08-31
* @Last Modified time: 2016-08-31 10:05:30
*/

'use strict';

import Worker from './worker'
import Timer from './timer'

export default (app) => {
  if(app.config.pipeliner) {
    new Worker(app)
    new Timer(app)
  }
}