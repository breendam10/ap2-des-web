


const pega_json = async (caminho) => {
  const resposta = await fetch(caminho);
  const dados = await resposta.json();
  return dados;
}


const cria_cartao = (entrada) => {  

  const main = document.querySelector('main');
  main.style.display = 'flex';
  main.style.gap = '20px';
  main.style.flexWrap = 'wrap';
  main.style.justifyContent = 'center';


  const container_atleta = document.createElement('article');
  container_atleta.style.width = '250px';
  container_atleta.style.height = '450px'
  container_atleta.style.backgroundColor = '#9E9E9E';
  container_atleta.style.textAlign = 'center';
  container_atleta.style.margin = '10px';  
  container_atleta.style.borderRadius = '3px';

  container_atleta.dataset.id = entrada.id;
  container_atleta.dataset.altura = entrada.altura;
  container_atleta.dataset.nome_completo = entrada.nome_completo;
  container_atleta.dataset.nascimento = entrada.nascimento;
  container_atleta.dataset.descricao = entrada.descricao;

  const titulo = document.createElement('h3');
  titulo.innerHTML = entrada.nome;
  const imagem = document.createElement('img');
  imagem.src = entrada.imagem;
  imagem.alt = `foto de ${entrada.nome}`;
  imagem.style.margin = '0px 0px 8px 0px';

  const saiba_mais = document.createElement('button');
  saiba_mais.textContent = 'Saiba mais';
  saiba_mais.style.fontWeight ='bold'
  saiba_mais.style.backgroundColor = '#D9D9D9';
  saiba_mais.style.padding = '6px 25px';
  saiba_mais.style.borderRadius = '5px';
  saiba_mais.onclick = manipulaClick;

  container_atleta.appendChild(titulo);
  container_atleta.appendChild(imagem);
  container_atleta.appendChild(saiba_mais);

  main.appendChild(container_atleta);

}

const manipulaClick = (e) => {
  const artigo = e.target.closest('article');

  document.cookie = `id=${artigo.dataset.id}`;
  document.cookie = `altura=${artigo.dataset.altura}`;
  document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
  document.cookie = `nascimento=${artigo.dataset.nascimento}`;
  document.cookie = `descricao=${artigo.dataset.descricao}`

  localStorage.setItem('id', artigo.dataset.id);
  localStorage.setItem('altura', artigo.dataset.altura);
  localStorage.setItem('nome_completo', artigo.dataset.nome_completo);
  localStorage.setItem('nascimento', artigo.dataset.nascimento);
  localStorage.setItem('descricao', artigo.dataset.descricao)


  window.location = `detalhes.html?id=${artigo.dataset.id}`;

}

const acha_cookie = (chave) => {
  const lista_de_cookies = document.cookie.split("; ");
  const procurado = lista_de_cookies.find(
    (e)=> e.startsWith(chave));
  return procurado.split('=')[1];
}
