/*
* @Author: mike
* @Date:   2016-08-31 09:50:51
* @Last Modified 2016-08-31
* @Last Modified time: 2016-08-31 11:15:14
*/

'use strict';

import _ from 'underscore'

class Worker {
  constructor(app) {
    this._app = app

    this._workerQueue = app.get('worker-queue')

    if(this._app.config.worker)
      this._workerQueue.worker('doSomething', this._doSomething.bind(this))
  }

  _doSomething(data) {
    this._app.log.info('Worker working on something')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._app.log.info('Worker completed')
        this._workerQueue.task('completed', {})
        resolve()
      }, _.random(1000, 5000))
    })
  }
}

export default Worker