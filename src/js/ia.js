'use strict'

const button = document.getElementById('you')

const consultGemini = async (question) => {

    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle;

    const resquestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(resquestData)
    }

    await fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        const respostaTextIA = data.condidates[0].content.parts[0].text
        respostaTextIA(respostaTextIA)
    })

    const inputResposta = document.getElementById('respotaNatalia')
    inputResposta.textContent = respostaTextIA
}



button.addEventListener('click', () => {
    const question = document.getElementById('question').value
    consultGemini(question)
})