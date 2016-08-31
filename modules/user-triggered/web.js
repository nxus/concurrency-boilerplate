/*
* @Author: mike
* @Date:   2016-08-31 09:51:05
* @Last Modified 2016-08-31eich
* @Last Modified time: 2016-08-31 09:57:09
*/

'use strict';

class Web {
  constructor(app) {
    this._app = app

    this._router = app.get('router')
    this._workerQueue = app.get('worker-queue')

    this._router.route("/trigger", this._index.bind(this))
  }

  _index(req, res) {
    this._workerQueue.task('doSomething', {})
    return res.send('Job triggered')
  }
}

export default Web