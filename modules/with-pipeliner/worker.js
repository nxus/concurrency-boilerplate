/*
* @Author: mike
* @Date:   2016-08-31 09:50:51
* @Last Modified 2016-08-31
* @Last Modified time: 2016-08-31 12:07:53
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
    return this._pipeliner.run('pipeline', {thing: {}})
    this._app.log.info('Worker working on something')
  }

  _task1(data) {
    data.thing = false
    this._app.log.info('Task 1')
    throw new Error("Bad Option")
  }

  _task2(data) {
    if(!data.thing) return
    this._app.log.info('Task 2')
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000)
    })
  }
}

export default Worker