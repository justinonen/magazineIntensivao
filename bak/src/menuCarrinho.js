function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");  
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");  
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click",fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click",abrirCarrinho);
}

export function adiionarAoCArrinho() {
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
  const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative"> <!-- relative (pai)-->
    <button id="fechar-carrinho" class="absolute top-0 right-2"> <!-- absolute (filho)-->
      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img
      src="./assets/img/produto1.jpg" 
      alt="Carrinho:Camisa Larga com bolsos"
      class="h-24 rounded-lg"
    />
    <div class="py-2">
      <p class="text-slate-900 text-sm">Camisa larga com bolsos</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$70</p>
    </div>
  </article>`;  
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}
