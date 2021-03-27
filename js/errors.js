
// ERRORS

function messageErrorName() {
    Swal.close()
    Swal.fire(
        'Opsss',
        'Preencha seu nome!',
        'error'
    )
}

function messageErrorUploadImage() {
    Swal.close()
    Swal.fire(
        'Opss...',
        'Houve uma falha ao enviar a imagem, tente novamente mais tarde',
        'error'
    )
}

function messageErrorMessage() {
    Swal.close()
    Swal.fire(
        'Opss...',
        'Houve uma falha ao enviar a mensagem, tente novamente mais tarde',
        'error'
    )
}

// SUCCESS

function messageSuccess() {
    Swal.close()
    Swal.fire(
        'Questionário enviado!',
        'Parabéns, você acaba de enviar sua avaliação',
        'success'
    )
}