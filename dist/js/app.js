import { NegociacaoController } from "./controllers/negociacao-controller.js";
//import { NegociacoesViem } from "./views/negociacoes-view.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
});
// const negociacoesViem = new NegociacoesViem
// const template = negociacoesViem.template();
// console.log(template);
