/*
* @Author: mike
* @Date:   2016-08-31 09:50:44
* @Last Modified 2016-08-31eich
* @Last Modified time: 2016-08-31 09:56:06
*/

'use strict';

import Worker from './worker'
import Timer from './timer'

export default (app) => {
  if(app.config.scheduled) {
    new Worker(app)
    new Timer(app)
  }
}