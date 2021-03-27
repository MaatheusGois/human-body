
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

function formattedDate(){
    var data = new Date(),
        day  = data.getDate().toString(),
        dayResult = (day.length == 1) ? '0'+day : day,
        month  = (data.getMonth()+1).toString(), 
        monthResult = (month.length == 1) ? '0'+month : month,
        yearResult = data.getFullYear();

    return dayResult+"/"+monthResult+"/"+yearResult;
}