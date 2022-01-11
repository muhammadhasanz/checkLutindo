"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// DataTables Menu
// =============================================================
var DataTablesSpLogistic =
    /*#__PURE__*/
    function () {
        function DataTablesSpLogistic() {
            _classCallCheck(this, DataTablesSpLogistic);

            this.init();
        }

        _createClass(DataTablesSpLogistic, [{
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
                return $('#mySp').DataTable({
                    language: {
                        paginate: {
                            previous: '<i class="fa fa-lg fa-angle-left"></i>',
                            next: '<i class="fa fa-lg fa-angle-right"></i>'
                        }
                    },
                    autoWidth: false,
                    ajax: '../admin/getsplogistic',
                    deferRender: true,
                    // order: [1],
                    columns: [{
                        data: 'no',
                        className: 'align-middle',
                        searchable: false
                    }, {
                        data: {
                            _: 'name_customer',
                            sort: 'name_customer',
                            search: 'name_customer'
                        },
                        className: 'align-middle'
                    }, {
                        data: 'address',
                        className: 'align-middle text-center',
                    }, {
                        data: 'type',
                        className: 'align-middle text-center',
                    }, {
                        data: 'color',
                        className: 'align-middle text-center',
                    }, {
                        data: 'chassis_number',
                        className: 'align-middle text-center',
                    }, {
                        data: 'date_delivery',
                        className: 'align-middle text-center',
                    }, {
                        data: 'time',
                        className: 'align-middle text-center',
                    }, {
                        data: 'info',
                        className: 'align-middle text-center',
                    }, {
                        data: 'sales',
                        className: 'align-middle text-center',
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

        return DataTablesSpLogistic;
    }();
/**
 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
 */
$(document).on('theme:init', function () {
    new DataTablesSpLogistic();
});