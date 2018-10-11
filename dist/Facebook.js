'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Method = undefined;

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _debug = require('../node_modules/debug/dist/debug');

var _debug2 = _interopRequireDefault(_debug);

var _LoginStatus = require('./constants/LoginStatus');

var _LoginStatus2 = _interopRequireDefault(_LoginStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = (0, _debug2.default)('react-facebook:facebook');

const Method = exports.Method = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete'
};

class Facebook {
  constructor(options = {}) {
    this.options = (0, _extends3.default)({
      domain: 'connect.facebook.net',
      version: 'v3.1',
      cookie: false,
      status: false,
      xfbml: false,
      language: 'en_US',
      frictionlessRequests: false
    }, options);

    if (!this.options.appId) {
      throw new Error('You need to set appId');
    }

    if (!this.options.wait) {
      this.init();
    }
  }

  getAppId() {
    return this.options.appId;
  }

  init() {
    var _this = this;

    return (0, _asyncToGenerator3.default)(function* () {
      if (_this.loadingPromise) {
        return _this.loadingPromise;
      }

      _this.loadingPromise = new Promise(function (resolve) {
        const { options } = _this;

        window.fbAsyncInit = function () {
          window.FB.init({
            appId: options.appId,
            version: options.version,
            cookie: options.cookie,
            status: options.status,
            xfbml: options.xfbml,
            frictionlessRequests: _this.frictionlessRequests
          });

          resolve(window.FB);
        };

        const fjs = window.document.getElementsByTagName('script')[0];
        if (!fjs) {
          // log('Script tag does not exists in the DOM');
          return;
        }

        if (window.document.getElementById('facebook-jssdk')) {
          return;
        }

        const js = window.document.createElement('script');
        js.id = 'facebook-jssdk';
        js.async = true;
        js.src = `https://${options.domain}/${options.language}/sdk.js`;

        fjs.parentNode.insertBefore(js, fjs);
      });

      return _this.loadingPromise;
    })();
  }

  process(method, before = [], after = []) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const fb = yield _this2.init();

      return new Promise(function (resolve, reject) {
        fb[method](...before, function (response) {
          if (!response) {
            reject(new Error('Response is undefined'));
          } else if (response.error) {
            const { code, type, message } = response.error;

            const error = new Error(message);
            error.code = code;
            error.type = type;

            reject(error);
          } else {
            resolve(response);
          }
        }, ...after);
      });
    })();
  }

  ui(options) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this3.process('ui', [options]);
    })();
  }

  api(path, method = Method.GET, params = {}) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this4.process('api', [path, method, params]);
    })();
  }

  login(opts = null) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this5.process('login', [], [opts]);
    })();
  }

  logout() {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this6.process('logout');
    })();
  }

  getLoginStatus() {
    var _this7 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this7.process('getLoginStatus');
    })();
  }

  getAuthResponse() {
    var _this8 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this8.process('getAuthResponse');
    })();
  }

  getTokenDetail() {
    var _this9 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const response = yield _this9.getLoginStatus();
      if (response.status === _LoginStatus2.default.CONNECTED && response.authResponse) {
        return response.authResponse;
      }

      throw new Error('Token is undefined');
    })();
  }

  getProfile(params) {
    var _this10 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this10.api('/me', Method.GET, params);
    })();
  }

  getTokenDetailWithProfile(params) {
    var _this11 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const tokenDetail = yield _this11.getTokenDetail();
      const profile = yield _this11.getProfile(params);

      return {
        profile,
        tokenDetail
      };
    })();
  }

  getToken() {
    var _this12 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const authResponse = yield _this12.getTokenDetail();
      return authResponse.accessToken;
    })();
  }

  getUserId() {
    var _this13 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const authResponse = yield _this13.getTokenDetail();
      return authResponse.userID;
    })();
  }

  sendInvite(to, options) {
    var _this14 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this14.ui((0, _extends3.default)({
        to,
        method: 'apprequests'
      }, options));
    })();
  }

  postAction(ogNamespace, ogAction, ogObject, ogObjectUrl, noFeedStory) {
    var _this15 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      let url = `/me/${ogNamespace}:${ogAction}?${ogObject}=${encodeURIComponent(ogObjectUrl)}`;

      if (noFeedStory === true) {
        url += '&no_feed_story=true';
      }

      return _this15.api(url, Method.POST);
    })();
  }

  getPermissions() {
    var _this16 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const response = yield _this16.api('/me/permissions');
      return response.data;
    })();
  }

  hasPermissions(permissions) {
    var _this17 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const usersPermissions = yield _this17.getPermissions();

      const findedPermissions = permissions.filter(function (p) {
        const currentPermission = usersPermissions.find(function (row) {
          const { permission, status } = row;
          return status === 'granted' && permission === p;
        });

        return !!currentPermission;
      });

      return findedPermissions.length === permissions.length;
    })();
  }

  subscribe(eventName, callback) {
    var _this18 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const fb = yield _this18.init();
      fb.Event.subscribe(eventName, callback);
    })();
  }

  unsubscribe(eventName, callback) {
    var _this19 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const fb = yield _this19.init();
      fb.Event.unsubscribe(eventName, callback);
    })();
  }

  parse(parentNode) {
    var _this20 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const fb = yield _this20.init();

      if (typeof parentNode === 'undefined') {
        fb.XFBML.parse();
      } else {
        fb.XFBML.parse(parentNode);
      }
    })();
  }

  getRequests() {
    var _this21 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this21.api('/me/apprequests');
    })();
  }

  removeRequest(requestID) {
    var _this22 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this22.api(requestID, Method.DELETE);
    })();
  }

  setAutoGrow() {
    var _this23 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      const fb = yield _this23.init();
      fb.Canvas.setAutoGrow();
    })();
  }

  paySimple(product, quantity = 1) {
    var _this24 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this24.ui({
        method: 'pay',
        action: 'purchaseitem',
        product,
        quantity
      });
    })();
  }

  pay(product, options) {
    var _this25 = this;

    return (0, _asyncToGenerator3.default)(function* () {
      return _this25.ui((0, _extends3.default)({
        method: 'pay',
        action: 'purchaseitem',
        product
      }, options));
    })();
  }
}

exports.default = Facebook; /*
                              sendToFriends: function(options, callback) {
                                if(!options) {
                                  options = {};
                                }
                            
                                options.method = 'send';
                            
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.ui(options, function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              sendMessage: function(message, name, caption, description, url, imgUrl, callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.ui({
                                    method: 'stream.publish',
                                    message: message,
                                    attachment: {
                                      name: name,
                                      caption: caption,
                                      description: description,
                                      href: url,
                                      media:[{
                                        type: 'image',
                                        src:  imgUrl,
                                        href: url
                                      }]
                                    },
                                    action_links: [{
                                      text: 'Code',
                                      href: url
                                    }],
                                    user_prompt_message: message
                                  },
                                  function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              sendInviteForm: function(options, callback) {
                                if(typeof options === 'function') {
                                  callback = options;
                                  options = {};
                                }
                            
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  options.method = options.method || 'apprequests';
                            
                            
                                  FB.ui(options, function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              checkPageLike: function(pageID, callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  fbApi.getUserID(function(err, userID) {
                                    if(err) {
                                      return callback(err);
                                    }
                            
                                    var fqlQuery = `SELECT uid FROM page_fan WHERE page_id = ${pageID} and uid = ${userID}`;
                                    var query = FB.Data.query(fqlQuery);
                            
                                    query.wait(function(rows) {
                                      if (rows.length === 1 && rows[0].uid === userID) {
                                        callback(null, true, query);
                                      }
                                      else {
                                        callback(null, false, query);
                                      }
                                    });
                                  });
                                });
                              },
                            
                              sendMessageToFriend: function (friendID, link, callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.ui({
                                    to: friendID,
                                    method: 'send',
                                    link: link
                                  }, function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              _prepareUsers: function(data) {
                                var users=[];
                            
                                for(var index in data) {
                                  var userData=data[index];
                            
                                  var user = {
                                    provider_uid: 'facebook'+'_'+userData.uid,
                                    provider: 'facebook',
                                    id: userData.uid,
                                    name: userData.name,
                                    first_name: userData.first_name,
                                    last_name: userData.last_name,
                                    status: (userData.status!==null) ? userData.status : null,
                                    image: '//graph.facebook.com/'+userData.uid+'/picture?'
                                  };
                            
                                  users.push(user);
                                }
                            
                                return users;
                              },
                            
                              getUserList: function(callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.api('fql', {
                                    q: `
                                      SELECT uid, name, first_name, last_name, online_presence, status
                                      FROM user
                                      WHERE uid IN
                                        ( SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY name
                                    `,
                                  }, function (response)
                                  {
                                    var users = fbApi._prepareUsers(response.data);
                                    callback(null, users, response);
                                  });
                                });
                              },
                            
                              postFeed: function(options, callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  options.method='feed';
                            
                                  FB.ui(options, function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              //need publish_stream
                              createAlbum: function(name, description, callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.api('/me/albums', 'post', {
                                    name: name,
                                    description: description
                                  },function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              //need publish_stream
                              addImageToAlbum: function(albumID, imageURL, message, callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.api('/'+albumID+'/photos', 'post', {
                                    message: message,
                                    url: imageURL
                                  }, function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              //'user_photos'
                              getAlbums: function(callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.api('/me/albums', function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              //'user_photos'
                              getAlbumPhotos: function(albumID, callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.api('/'+albumID+'/photos', function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              //'user_photos'
                              getAlbumCoverPicture: function(albumID, callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.api('/'+albumID+'/picture', function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              //'publish_stream'
                              postPhoto: function(photoUrl, message, callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.api('/me/photos', 'post', {
                                    message: message,
                                    url: photoUrl
                                  },function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              },
                            
                              getPageInfo: function(callback) {
                                this.afterLoad(function(err, fbApi) {
                                  if(err) {
                                    return callback(err);
                                  }
                            
                                  FB.Canvas.getPageInfo(function(response) {
                                    fbApi._callCallbackByResponse(callback, response);
                                  });
                                });
                              }
                            */
//# sourceMappingURL=Facebook.js.map