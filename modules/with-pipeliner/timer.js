/*
* @Author: mike
* @Date:   2016-08-31 09:50:55
* @Last Modified 2016-08-31
* @Last Modified time: 2016-08-31 10:50:38
*/

'use strict';

class Timer {
  constructor(app) {
    this._app = app

    this._workerQueue = app.get('worker-queue')

    if(this._app.config.timer)
      setInterval(this._triggerJob.bind(this), 2000)
  }

  _triggerJob(data) {
    this._workerQueue.task('doSomething', {})
  }
}

export default Timer