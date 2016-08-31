/*
* @Author: mike
* @Date:   2016-08-31 09:50:40
* @Last Modified 2016-08-31eich
* @Last Modified time: 2016-08-31 09:57:05
*/

'use strict';

import Worker from './worker'
import Web from './web'

export default (app) => {
  if(app.config.triggered) {
    new Worker(app)
    new Web(app)
  }
}