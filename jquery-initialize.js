$("#accordion").accordion();

var availableTags = [
    "Linguistic Model",
    "Narrative",
    "Symbolism",
    "Graphic Model",
    "Context",    
    "Symbology",
    "Symbol"
];
$("#autocomplete").autocomplete({
    source: availableTags
});

$("#button").button();
$("#button-icon").button({
    icon: "ui-icon-gear",
    showLabel: false
});

$("#radioset").controlgroup();

$("#controlgroup").controlgroup();

$("#tabs").tabs();

$("#dialog").dialog({
    autoOpen: false,
    width: 400,
    buttons: [
        {
            text: "Ok",
            click: function () {
                $(this).dialog("close");
            }
        },
        {
            text: "Cancel",
            click: function () {
                $(this).dialog("close");
            }
        }
    ]
});

// Link to open the dialog
$("#dialog-link").click(function (event) {
    $("#dialog").dialog("open");
    event.preventDefault();
});

$("#datepicker").datepicker({
    inline: true
});

$("#slider").slider({
    range: true,
    values: [17, 67]
});

$("#progressbar").progressbar({
    value: 20
});

$("#spinner").spinner({width: 140});

$("#menu").menu();

$("#tooltip").tooltip();

$("#selectmenu").selectmenu({width: 140});

// Hover states on the static widgets
$("#dialog-link, #icons li").hover(
    function () {
        $(this).addClass("ui-state-hover");
    },
    function () {
        $(this).removeClass("ui-state-hover");
    }
);