function sendEmail(html, callback) {
    const body = {
        "from": "mackenzie.fisio@gmail.com",
        "to": [
          "joanagam00@gmail.com"
        ],
        "subject": "Nova avaliação",
        "text": "Mais um pasciente respondeu seu questionário.",
        "html": html,
        "auth": {
          "user": "mackenzie.fisio@gmail.com",
          "pass": "kormet-typzEb-2jidny"
        }
    }
    axios.post("https://br-microservice-mail.herokuapp.com/emails", body).then(response => callback(response));
}

function setupBody(name, frenquency, date, imageURL) {
    return `${name}, enviou uma resposta!<br><br>
            <b>Data:</b> ${date}<br>
            <b>Frequência do exercício:</b> ${frenquency}<br>
            <b>Imagem com localização das dores:</b> ${imageURL}`
}