$(window).on('load', function () {

    var greenfield = ['SITE VIEW BEFORE SITE OPENING', 'TOWER FOUNDATION EXCAVATION', 'REINFORCEMENT INSTALLATION', 'ANCHOR SETTING AND FORM WORK', 'TOWER FOUNDATION POURING + TOOLS', 'TEST SLUMP AND CONCRETE TEST SAMPLE', 'TOWER FOUNDATION BACKFILLING + COMPACTED', 'TOWER ERECTION', 'FOUNDATION FENCE EXCAVATION', 'FENCE FOUNDATION', 'VERTICALITY TOWER CHECKING', 'STICK ROD INSTALLATION', 'GROUNDING CONTROL PIT VIEW', 'CAD WELDED', 'TOWER LADDER AND BORDES TOWER', 'HORIZONTAL OUT DOOR CABLE LADDER', 'SHELTER FOUNDATION', 'ME INSTALLATION FINISH', 'LIGHTNING PROTECTION', 'TOWER LAMPS (OBL) & BRACKET', 'ANTENNA MOUNTING', 'GPS MOUNTING', 'TOWER BUSBAR', 'YARD / SITE LAMPS', 'PAVING BLOCK AND FINISHING', 'ACCESS ROAD', 'SITE VIEW']
    var rooftop = ['SITE VIEW BEFORE SITE OPENING', 'REINFORCEMENT INSTALLATION', 'ANCHOR SETTING AND FORM WORK', 'TOWER FOUNDATION POURING + TOOLS', 'TEST SLUMP AND CONCRETE TEST SAMPLE', 'TOWER ERECTION', 'VERTICALITY TOWER CHECKING', 'STICK ROD INSTALLATION', 'GROUNDING CONTROL PIT VIEW', 'CAD WELDED', 'SHELTER FOUNDATION', 'ME INSTALLATION FINISH', 'LIGHTNING PROTECTION', 'TOWER BUSBAR', 'TOWER LADDER AND BORDES TOWER', 'HORIZONTAL OUT DOOR CABLE LADDER', 'ANTENNA MOUNTING', 'GPS MOUNTING', 'SITE VIEW']

    $('#check-site').on('submit', function (event) {
        var history
        event.preventDefault()
        let data = $(this).serialize()
        // console.log(data)
        $('biaya-null').show()
        $('#rincian-biaya').hide()
        $(`#site_0`).html('-')
        $(`#site_1`).html('-')
        $(`#site_2`).html('-')
        var hostApp = window.location.host.split('.')
        $.ajax({
            type: 'POST',
            url: `${window.origin}/check/site`,
            data: data,
            dataType: "JSON",
            success: function (result) {
                // console.log(result)
                $.each(result.data, (key, value) => {
                    $(`#site_${key}`).html(`${value}`)
                })
                if (result.biaya) {
                    $(`#biaya-null`).hide()
                    $('#rincian-biaya').attr('onclick', `lihatFile('${result.biaya}')`)
                    $('#rincian-biaya').show()
                } else {
                    $('#rincian-biaya').hide()
                    $(`#biaya-null`).show()
                }
                $('#detail-site').removeClass('d-none')
                $('#timeline-history').html('')
                $('#history').removeClass('d-none')
                if (result.check_site.length < 1) {
                    $('#empty-history').removeClass('d-none')
                    $('#timeline-history').addClass('d-none')
                } else {
                    history = result.check_site[0].site_type == 'Greenfield' ? greenfield : rooftop
                    $('#empty-history').addClass('d-none')
                    $('#timeline-history').removeClass('d-none')
                    if (result.check_site.length != history.length) {
                        // history.splice(result.check_site.length + 1, result.check_site[0].site_type == 'Greenfield' ? greenfield.length : rooftop.length - result.check_site.length);
                        // for (i = 0; i < history.length / 2; i++) {
                        //     var t = history[i];
                        //     history[i] = history[history.length - 1 - i];
                        //     history[history.length - 1 - i] = t;
                        // }
                        console.log(history)
                        $('#timeline-history').append(`<li class="timeline-item">
                            <div class="timeline-figure">
                                <span class="tile tile-circle tile-xs"><i class="fa fa-check d-none"></i></span>
                            </div>
                            <div class="timeline-body">
                                <h6 class="timeline-heading"> ${history[result.check_site.length]} </h6><span class="timeline-date d-none"></span>
                            </div>
                        </li>`)
                    } else {
                        // $.each(history, (key, value) => {
                        //     // console.log(value)
                        //     $('#timeline-history').append(`<li class="timeline-item">
                        //         <div class="timeline-figure">
                        //             <span class="tile tile-circle tile-xs bg-success"><i class="fa fa-check d-print-none"></i></span>
                        //         </div>
                        //         <div class="timeline-body">
                        //             <h6 class="timeline-heading"> ${value} </h6><span class="timeline-date d-print-none"></span>
                        //         </div>
                        //     </li>`)
                        // })
                        // $.each(result.check_site, (key, value) => {
                        // console.log(value)
                        //     const event = new Date(value.updated_at).toLocaleString("en-GB").split(', ');
                        //     const date_time = event[1].split('.');
                        //     if (value.status == 1) {
                        //         $('#timeline-history').append(`<li class="timeline-item">
                        //             <div class="timeline-figure">
                        //                 <span class="tile tile-circle tile-xs bg-success"><i class="fa fa-check d-print-none"></i></span>
                        //             </div>
                        //             <div class="timeline-body">
                        //                 <h6 class="timeline-heading"> ${history[value.tahap_id - 1]} </h6><span class="timeline-date d-print-none">${event[0]} - ${date_time[0]}:${date_time[1]}</span>
                        //             </div>
                        //         </li>`)
                        //     }
                        // })
                        // list-group-item justify-content-between align-items-center
                    }
                    $.each(result.check_site, (key, value) => {
                        // console.log(value)
                        const event = new Date(value.updated_at).toLocaleString("en-GB").split(', ');
                        if (value.status == 1) {
                            $('#timeline-history').append(`<li class="timeline-item">
                                <div class="timeline-figure">
                                    <span class="tile tile-circle tile-xs bg-success"><i class="fa fa-check d-print-none"></i></span>
                                </div>
                                <div class="timeline-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="timeline-heading"> ${history[value.tahap_id - 1]} </h6><span class="timeline-date d-print-none">${event[0]} - ${event[1]}</span>
                                    </div>
                                    ${value.file_dokumentasi != null ? `<div><a href="https://app.${hostApp[1]}.${hostApp[2]}/assets/images/dokumentasi/${value.file_dokumentasi}" data-lightbox="${value.site_type}" data-title="Catatan  : ${value.catatan ?? '-'}"><span class="oi oi-magnifying-glass mr-3" style="cursor: pointer;"></span></a></div>` : '<div></div>'}
                                </div>
                            </li>`)
                        }
                    })
                }
            }
        })
    })
})

function lihatFile(url) {
    var height = 500
    var width = 800
    var top = parseInt((screen.availHeight) - height - 100);
    var left = parseInt((screen.availWidth) - width - 300);
    var features = "location=1, status=1, scrollbars=1, width=" + width + ", height=" + height + ", top=" + top + ", left=" + left;
    console.log(url)

    window.open(url, "RincianBiaya", features);
}

{/* <li class="timeline-item">
<div class="timeline-figure">
    <span class="tile tile-circle tile-xs bg-success"><i class="fa fa-check d-print-none"></i></span>
</div>
<div class="timeline-body list-group-item d-flex justify-content-between align-items-center">
    <div>
        <h6 class="timeline-heading"> SITE VIEW BEFORE SITE OPENING </h6><span class="timeline-date d-print-none">10/9/2022 - 15:47</span>
    </div>
</div>
</li>
<li class="timeline-item">
<div class="timeline-figure">
    <span class="tile tile-circle tile-xs"><i class="fa fa-check d-none"></i></span>
</div>
<div class="timeline-body list-group-item d-flex justify-content-between align-items-center">
    <div>
        <h6 class="timeline-heading"> TOWER FOUNDATION EXCAVATION </h6><span class="timeline-date d-none">12/05/2022 - 15:01</span>
    </div>
</div>
</li> */}