/*
* @Author: mike
* @Date:   2016-08-31 09:51:00
* @Last Modified 2016-08-31
* @Last Modified time: 2016-08-31 09:56:32
*/

'use strict';

class Worker {
  constructor(app) {
    this._app = app

    this._workerQueue = app.get('worker-queue')

    if(this._app.config.worker)
      this._workerQueue.worker('doSomething', this._doSomething.bind(this))
  }

  _doSomething(data) {
    this._app.log.info('Worker working on something')
  }
}

export default Worker