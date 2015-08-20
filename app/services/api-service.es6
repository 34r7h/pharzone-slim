(function () {
	'use strict';
	let fb = new Firebase('https://pharzone.firebaseio.com/v2/');

	class Api {
		constructor($firebaseObject, $firebaseArray) {
			let db = {}, methods = {}, models = {}, state = {};
			this.data = {};
			this.methods = {};
			this.models = {};
			this.state = {};

			/**/
			/**/
			/*      DATA     */
			/**/
			/**/

			db.obj = $firebaseObject(fb).$loaded().then((data) => {
				this.data.object = data;
			});
			db.arr = $firebaseArray(fb).$loaded().then((data) => {
				this.data.array = data;
			});

			/**/
			/**/
			/*      Methods     */
			/**/
			/**/

			methods.save = (args) => {
				console.log('save..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.add = (args) => {
				console.log('add..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.remove = (args) => {
				console.log('remove..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.login = (args) => {
				// Expects: email, pass
				console.log('login..', args.email + ': ' + args.pass);
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.logout = (args) => {
				console.log('logout..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.register = (args) => {
				console.log('register..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.checkout = (args) => {
				console.log('checkout..');
				angular.forEach(args, (arg, key) => {
					console.log(key, arg);
				});
			};
			methods.total = (args) => {
				console.log('checking total..');
				var total = 0;
				angular.forEach(args, (arg) => {
					total += arg.total;
				});
				return total;
			};
			methods.selected = (args, obj) => {
				console.log('Selecting all..', args);
				var selection = {};
				angular.forEach(args, (arg, key) => {
					arg === true ?
						selection[key] = obj[key]:
						console.log('false selection');
				});
				console.log(selection);
				return selection;
			};
			methods.changeData = (args, obj) => {
				console.log('Changing '+args+' data...', obj);
				obj[2] = {id: 'abcdefsad', user:'snorgan', name:'vasaline', trueName: 'methyl (1R,2R,3S,5S)-3- (benzoyloxy)-8-methyl-8-azabicyclo[3.2.1] octane-2-carboxylate',price: 34, details:'peppy stuff', form:'powder', images:['https://www.cibconline.cibc.com/olb/img/TravelInsurance-Spotlight.jpg']};
				console.log('Changed '+args+' data...', obj);

			};
			methods.addCart = (args) => {
				!state.cart ? (state.cart = [], state.cart.push(args))
					: state.cart.push(args);
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

			models.shop = {
				name: 'shop',
				type: 'list',
				nav: [
					{link:'Over the counter', action: methods.changeData},
					{link:'Away from the counter', action: methods.changeData},
					{link:'Under the counter', action: methods.changeData}
				],
				filters:{
					name:{
						family: 'input',
						type: 'search',
						model: 'name',
						placeholder: 'Search for item\'s'
					},
					details:{
						family: 'input',
						type: 'search',
						model: 'details',
						placeholder: 'Search by item details\'s'
					}
				},
				actions: [
					{text:'Add to Cart', action: methods.addCart}
				]
			};
			models.cart = {
				name: 'cart',
				type: 'basic',
				caption: 'Adjust your shopping cart before checking out.',
				summery: 'This shopping cart has all the items ready for purchase',
				tHead: {
					'name':{type: 'string', width:'38%', action:methods.checkout, actionName: 'Checkout Now'},
					'price':{type:'string', width:'20%'},
					'qty':{type:'string', width:'10%'},
					'total':{type:'string', width:'10%'}},
				tFoot: {
					'default':{type:'string', value:'Observe your total and proceed to checkout.', colspan:2},
					'checkout':{type:'button', action: methods.checkout},'gTotal':{type:'watcher', action: methods.total}
				},
				filters:{
					name:{
						family: 'input',
						type: 'search',
						model: 'name',
						placeholder: 'Search for item\'s in cart'
					}
				}
			};
			this.models = models;
			this.state = state;
		}

		get() {
			return 'Api';
		}
	}

	/**
	 * @ngdoc service
	 * @name pharzone.service:Api
	 *
	 * @description
	 *
	 */
	angular
		.module('pharzone')
		.service('Api', Api);
}());