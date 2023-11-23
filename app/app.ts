import { NegociacaoController } from "./controllers/negociacao-controller.js";
//import { NegociacoesViem } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        controller.adiciona();
    });
    
} else {
    throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe.");
}    

// const negociacoesViem = new NegociacoesViem
// const template = negociacoesViem.template();
// console.log(template);