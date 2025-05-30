document.addEventListener('DOMContentLoaded',()=>{
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn')

    const questoes=[
        "O que são enchentes e quais são suas principais causas? ",
        "Quais regiões do Brasil são mais afetadas por enchentes e por quê?",
        "Qual a diferença entre enchente e alagamento?",
        "Quais os principais impactos das enchentes para a população e o meio ambiente?",
        "Que medidas preventivas podem ser adotadas por governos e comunidades para reduzir os danos causados por enchentes?",
        "Como o desmatamento e a urbanização desordenada contribuem para o aumento das enchentes?",
        "Por que é perigoso jogar lixo nas ruas durante chuvas fortes?",
        "Qual órgão no Brasil monitora e alerta sobre riscos de enchentes?",
        "O que devemos fazer se a água começar a subir dentro de casa?",
        "É seguro atravessar ruas alagadas a pé ou de carro?",
    ]
    
    let perguntas = 0;
    const respostas = [];

    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent =questoes[perguntas];
            resposta.value='';
            mensagem.textContent ='';
        }else{
            mostrarResultado();
        }
    }

     function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';

        questoes.forEach((questoes,index)=>{
            const listaItem =document.createElement('li');
            listaItem.innerHTML = `<strong>${questoes}</strong><br>
            Sua Resposta: <span>${respostas[index]}</span>`
            listaResultado.appendChild(listaItem);
        })
     }

     function nextQuestao(){
        const respostaAtual =resposta.value.trim();
        if(respostaAtual ===''){
            mensagem.textContent ="Por favor , digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();

     }
     function reiniciarQuiz(){
        perguntas =0;
        respostas.length =0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden')
        mostrarPergunta();
     }

     proximaPergunta.addEventListener('click',nextQuestao);
     reiniciarBotao.addEventListener('click',reiniciarQuiz);

     mostrarPergunta();

})

//Mudar cor
function trocar(cor){
    document.body.style.background=cor
}