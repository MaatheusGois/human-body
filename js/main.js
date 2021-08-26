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

    $("#signin").click(function () {
        let name = $("#name").val()
        if (name == "") {
            messageErrorName()
            return
        }
        let age = $("#age").val()
        if (age == "") {
            messageErrorAge()
            return
        }
        let sex = $("#sex").val()
        let frequency = $("#frequency").val()
        let date = formattedDate()

        Swal.fire({
            title: 'Enviando a sua resposta...'
        });
        Swal.showLoading();
        saveImage((imageId) => {
            if (!imageId) {
                messageErrorUploadImage()
                return
            }
            const imageUrl = `https://br-upload-images.herokuapp.com/attachment/files/${imageId}`
            // send email
            const body = setupBody(name, age, sex, frequency, date, imageUrl)
            console.log(body)
            sendEmail(body, (response) => {
                if (response.status == 201) {
                    messageSuccess()
                } else {
                    messageErrorMessage()
                }
            })
        })
    });
});