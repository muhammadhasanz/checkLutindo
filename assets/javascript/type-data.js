"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// DataTables Menu
// =============================================================
var DataTablesMenu =
    /*#__PURE__*/
    function () {
        function DataTablesMenu() {
            _classCallCheck(this, DataTablesMenu);

            this.init();
        }

        _createClass(DataTablesMenu, [{
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
                return $('#myType').DataTable({
                    language: {
                        paginate: {
                            previous: '<i class="fa fa-lg fa-angle-left"></i>',
                            next: '<i class="fa fa-lg fa-angle-right"></i>'
                        }
                    },
                    autoWidth: false,
                    ajax: 'type/gettype',
                    deferRender: true,
                    // order: [1],
                    columns: [{
                        data: 'no',
                        className: 'align-middle',
                        searchable: false
                    }, {
                        data: {
                            _: 'name_type',
                            sort: 'name_type',
                            search: 'name_type'
                        },
                        className: 'align-middle'
                    }, {
                        data: 'name_merk',
                        className: 'align-middle'
                    }, {
                        data: 'id_type',
                        className: 'align-middle text-right',
                        orderable: false,
                        searchable: false
                    }],
                    columnDefs: [{
                        targets: 3,
                        render: function render(data, type, row, meta) {
                            return "<button class=\"btn btn-sm btn-icon btn-secondary\" data-toggle=\"modal\" data-target=\"#updateMenu".concat(data, "\" title=\"Edit type\"><i class=\"fa fa-pencil-alt\"></i></button>\n          <button class=\"btn btn-sm btn-icon btn-secondary\" type=\"button\"  data-toggle=\"modal\" data-target=\"#delete").concat(data, "\" title=\"Hapus type\"><i class=\"far fa-trash-alt\"></i></button>\n        <div class=\"modal modal-alert fade ml-2\" id=\"delete").concat(data, "\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n     <div class=\"modal-header\">\n      <h5 id=\"deleteLabel").concat(data, "\" class=\"modal-title\">\n     <i class=\"fa fa-bullhorn text-warning mr-1\"></i> Peringatan </h5>\n       </div>\n        <div class=\"modal-body\">\n        <p class=\"float-left mx-4 mt-2 mb-0\"> Apakah anda ingin menghapus type \"").concat(row.name_type, "\"! </p>\n       </div>\n        <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\">Tidak!</button> <a type=\"button\" href=\"type/delete_type/").concat(data, "\" class=\"btn btn-subtle-danger\">Ya, hapus!</a>\n      </div>\n        </div>\n        </div>\n    </div>\n       <form action=\"type/update_type/").concat(data, "\" method=\"post\" id=\"clientNewForm").concat(data, "\" name=\"clientNewForm\" class=\"\">\n        <div class=\"modal fade ml-2\" id=\"updateMenu").concat(data, "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateMenuLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n       <div class=\"modal-header\">\n        <h6 id=\"clientNewModalLabel").concat(data, "\" class=\"modal-title inline-editable\"><span class=\"sr-only\">Nama type</span> <input type=\"text\" class=\"form-control form-control-lg\" name=\"name_type\" placeholder=\"Type\" required=\"\" value=\"").concat(row.name_type, "\"></h6>\n      </div>\n        <div class=\"modal-body\">\n        <div class=\"form-row\">\n      <div class=\"col-md-12\">\n     <div class=\"form-group\"><label for=\"cnContactName\" class=\"float-left\">Access</label> <input type=\"text\" id=\"cnContactName").concat(data, "\" name=\"name_merk\" class=\"form-control\"  value=\"").concat(row.name_merk, "\">\n        </div>\n        </div>\n        </div>\n        </div>\n        <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\">Perbarui</button> <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">Batal</button>\n       </div>\n       </div>\n      </div>\n        </div>\n       </form>\n");
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

        return DataTablesMenu;
    }();
/**
 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
 */
$(document).on('theme:init', function () {
    new DataTablesMenu();
});