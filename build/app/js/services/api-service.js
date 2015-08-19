'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
	'use strict';
	var fb = new Firebase('https://pharzone.firebaseio.com/v2/');

	var Api = (function () {
		function Api($firebaseObject, $firebaseArray) {
			var _this = this;

			_classCallCheck(this, Api);

			var db = {},
			    methods = {},
			    models = {};
			this.data = {};
			this.methods = {};
			this.models = {};

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
				console.log('save..');
				angular.forEach(args, function (arg, key) {
					console.log(key, arg);
				});
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
				// Expects: email, pass
				console.log('login..', args.email + ': ' + args.pass);
				angular.forEach(args, function (arg, key) {
					console.log(key, arg);
				});
			};
			methods.logout = function (args) {
				console.log('logout..');
				angular.forEach(args, function (arg, key) {
					console.log(key, arg);
				});
			};
			methods.register = function (args) {
				console.log('register..');
				angular.forEach(args, function (arg, key) {
					console.log(key, arg);
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
			methods.selectAll = function (args, master) {
				if (master === true) {
					console.log('Selecting All..', args);
					var selectAll = {};
					angular.forEach(args, function (arg, key) {
						selectAll[key] = arg;
					});
				} else {
					var selectAll = {};
				}
				console.log(selectAll);
				return selectAll;
			};
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
					},
					recommend: {
						label: 'How likely are you to recommend us?',
						family: 'input',
						type: 'range',
						layout: {},
						model: 'recommend',
						min: 0,
						max: 100,
						step: 4
					}
				}
			};

			// Shop

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
			this.models = models;
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