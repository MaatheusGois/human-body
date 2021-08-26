function saveImage(callback) {
    var svg = document.querySelector("svg");
    var svgData = new XMLSerializer().serializeToString(svg);
    uploadImage("data:image/svg+xml;base64," + btoa(svgData), (response) => {
        let answer = response.data[0].id
        callback(answer)
    })
}

function uploadImage(pngBase64, callback) {
    // Split the base64 string in data and contentType
    var block = pngBase64.split(";");
    // Get the content type of the image
    var contentType = block[0].split(":")[1];// In this case "image/gif"
    // get the real base64 content of the file
    var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

    // Convert it to a blob to upload
    var blob = b64toBlob(realData, contentType);

    const formData = new FormData();

    // 'fileimage' é o campo que o 'multer' procura o arquivo de imagem.
    formData.append("file", blob);

    axios.post("https://br-face-images.herokuapp.com/attachment/files", formData, {
        headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        }
    }).then(response => callback(response));
}

/**
 * Convert a base64 string in a Blob according to the data and contentType.
 * 
 * @param b64Data {String} Pure base64 string without contentType
 * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
 * @param sliceSize {Int} SliceSize to process the byteCharacters
 * @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
 * @return Blob
 */
function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
}