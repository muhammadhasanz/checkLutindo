$(document).ready(function () {
    setInterval(function () {
        $('#alluser').load('add/getstatus');
    }, 3000);
});
// function allUser() {
//     $(document).ready(function () {
//         $.ajax({
//             url: 'add/getstatus',
//             type: 'post',
//             dataType: 'json',
//             data: {},
//             success: function (data) {
//                 $.each(data.allUser, function () {
//                     setInterval(function () {
//                     }, 1000);
//                     $('#alluser').load("<div class=\"list-group-item\" data-toggle=\"sidebar\" data-sidebar=\"show\">\n        <div class=\"list-group-item-figure align-items-start\">\n         <a href=\"#\" class=\"user-avatar\"><img src=\"" + this['base'] + "assets/images/avatars/" + this['image'] + "\" alt=\"" + this['nama'] + "\"> <span class=\"avatar-badge " + this['status'] + "\" title=\"" + this['status'] + "\"></span></a>\n         </div>\n        <div class=\"list-group-item-body\">\n      <h3 class=\"card-title\">\n         <a href=\"#\">" + this['nama'] + "</a>\n      </h3>\n         <h6 class=\"card-subtitle text-muted\"> " + this['alias'] + " </h6>\n     </div>\n        <div class=\"list-group-item-figure align-items-start\">\n      <div class=\"dropdown\">\n          <button class=\"btn btn-sm btn-icon btn-light\" data-toggle=\"dropdown\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></button>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n     <div class=\"dropdown-arrow mr-n1\"></div><button type=\"button\" class=\"dropdown-item\">Message</button> <button type=\"button\" class=\"dropdown-item\">Invite to a team</button> <button type=\"button\" class=\"dropdown-item\">Copy member ID</button>\n          <div class=\"dropdown-divider\"></div><button type=\"button\" class=\"dropdown-item\">Remove</button>\n         </div>\n        </div>\n        </div>\n        </div>\n");
//                 });
//             }
//         });
//     });
// }
// document.addEventListener('DOMContentLoaded', function () {
//     allUser();
// });
// setInterval(function () {
// }, 1000);
