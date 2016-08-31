/*
* @Author: mike
* @Date:   2016-08-31 09:48:39
* @Last Modified 2016-08-31
* @Last Modified time: 2016-08-31 09:51:21
*/

'use strict';

class Web {
  constructor(app) {
    this._app = app

    this._router = app.get('router')

    this._router.route("/web", this._index.bind(this))
  }

  _index(req, res) {
    return res.send('This is the index '+process.env.DYNO)
  }
}

export default Web