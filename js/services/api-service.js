'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
	'use strict';
	var fb = new Firebase('https://pharzone.firebaseio.com/v2/');

	var Api = (function () {
		function Api($firebaseObject, $firebaseArray, $firebaseAuth, $rootScope) {
			var _this = this;

			_classCallCheck(this, Api);

			var db = { users: {} },
			    methods = {},
			    models = {},
			    state = {},
			    authObj = $firebaseAuth(fb);

			this.data = { object: {}, array: {} };
			this.methods = {};
			this.models = {};
			this.state = {};

			this.auth = authObj.$getAuth();
			$rootScope.unauth = function () {
				console.log('logging out');
				var authObj = $firebaseAuth(fb);
				var userIs = authObj.$getAuth();
				console.log('userIs', userIs);
				authObj.$unauth();
				Api.state.user = authObj.$getAuth();
				console.log('userIsnt', userIs);
			};
			if (this.auth) {
				console.log("Logged in as:", this.auth.uid);
				state.user = this.auth;
			} else {
				console.log("Logged out");
			}

			/**/
			/**/
			/*      DATA     */
			/**/
			/**/

			db.obj = $firebaseObject(fb).$loaded().then(function (data) {
				_this.data.object = data;
			});
			db.arr = $firebaseArray(fb).$loaded().then(function (data) {
				_this.data.array = data;
			});

			/**/
			/**/
			/*      Methods     */
			/**/
			/**/

			methods.save = function (args) {
				console.log('saving..', args);
				_this.data.object[args.loc] = args.obj;
				_this.data.object.$save();
			};
			methods.add = function (args) {
				console.log('add..');
				angular.forEach(args, function (arg, key) {
					console.log(key, arg);
				});
			};
			methods.remove = function (args) {
				console.log('remove..');
				angular.forEach(args, function (arg, key) {
					console.log(key, arg);
				});
			};
			methods.login = function (args) {
				console.log("Logging in as:", args.email + ': ' + args.pass);
				var authObj = $firebaseAuth(fb);
				authObj.$authWithPassword({
					email: args.email,
					password: args.pass
				}).then(function (authData) {
					console.log("Logged in as:", authData.uid);
					state.user = authData;
				})['catch'](function (error) {
					console.error("Authentication failed:", error);
				});
			};
			methods.logout = function (args) {
				console.log('logout..');
				angular.forEach(args, function (arg, key) {
					console.log(key, arg);
				});
			};
			/*
   			methods.register = (args)=>{
   				console.log('registering user', args);
   				console.log('getting auth', authObj);
   				authObj.$createUser({
   					email: args.email,
   					password: args.pass
   				}).then(function(userData) {
   					console.log('user registered, making user object for db');
   					var userObject = {};
   					angular.forEach(args, (arg, key)=>{
   						arg.length === 0 ? 'arg is undefined, skipping'
   							: userObject[key] = arg, console.log('reading args in object ', userObject[arg]);
   					});
   					userObject['uid'] = userData.uid;
   					console.log('userObject',userObject);
   					methods.save({loc:'users', obj:userObject});
   					this.data[userData.uid] = userObject;
   					console.log('db', this.data);
   					this.data.object.$save().then(()=>{
   						// Indexing users by email
   						console.log('indexing...');
   						var usersIndex = data.object.index.users;
   						var cleanEmail = args.email.replace('.','`');
   						usersIndex[cleanEmail] = userData.uid;
   						usersIndex.$save();
   						console.log(usersIndex + userData.uid + " created successfully!");
   					});
   
   					return authObj.$authWithPassword({
   						email: args.email,
   						password: args.pass
   					});
   				}).then(function(authData) {
   					console.log("Logged in as:", authData.uid);
   					$rootScope.user = authData.uid;
   				}).catch(function(error) {
   					console.error("Error: ", error);
   				});
   			};
   */
			methods.register = function (args) {
				console.log('registering user', args.email + ': ' + args.pass);
				var authObj = $firebaseAuth(fb);
				var timestamp = Date.now();
				authObj.$createUser({
					email: args.email,
					password: args.pass
				}).then(function (userData) {
					userData.details = {};
					var dbObj = $firebaseObject(fb.child('users')).$loaded().then(function (data) {
						angular.forEach(args, function (arg, key) {
							console.log('arg for userData details object on user creation ' + key, arg);
							userData.details[key] = arg;
						});
						userData.details.pass = 'Nothing to see here.';
						// Create initial state property on new user.
						userData['state'] = {};
						userData['state'][timestamp] = state;
						data[userData.uid] = userData;
						data.$save().then(function () {
							// Indexing users by email
							console.log('indexing...');
							var dbIndex = $firebaseObject(fb.child('index/users')).$loaded().then(function (data) {
								var cleanEmail = args.email.replace('.', '`');
								data[cleanEmail] = userData.uid;
								data.$save();
							});
						});
						console.log("User " + userData.uid + " created successfully!");
					});

					return authObj.$authWithPassword({
						email: args.email,
						password: args.pass
					});
				}).then(function (authData) {
					console.log("Logged in as:", authData.uid);
					state.user = authData;
				})['catch'](function (error) {
					console.error("Error: ", error);
				});
			};
			methods.checkout = function (args) {
				console.log('checkout..');
				angular.forEach(args, function (arg, key) {
					console.log(key, arg);
				});
			};
			methods.total = function (args) {
				console.log('checking total..');
				var total = 0;
				angular.forEach(args, function (arg) {
					total += arg.total;
				});
				return total;
			};
			methods.selected = function (args, obj) {
				console.log('Selecting all..', args);
				var selection = {};
				angular.forEach(args, function (arg, key) {
					arg === true ? selection[key] = obj[key] : console.log('false selection');
				});
				console.log(selection);
				return selection;
			};
			methods.changeData = function (args, obj) {
				console.log('Changing ' + args + ' data...', obj);
				obj[2] = { id: 'abcdefsad', user: 'snorgan', name: 'vasaline', trueName: 'methyl (1R,2R,3S,5S)-3- (benzoyloxy)-8-methyl-8-azabicyclo[3.2.1] octane-2-carboxylate', price: 34, details: 'peppy stuff', form: 'powder', images: ['https://www.cibconline.cibc.com/olb/img/TravelInsurance-Spotlight.jpg'] };
				console.log('Changed ' + args + ' data...', obj);
			};
			methods.addCart = function (args) {
				!state.cart ? (state.cart = [], state.cart.push(args)) : state.cart.push(args);
			};
			methods.setState = function (stateName, obj) {
				console.info('setting app state to ' + stateName, obj);
				var timestamp = Date.now();
				$firebaseObject(fb.child('users/' + _this.state.user.uid + '/state')).$loaded().then(function (data) {
					_this.state[stateName] = obj;
					data[timestamp] = _this.state;
					data.$save();
				});
				//this.data.object.users[state.user.uid][stateName].state[timestamp]=obj;
			};

			/* WOrkjing code with no use.
   			methods.selectAll = (args, master) => {
   				if(master === true) {
   					console.log('Selecting All..',args);
   					var selectAll = {};
   					angular.forEach(args, (arg, key) => {
   						selectAll[key] = arg;
   					});
   				} else {
   					var selectAll = {};
   				}
   				console.log(selectAll);
   				return selectAll
   			};
   */

			this.methods = methods;

			/**/
			/**/
			/*      MODELS     */
			/**/
			/**/

			// Auth

			models.login = {
				name: 'login',
				submit: methods.login,
				inputs: {
					email: {
						label: 'email',
						family: 'input',
						type: 'email',
						layout: {},
						model: 'email'
					},
					pass: {
						label: 'password',
						family: 'input',
						type: 'password',
						layout: {},
						model: 'pass'
					}
				}
			};
			models.profile = {
				name: 'profile',
				submit: methods.save,
				inputs: {
					email: {
						label: 'email',
						family: 'input',
						type: 'email',
						layout: {},
						model: 'email'
					},
					name: {
						label: 'name',
						family: 'input',
						type: 'text',
						layout: {},
						model: 'name'
					},
					company: {
						label: 'company',
						family: 'input',
						type: 'text',
						layout: {},
						model: 'company'
					},
					image: {
						label: 'image',
						family: 'image',
						type: 'main',
						layout: {},
						model: 'image'
					},
					pass: {
						label: 'password',
						family: 'input',
						type: 'password',
						layout: {},
						model: 'pass'
					}
				}
			};
			models.register = {
				name: 'register',
				submit: methods.register,
				inputs: {
					email: {
						label: 'email',
						family: 'input',
						type: 'email',
						layout: {},
						model: 'email'
					},
					pass: {
						label: 'password',
						family: 'input',
						type: 'password',
						layout: {},
						model: 'pass'
					},
					name: {
						label: 'name',
						family: 'input',
						type: 'text',
						layout: {},
						model: 'name'
					},
					about: {
						label: 'about',
						family: 'textarea',
						type: '',
						layout: {},
						model: 'about'
					},
					city: {
						label: 'Choose your city',
						family: 'select',
						type: '',
						layout: {},
						model: 'city',
						options: ['casablanca', 'nairobu']
					},
					userType: {
						label: 'Which are you?',
						family: 'radio',
						type: 'radio',
						layout: {},
						model: 'userType',
						options: ['lab', 'pharmacist']
					},
					hearedAbout: {
						label: 'How did you hear about us?',
						family: 'checkbox',
						type: 'checkbox',
						layout: {},
						model: 'heardAbout',
						options: ['Store', 'Friend']
					} /*,
       recommend: {
       label: 'How likely are you to recommend us?',
       family: 'input',
       type: 'range',
       layout: {},
       model: 'recommend',
       min: 0,
       max: 100,
       step: 4
       }*/
				}
			};

			// Shop

			models.shop = {
				name: 'shop',
				type: 'list',
				nav: [{ link: 'Over the counter', action: methods.changeData }, { link: 'Away from the counter', action: methods.changeData }, { link: 'Under the counter', action: methods.changeData }],
				filters: {
					name: {
						family: 'input',
						type: 'search',
						model: 'name',
						placeholder: 'Search for item\'s'
					},
					details: {
						family: 'input',
						type: 'search',
						model: 'details',
						placeholder: 'Search by item details\'s'
					}
				},
				actions: [{ text: 'Add to Cart', action: methods.addCart }]
			};
			models.cart = {
				name: 'cart',
				type: 'basic',
				caption: 'Adjust your shopping cart before checking out.',
				summery: 'This shopping cart has all the items ready for purchase',
				tHead: {
					'name': { type: 'string', width: '38%', action: methods.checkout, actionName: 'Checkout Now' },
					'price': { type: 'string', width: '20%' },
					'qty': { type: 'string', width: '10%' },
					'total': { type: 'string', width: '10%' } },
				tFoot: {
					'default': { type: 'string', value: 'Observe your total and proceed to checkout.', colspan: 2 },
					'checkout': { type: 'button', action: methods.checkout }, 'gTotal': { type: 'watcher', action: methods.total }
				},
				filters: {
					name: {
						family: 'input',
						type: 'search',
						model: 'name',
						placeholder: 'Search for item\'s in cart'
					}
				}
			};
			models.product = {
				name: 'product',
				type: 'item',
				layout: {
					image: {
						columns: 'small-12'
					},
					title: {
						columns: 'small-12'
					},
					price: {
						columns: 'small-6'
					},
					action: {
						columns: 'small-6'
					}
				}
			};
			this.models = models;

			/**/
			/**/
			/*      STATES     */
			/**/
			/**/

			this.state = state;

			// var cState = $state;
			// this.state.uiState = $state;
		}

		/**
   * @ngdoc service
   * @name pharzone.service:Api
   *
   * @description
   *
   */

		_createClass(Api, [{
			key: 'get',
			value: function get() {
				return 'Api';
			}
		}]);

		return Api;
	})();

	angular.module('pharzone').service('Api', Api);
})();
//# sourceMappingURL=../services/api-service.js.map