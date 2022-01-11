"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

const last = window.location.pathname.length - 1

// DataTables Menu
// =============================================================
var DataTablesRoleAccess =
    /*#__PURE__*/
    function () {
        function DataTablesRoleAccess() {
            _classCallCheck(this, DataTablesRoleAccess);

            this.init();
        }

        _createClass(DataTablesRoleAccess, [{
            key: "init",
            value: function init() {
                // event handlers
                this.table = this.table();
                this.searchRecords();
                this.clearSelectedRows();

                this.table.buttons().container().appendTo('#dt-buttons').unwrap();
            }
        }, {
            key: "table",
            value: function table() {
                return $('#myRoleAccess').DataTable({
                    language: {
                        paginate: {
                            previous: '<i class="fa fa-lg fa-angle-left"></i>',
                            next: '<i class="fa fa-lg fa-angle-right"></i>'
                        }
                    },
                    autoWidth: false,
                    ajax: '../../menu/getroleaccess/' + window.location.pathname[last],
                    deferRender: true,
                    // order: [1],
                    columns: [{
                        data: 'no',
                        className: 'align-middle',
                        searchable: false
                    }, {
                        data: {
                            _: 'menu',
                            sort: 'menu',
                            search: 'menu'
                        },
                        className: 'align-middle'
                    }, {
                        data: 'id',
                        className: 'align-middle text-center',
                        orderable: false,
                        searchable: false
                    }],
                    columnDefs: [{
                        targets: 2,
                        render: function render(data, type, row, meta) {
                            return "<label class=\"switcher-control switcher-control-lg\"><input type=\"checkbox\" onclick=\"myFunction()\" id=\"switcher-input".concat(data, "\" class=\"switcher-input\" ").concat(row.cek, " data-role=\"").concat(row.id_role, "\" data-menu=\"").concat(data, "\"> <span class=\"switcher-indicator\"></span> <span class=\"switcher-label-on\">ON</span> <span class=\"switcher-label-off\">OFF</span></label>\n      <script>\n      $('#switcher-input").concat(data, "').on('click', function() {\n     const menuId = $(this).data('menu');\n     const roleId = $(this).data('role');\n       $.ajax({\n     url: '../changeaccess',\n        type: 'post',\n     data: {\n       menuId: menuId,\n       roleId: roleId,\n       },\n        success: function () {\n        document.location.href = \"../roleaccess/\" + roleId;\n      }\n     });\n     });\n       </script>\n");
                        }

                    }]
                });
            }
        }, {
            key: "searchRecords",
            value: function searchRecords() {
                var self = this;
                $('#table-search').on('keyup change focus', function (e) {
                    // var filterBy = $('#filterBy').val();
                    // var hasFilter = filterBy !== '';
                    var value = $('#table-search').val(); // clear selected rows

                    if (value.length && (e.type === 'keyup' || e.type === 'change')) {
                        self.clearSelectedRows();
                    } // reset search term


                    self.table.search('').columns().search('').draw();

                    // if (hasFilter) {
                    //     self.table.columns(filterBy).search(value).draw();
                    // } else {
                    self.table.search(value).draw();
                    // }
                });
            }
        }, {
            key: "clearSelectedRows",
            value: function clearSelectedRows() {
                $('#check-handle').prop('indeterminate', false).prop('checked', false).trigger('change');
            }
        }]);

        return DataTablesRoleAccess;
    }();
/**
 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
 */
$(document).on('theme:init', function () {
    new DataTablesRoleAccess();
});

// $('.switcher-input').on('click', function () {
//     alert('hai');
//     const menuId = $(this).data('menu');
//     const roleId = $(this).data('role');

//     $.ajax({
//         url: '../../changeaccess',
//         type: 'post',
//         data: {
//             menuId: menuId,
//             roleId: roleId,
//         },
//         success: function () {
//             document.location.href = "../../roleaccess/" + roleId;
//         }
//     });
// });