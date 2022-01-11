$(document).ready(function () {

    var limit = 1;
    var start = 0;
    var action = 'inactive';
    function load_country_data(limit, start) {
        $.ajax({
            url: "../ls/getlog",
            method: "POST",
            data: { limit: limit, start: start },
            cache: false,
            success: function (data) {
                $('#get-log').append(data);
                if (data == "") {
                    $('#load_log_message').html("<p class='text-center'>\n     <button type='button' class='btn btn-light'> Tidak ada log ditemukan </button>\n      </p>");
                    action = 'active';
                } else {
                    $('#load_log_message').html("<p class='text-center'>\n     <button type='button' class='btn btn-subtle-danger'> Mohon tunggu... </button>\n      </p>");
                    action = 'inactive';
                }
            }
        });
    }
    if (action == 'inactive') {
        action = 'active';
        load_country_data(limit, start);
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $("#get-log").height() && action == 'inactive') {
            action = 'active';
            start = start + limit;
            setTimeout(function () {
                load_country_data(limit, start);
            }, 1000);
        }
    });
});