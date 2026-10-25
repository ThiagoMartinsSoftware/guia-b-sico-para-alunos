
async function fazerPedido(nomeDoBolo) {
    try {
        const resposta = await fetch("http://localhost:3000/pedidos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeDoBolo: nomeDoBolo
            })
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.mensagem);
        }

        alert(dados.mensagem + "\nBolo: " + dados.bolo);

    } catch (erro) {
        alert("Erro ao fazer pedido: " + erro.message);
    }
}



fetch("http://localhost:3000/bolos")
    .then(res => res.json())
    .then(bolos => {
        console.log(bolos);
    });
