/*
* @Author: mike
* @Date:   2016-08-31 09:50:51
* @Last Modified 2016-08-31
* @Last Modified time: 2016-08-31 10:09:27
*/

'use strict';

class Worker {
  constructor(app) {
    this._app = app

    this._workerQueue = app.get('worker-queue')
    this._pipeliner = app.get('pipeliner')

    if(this._app.config.worker) {
      this._workerQueue.worker('doSomething', this._doSomething.bind(this))
      this._pipeliner.task('pipeline', 'start', this._task1.bind(this))
      this._pipeliner.task('pipeline', 'start', this._task2.bind(this))
    }
  }

  _doSomething(data) {
    this._app.log.info('Worker working on something')
  }

  _task1(data) {
    this._app.log.info('Task 1')
  }

  _task2(data) {
    this._app.log.info('Task 2')
  }
}

export default Worker