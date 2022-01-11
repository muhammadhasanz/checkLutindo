"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// DataTables Menu
// =============================================================
var DataTablesBranch =
    /*#__PURE__*/
    function () {
        function DataTablesBranch() {
            _classCallCheck(this, DataTablesBranch);

            this.init();
        }

        _createClass(DataTablesBranch, [{
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
                return $('#myBranch').DataTable({
                    language: {
                        paginate: {
                            previous: '<i class="fa fa-lg fa-angle-left"></i>',
                            next: '<i class="fa fa-lg fa-angle-right"></i>'
                        }
                    },
                    autoWidth: false,
                    ajax: '../manager/getaktif',
                    deferRender: true,
                    // order: [1],
                    columns: [{
                        data: 'no',
                        className: 'align-middle',
                        searchable: false
                    }, {
                        data: {
                            _: 'customer',
                            sort: 'customer',
                            search: 'customer'
                        },
                        className: 'align-middle'
                    }, {
                        data: 'region',
                        className: 'align-middle text-center'
                    }, {
                        data: 'site_id',
                        className: 'align-middle text-center'
                    }, {
                        data: 'site_name',
                        className: 'align-middle text-center'
                    }, {
                        data: 'address',
                        className: 'align-middle text-center'
                    }, {
                        data: 'project',
                        className: 'align-middle text-center'
                    }, {
                        data: 'contractor',
                        className: 'align-middle text-center'
                    }, {
                        data: 'type_tower',
                        className: 'align-middle text-center'
                    }, {
                        data: 'tanggal_pemesanan',
                        className: 'align-middle text-center'
                    }, {
                        data: 'email',
                        className: 'align-middle text-center'
                    }, {
                        data: 'no_phone',
                        className: 'align-middle text-center'
                    }, {
                        data: 'status',
                        className: 'align-middle text-center'
                    }],
                    columnDefs: [{
                        targets: 12,
                        render: function render(data, type, row, meta) {
                            if (data == 'Site telah aktif') {
                                return "<span class=\"badge badge-subtle badge-success\">Site telah aktif</span";
                            } else {
                                return "<span class=\"badge badge-subtle badge-danger\">Bermasalah</span";
                            }
                        }
                    }]
                });
            }
        }, {
            key: "searchRecords",
            value: function searchRecords() {
                var self = this;
                $('#table-search').on('keyup change focus', function (e) {
                    var bulan = $('#bulan').val();
                    var tahun = $('#tahun').val();
                    var hasBulan = bulan !== '';
                    var hasTahun = tahun !== '';
                    var value = $('#table-search').val(); // clear selected rows

                    if (value.length && (e.type === 'keyup' || e.type === 'change')) {
                        self.clearSelectedRows();
                    } // reset search term


                    self.table.search('').columns().search('').draw();

                    if (hasBulan && hasTahun) {
                        self.table.search(bulan + ' ' + tahun + ' ' + value).draw();
                    } else if (hasTahun) {
                        self.table.search(tahun + ' ' + value).draw();
                    } else if (hasBulan) {
                        self.table.search(bulan + ' ' + value).draw();
                    } else {
                        self.table.search(value).draw();
                    }
                });
            }
        }, {
            key: "clearSelectedRows",
            value: function clearSelectedRows() {
                $('#check-handle').prop('indeterminate', false).prop('checked', false).trigger('change');
            }
        }]);

        return DataTablesBranch;
    }();
/**
 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
 */
$(document).on('theme:init', function () {
    new DataTablesBranch();
});