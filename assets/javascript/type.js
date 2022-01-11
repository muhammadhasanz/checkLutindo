"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Select2 Demo
// =============================================================
var Select2Quadran =
    /*#__PURE__*/
    function () {
        function Select2Quadran() {
            _classCallCheck(this, Select2Quadran);

            this.init();
        }

        _createClass(Select2Quadran, [{
            key: "init",
            value: function init() {
                // event handlers
                this.fillSelectFromStates();
                this.fillSelectFromStates2();
            }
        }, {
            key: "getStates",
            value: function getStates() {
                return $('#source-type').html();
            }
        }, {
            key: "fillSelectFromStates",
            value: function fillSelectFromStates() {
                $('#type').append(this.getStates());
            }
        }]);

        return Select2Quadran;
    }();
/**
 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
 */


$(document).on('theme:init', function () {
    new Select2Quadran();
});