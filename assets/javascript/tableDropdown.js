"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// DataTables Menu
// =============================================================
var DataTablesDropdown =
    /*#__PURE__*/
    function () {
        function DataTablesDropdown() {
            _classCallCheck(this, DataTablesDropdown);

            this.init();
        }

        _createClass(DataTablesDropdown, [{
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
                return $('#myDropdown').DataTable({
                    // dom: "<'text-muted'Bi>\n        <'table-responsive'tr>\n        <'mt-4'p>",
                    // buttons: ['copyHtml5', {
                    //     extend: 'print',
                    //     autoPrint: false
                    // }],
                    language: {
                        paginate: {
                            previous: '<i class="fa fa-lg fa-angle-left"></i>',
                            next: '<i class="fa fa-lg fa-angle-right"></i>'
                        }
                    },
                    autoWidth: false,
                    ajax: '../menu/getdropdown',
                    deferRender: true,
                    // order: [1],
                    columns: [{
                        data: 'no',
                        className: 'align-middle',
                        searchable: false
                    }, {
                        data: {
                            _: 'dropdown',
                            sort: 'dropdown',
                            search: 'dropdown'
                        },
                        className: 'align-middle'
                    }, {
                        data: 'submenu',
                        className: 'align-middle'
                    }, {
                        data: 'url',
                        className: 'align-middle'
                    }, {
                        data: 'status',
                        className: 'align-middle'
                    }, {
                        data: 'id',
                        className: 'align-middle text-right',
                        orderable: false,
                        searchable: false
                    }],
                    columnDefs: [{
                        targets: 4,
                        render: function render(data, type, row, meta) {
                            if (data == '1') {
                                return "<span class=\"badge badge-subtle badge-success\">Aktif</span";
                            } else {
                                return "<span class=\"badge badge-subtle badge-danger\">Tdk aktif</span";
                            }
                        }
                    }, {
                        targets: 5,
                        render: function render(data, type, row, meta) {
                            return "<button class=\"btn btn-sm btn-icon btn-secondary\" data-toggle=\"modal\" data-target=\"#updateMenu".concat(data, "\" title=\"Update dropdown\"><i class=\"fa fa-pencil-alt\"></i></button>\n          <button class=\"btn btn-sm btn-icon btn-secondary\" type=\"button\"  data-toggle=\"modal\" data-target=\"#delete").concat(data, "\"><i class=\"far fa-trash-alt\"></i></button>\n        <div class=\"modal modal-alert fade ml-2\" id=\"delete").concat(data, "\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n     <div class=\"modal-header\">\n      <h5 id=\"deleteLabel\" class=\"modal-title\">\n     <i class=\"fa fa-bullhorn text-warning mr-1\"></i> Peringatan </h5>\n       </div>\n        <div class=\"modal-body\">\n        <p class=\"float-left mx-4 mt-2 mb-0\"> Apakah anda ingin menghapus dropdown \"").concat(row.dropdown, "\"! </p>\n       </div>\n        <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\">Tidak!</button> <a type=\"button\" href=\"delete/dropdown/").concat(data, "\" class=\"btn btn-subtle-danger\">Ya, hapus!</a>\n      </div>\n        </div>\n        </div>\n    </div>\n");
                        }
                    }]
                });
            }
        }, {
            key: "searchRecords",
            value: function searchRecords() {
                var self = this;
                $('#table-search-dropdown').on('keyup change focus', function (e) {
                    // var filterBy = $('#filterBy').val();
                    // var hasFilter = filterBy !== '';
                    var value = $('#table-search-dropdown').val(); // clear selected rows

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

        return DataTablesDropdown;
    }();
/**
 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
 */
$(document).on('theme:init', function () {
    new DataTablesDropdown();
});