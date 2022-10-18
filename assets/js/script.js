var DateTime = luxon.DateTime;
var now = DateTime.now();
var sixAm = DateTime.local(now.year, now.month, now.day, 6);
var sevenAm = DateTime.local(now.year, now.month, now.day, 7);
var eightAm = DateTime.local(now.year, now.month, now.day, 8);
var nineAm = DateTime.local(now.year, now.month, now.day, 9);
var tenAm = DateTime.local(now.year, now.month, now.day, 10);
var elevenAm = DateTime.local(now.year, now.month, now.day, 11);
var twelvePm = DateTime.local(now.year, now.month, now.day, 12);
var onePm = DateTime.local(now.year, now.month, now.day, 13);
var twoPm = DateTime.local(now.year, now.month, now.day, 14);
var threePm = DateTime.local(now.year, now.month, now.day, 15);
var fourPm = DateTime.local(now.year, now.month, now.day, 16);
var fivePm = DateTime.local(now.year, now.month, now.day, 17);
var sixPm = DateTime.local(now.year, now.month, now.day, 18);
var sevenPm = DateTime.local(now.year, now.month, now.day, 19);
var theHour = now.toLocaleString({hour: '2-digit'});

$('#timeLabel06').text(sixAm.toFormat('h a'));
$('#sixAmText').val(JSON.parse(localStorage.getItem('sixAmTask')))
$('#timeLabel07').text(sevenAm.toFormat('h a'));
$('#sevenAmText').val(JSON.parse(localStorage.getItem('sevenAmTask')))
$('#timeLabel08').text(eightAm.toFormat('h a'));
$('#eightAmText').val(JSON.parse(localStorage.getItem('eightAmTask')))
$('#timeLabel09').text(nineAm.toFormat('h a'));
$('#nineAmText').val(JSON.parse(localStorage.getItem('nineAmTask')))
$('#timeLabel10').text(tenAm.toFormat('h a'));
$('#tenAmText').val(JSON.parse(localStorage.getItem('tenAmTask')))
$('#timeLabel11').text(elevenAm.toFormat('h a'));
$('#elevenAmText').val(JSON.parse(localStorage.getItem('elevenAmTask')))
$('#timeLabel12').text(twelvePm.toFormat('h a'));
$('#twelvePmText').val(JSON.parse(localStorage.getItem('twelvePmTask')))
$('#timeLabel13').text(onePm.toFormat('h a'));
$('#onePmText').val(JSON.parse(localStorage.getItem('onePmTask')))
$('#timeLabel14').text(twoPm.toFormat('h a'));
$('#twoPmText').val(JSON.parse(localStorage.getItem('twoPmTask')))
$('#timeLabel15').text(threePm.toFormat('h a'));
$('#threePmText').val(JSON.parse(localStorage.getItem('threePmTask')))
$('#timeLabel16').text(fourPm.toFormat('h a'));
$('#fourPmText').val(JSON.parse(localStorage.getItem('fourPmTask')))
$('#timeLabel17').text(fivePm.toFormat('h a'));
$('#fivePmText').val(JSON.parse(localStorage.getItem('fivePmTask')))
$('#timeLabel18').text(sixPm.toFormat('h a'));
$('#sixPmText').val(JSON.parse(localStorage.getItem('sixPmTask')))

$('#sixAmBtn').click(function (event) { if ($('#sixAmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('sixAmTask');
    localStorage.setItem('sixAmTask', JSON.stringify($('#sixAmText').val()));
    $('#sixAmText').prop('disabled', true);
    $('#sixAmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#sixAmText').prop('disabled', false);
    $('#sixAmBtn').text('💾');
}
});

$('#sevenAmBtn').click(function (event) { if ($('#sevenAmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('sevenAmTask');
    localStorage.setItem('sevenAmTask', JSON.stringify($('#sevenAmText').val()));
    $('#sevenAmText').prop('disabled', true);
    $('#sevenAmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#sevenAmText').prop('disabled', false);
    $('#sevenAmBtn').text('💾');
}
});

$('#eightAmBtn').click(function (event) { if ($('#eightAmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('eightAmTask');
    localStorage.setItem('eightAmTask', JSON.stringify($('#eightAmText').val()));
    $('#eightAmText').prop('disabled', true);
    $('#eightAmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#eightAmText').prop('disabled', false);
    $('#eightAmBtn').text('💾');
}
});

$('#nineAmBtn').click(function (event) { if ($('#nineAmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('nineAmTask');
    localStorage.setItem('nineAmTask', JSON.stringify($('#nineAmText').val()));
    $('#nineAmText').prop('disabled', true);
    $('#nineAmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#nineAmText').prop('disabled', false);
    $('#nineAmBtn').text('💾');
}
});

$('#tenAmBtn').click(function (event) { if ($('#tenAmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('tenAmTask');
    localStorage.setItem('tenAmTask', JSON.stringify($('#tenAmText').val()));
    $('#tenAmText').prop('disabled', true);
    $('#tenAmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#tenAmText').prop('disabled', false);
    $('#tenAmBtn').text('💾');
}
});

$('#elevenAmBtn').click(function (event) { if ($('#elevenAmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('elevenAmTask');
    localStorage.setItem('elevenAmTask', JSON.stringify($('#elevenAmText').val()));
    $('#elevenAmText').prop('disabled', true);
    $('#elevenAmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#elevenAmText').prop('disabled', false);
    $('#elevenAmBtn').text('💾');
}
});

$('#twelvePmBtn').click(function (event) { if ($('#twelvePmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('twelvePmTask');
    localStorage.setItem('twelvePmTask', JSON.stringify($('#twelvePmText').val()));
    $('#twelvePmText').prop('disabled', true);
    $('#twelvePmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#twelvePmText').prop('disabled', false);
    $('#twelvePmBtn').text('💾');
}
});

$('#onePmBtn').click(function (event) { if ($('#onePmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('onePmTask');
    localStorage.setItem('onePmTask', JSON.stringify($('#onePmText').val()));
    $('#onePmText').prop('disabled', true);
    $('#onePmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#onePmText').prop('disabled', false);
    $('#onePmBtn').text('💾');
}
});

$('#twoPmBtn').click(function (event) { if ($('#twoPmText').prop('disabled') === false) {
        event.preventDefault();
        localStorage.removeItem('twoPmTask');
        localStorage.setItem('twoPmTask', JSON.stringify($('#twoPmText').val()));
        $('#twoPmText').prop('disabled', true);
        $('#twoPmBtn').text('↩️');
    } else {
        event.preventDefault();
        $('#twoPmText').prop('disabled', false);
        $('#twoPmBtn').text('💾');
    }
});

$('#threePmBtn').click(function (event) { if ($('#threePmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('threePmTask');
    localStorage.setItem('threePmTask', JSON.stringify($('#threePmText').val()));
    $('#threePmText').prop('disabled', true);
    $('#threePmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#threePmText').prop('disabled', false);
    $('#threePmBtn').text('💾');
}
});

$('#fourPmBtn').click(function (event) { if ($('#fourPmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('fourPmTask');
    localStorage.setItem('fourPmTask', JSON.stringify($('#fourPmText').val()));
    $('#fourPmText').prop('disabled', true);
    $('#fourPmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#fourPmText').prop('disabled', false);
    $('#fourPmBtn').text('💾');
}
});

$('#fivePmBtn').click(function (event) { if ($('#fivePmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('fivePmTask');
    localStorage.setItem('fivePmTask', JSON.stringify($('#fivePmText').val()));
    $('#fivePmText').prop('disabled', true);
    $('#fivePmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#fivePmText').prop('disabled', false);
    $('#fivePmBtn').text('💾');
}
});

$('#sixPmBtn').click(function (event) { if ($('#sixPmText').prop('disabled') === false) {
    event.preventDefault();
    localStorage.removeItem('sixPmTask');
    localStorage.setItem('sixPmTask', JSON.stringify($('#sixPmText').val()));
    $('#sixPmText').prop('disabled', true);
    $('#sixPmBtn').text('↩️');
} else {
    event.preventDefault();
    $('#sixPmText').prop('disabled', false);
    $('#sixPmBtn').text('💾');
}
});

function refreshTime() {
    $('#currentDay').text(DateTime.now().toFormat('LLL dd, yyyy h:mm:ss a'));
    if (DateTime.now() > sevenAm) {
        $('#sixAm').css("background-color","gray");
        $('#sixAmText').prop('disabled', true);
        $('#sixAmBtn').prop('disabled', true);
        $('#sixAmBtn').addClass(" disabled");
        $('#sixAmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == sixAm.toFormat('HH')) {
        $('#sixAm').css('background-color','yellow');
    }
    if (DateTime.now() > eightAm) {
        $('#sevenAm').css("background-color","gray");
        $('#sevenAmText').prop('disabled', true);
        $('#sevenAmBtn').prop('disabled', true);
        $('#sevenAmBtn').addClass(" disabled");
        $('#sevenAmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == sevenAm.toFormat('HH')) {
        $('#sevenAm').css('background-color','yellow');
    }
    if (DateTime.now() > nineAm) {
        $('#eightAm').css("background-color","gray");
        $('#eightAmText').prop('disabled', true);
        $('#eightAmBtn').prop('disabled', true);
        $('#eightAmBtn').addClass(" disabled");
        $('#eightAmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == eightAm.toFormat('HH')) {
        $('#eightAm').css('background-color','yellow');
    }
    if (DateTime.now() > tenAm) {
        $('#nineAm').css("background-color","gray");
        $('#nineAmText').prop('disabled', true);
        $('#nineAmBtn').prop('disabled', true);
        $('#nineAmBtn').addClass(" disabled");
        $('#nineAmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == nineAm.toFormat('HH')) {
        $('#nineAm').css('background-color','yellow');
    }
    if (DateTime.now() > elevenAm) {
        $('#tenAm').css("background-color","gray");
        $('#tenAmText').prop('disabled', true);
        $('#tenAmBtn').prop('disabled', true);
        $('#tenAmBtn').addClass(" disabled");
        $('#tenAmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == tenAm.toFormat('HH')) {
        $('#tenAm').css('background-color','yellow');
    }
    if (DateTime.now() > twelvePm) {
        $('#elevenAm').css("background-color","gray");
        $('#elevenAmText').prop('disabled', true);
        $('#elevenAmBtn').prop('disabled', true);
        $('#elevenAmBtn').addClass(" disabled");
        $('#elevenAmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == elevenAm.toFormat('HH')) {
        $('#elevenAm').css('background-color','yellow');
    }
    if (DateTime.now() > onePm) {
        $('#twelvePm').css("background-color","gray");
        $('#twelvePmText').prop('disabled', true);
        $('#twelvePmBtn').prop('disabled', true);
        $('#twelvePmBtn').addClass(" disabled");
        $('#twelvePmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == twelvePm.toFormat('HH')) {
        $('#twelvePm').css('background-color','yellow');
    }
    if (DateTime.now() > twoPm) {
        $('#onePm').css("background-color","gray");
        $('#onePmText').prop('disabled', true);
        $('#onePmBtn').prop('disabled', true);
        $('#onePmBtn').addClass(" disabled");
        $('#onePmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == onePm.toFormat('HH')) {
        $('#onePm').css('background-color','yellow');
    }
    if (DateTime.now() > threePm) {
        $('#twoPm').css("background-color","gray");
        $('#twoPmText').prop('disabled', true);
        $('#twoPmBtn').prop('disabled', true);
        $('#twoPmBtn').addClass(" disabled");
        $('#twoPmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == twoPm.toFormat('HH')) {
        $('#twoPm').css('background-color','yellow');
    }
    if (DateTime.now() > fourPm) {
        $('#threePm').css("background-color","gray");
        $('#threePmText').prop('disabled', true);
        $('#threePmBtn').prop('disabled', true);
        $('#threePmBtn').addClass(" disabled");
        $('#threePmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == threePm.toFormat('HH')) {
        $('#threePm').css('background-color','yellow');
    }
    if (DateTime.now() > fivePm) {
        $('#fourPm').css("background-color","gray");
        $('#fourPmText').prop('disabled', true);
        $('#fourPmBtn').prop('disabled', true);
        $('#fourPmBtn').addClass(" disabled");
        $('#fourPmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == fourPm.toFormat('HH')) {
        $('#fourPm').css('background-color','yellow');
    }
    if (DateTime.now() > sixPm) {
        $('#fivePm').css("background-color","gray");
        $('#fivePmText').prop('disabled', true);
        $('#fivePmBtn').prop('disabled', true);
        $('#fivePmBtn').addClass(" disabled");
        $('#fivePmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == fivePm.toFormat('HH')) {
        $('#fivePm').css('background-color','yellow');
    }
    if (DateTime.now() > sevenPm) {
        $('#sixPm').css("background-color","gray");
        $('#sixPmText').prop('disabled', true);
        $('#sixPmBtn').prop('disabled', true);
        $('#sixPmBtn').addClass(" disabled");
        $('#sixPmBtn').text('🚫')
    }
    if (DateTime.now().toFormat('HH') == sixPm.toFormat('HH')) {
        $('#sixPm').css('background-color','yellow');
    }
    



}

setInterval(refreshTime, 1000);