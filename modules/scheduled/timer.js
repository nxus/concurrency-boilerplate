/*
* @Author: mike
* @Date:   2016-08-31 09:50:55
* @Last Modified 2016-08-31
* @Last Modified time: 2016-08-31 11:16:16
*/

'use strict';

import _ from 'underscore'

class Timer {
  constructor(app) {
    this._app = app

    this._workerQueue = app.get('worker-queue')

    this._runningJobs = 0

    if(this._app.config.timer) {
      setInterval(() => {
        this._runningJobs++
        this._workerQueue.task("doSomething", {some: 'data'})
      }, _.random(1000, 5000))

      this._workerQueue.worker('completed', () => {
        this._runningJobs--
        this._app.log.info("Running workers:", this._runningJobs)
      })
    }

  }

  _triggerJob(data) {
    this._workerQueue.task('doSomething', {})
  }
}

export default Timer