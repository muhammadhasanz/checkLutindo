"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Session Timeout Demo
// =============================================================
var SessionTimeoutDemo =
	/*#__PURE__*/
	function () {
		function SessionTimeoutDemo() {
			_classCallCheck(this, SessionTimeoutDemo);

			this.init();
		}

		_createClass(SessionTimeoutDemo, [{
			key: "init",
			value: function init() {
				// event handlers
				this.handleSessionTimeout();
			}
		}, {
			key: "handleSessionTimeout",
			value: function handleSessionTimeout() {
				$.sessionTimeout({
					title: 'Sesi kamu akan segera berakhir',
					message: 'Sesi kamu akan berakhir dalam 3 menit.',
					countdownMessage: 'Mengalihkan dalam <span class="badge badge-warning">{timer}</span> detik.',
					logoutUrl: '/crownhunter/cnh-admin/auth/logout',
					redirUrl: '/crownhunter/cnh-admin/auth/lockscreen',
					warnAfter: 160000,
					redirAfter: 180000,
					keepAlive: false,
					countdownSmart: false,
					logoutButton: 'Keluar',
					keepAliveButton: 'Tetap terhubung'
				});
			}
		}]);

		return SessionTimeoutDemo;
	}();
/**
 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
 */


$(document).on('theme:init', function () {
	new SessionTimeoutDemo();
});