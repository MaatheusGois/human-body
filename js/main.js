var color1 = "#FFFFFF";
var color2 = "#F7D9DE";
var color3 = "#F3B9B3";
var color4 = "#F19894";
var color5 = "#ED7175";

$(document).ready(function () {
    $("svg").each(function () {
        var picture = this;
        $.each(picture.childNodes, function (i, e) {
            $(e).on("click", function (e) {
                let newColor = changeState($(this).attr("fill"))
                $(this).attr("fill", newColor);
            });
        });
    });

    function changeState(color) {
        switch (color) {
            case color1:
                return color2
            case "white":
                return color2
            case "none":
                return color2

            case color2:
                return color3
            case color3:
                return color4
            case color4:
                return color5
            case color5:
                return color1
            default:
                return color
        }
    }
});