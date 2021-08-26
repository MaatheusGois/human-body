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
      "pass": "ouiiytroombobcmf"
    }
  }
  console.log(body)
  axios.post("https://br-microservice-mail.herokuapp.com/emails", body).then(response => callback(response));
}

function setupBody(name, age, sex, frenquency, date, imageURL) {
  return `${name}, enviou uma resposta!<br><br>
            <b>Idade:</b> ${age}<br>
            <b>Sexo:</b> ${sex}<br>
            <b>Data:</b> ${date}<br>
            <b>Frequência do exercício:</b> ${frenquency}<br>
            <b>Imagem com localização das dores:</b> ${imageURL}`
}