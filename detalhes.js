
  
  perfil_jogador ()
  
  const voltar = () => {
    const exit = document.querySelector('footer');
  
    const sai = document.createElement('a');
    sai.href = 'jogadores.html';
    sai.textContent = 'Voltar';
    sai.style.color = '#f1f1f1';
    sai.style.textDecoration = 'none';
    sai.style.fontSize = '16px';
    sai.style.fontWeight = 'bold';
    sai.style.backgroundColor = '#212121';
    sai.style.padding = '10px';
    sai.style.borderRadius = '4px';
    sai.style.margin = '44%'
  
    exit.appendChild(sai);
  };
  
  voltar();