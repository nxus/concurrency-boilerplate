/*
* @Author: mike
* @Date:   2016-08-31 09:51:05
* @Last Modified 2016-08-31
* @Last Modified time: 2016-08-31 12:05:01
*/

'use strict';

class Web {
  constructor(app) {
    this._app = app

    this._router = app.get('router')
    this._workerQueue = app.get('worker-queue')

    if(app.config.web)
      this._router.route("/trigger", this._index.bind(this))
  }

  _index(req, res) {
    this._workerQueue.task('doSomething', 1)
    // this._workerQueue.task('doSomething', 2)
    // this._workerQueue.task('doSomething', 3)
    // this._workerQueue.task('doSomething', 4)
    // this._workerQueue.task('doSomething', 5)
    // this._workerQueue.task('doSomething', 6)
    return res.send('Job triggered')
  }
}

export default Web