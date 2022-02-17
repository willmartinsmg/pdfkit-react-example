module.exports = (PDFDocument, blobStream, lorem, iframe) => {
  // create a document and pipe to a blob
  var doc = new PDFDocument({
    pdfVersion: '1.4',
    size: 'A4'
  });
  var stream = doc.pipe(blobStream());
  
  const termo = `Recebi este procedimento operacional, juntamente com os Treinamentos de Segurança e as instruções necessárias para a realização de minhas atividades com segurança e estou ciente da obrigatoriedade do cumprimento dessas instruções relativas à Segurança e Medicina do Trabalho, e ainda que, constituirá ato faltoso, passível de punição, a minha recusa no cumprimento destas determinações (Art. 158 V da CLT, lei 6.514 de 22/12/77). Comprometo-me a cumprir todas as determinações impostas nesta OS.`
  const assinatura = '________________________________________ Assinatura do funcionário (a)';
  // const assinaturaTecnico = '_________________________________________ DANIELE DE SOUZA ROCHA - TÉC. SEG. DO TRABALHO / MTE - 40200';
  const texto = `Proteção fixa da zona de perigo da lamina regulador de corte, empurrador, chave liga/desliga protegida, botão de emergência, botão reset.`
  const declaracaoAutorizacao = `Declaro que fui treinado para executar a autorização deste trabalho, quanto às técnicas operacionais, as medidas preventivas a serem cumpridas por mim durante toda a fase do trabalho e as medidas de emergência a serem adotadas em caso de necessidade, tendo em vista ser do meu conhecimento os riscos envolvidos.`
  const termoAutorizacao = `Esta autorização certifica que inspecionei pessoalmente a área, equipamentos e adjacências onde este trabalho é realizado, sendo conhecedor dos riscos existentes e assumo o compromisso de somente iniciar o trabalho após cumprir todas as medidas preventivas registradas neste documento.`
  
  doc.registerFont('Roboto', 'fonts/Roboto-Regular.ttf')

  // --------------------------
  // DOCUMENTO: PROCEDIMENTOS DE SEGURAÇA
  // --------------------------
  // Início de cabeçalho
  doc.image('images/logo_coelhodiniz.jpg', 25, 20, {width: 100})

  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('PROCEDIMENTOS DE SEGURANÇA NO MANUSEIO', 0, 20, { width: 650, align: 'center'});
  doc.text('E OPERAÇÃO DE MÁQUINAS E EQUIPAMENTOS', 0 ,35, { width: 650, align: 'center'})

  doc.moveTo(20, 65) 
    .lineTo(580, 65)
    .stroke();

  doc.fontSize(10).text('FUNCIONÁRIO (A): LEANDRO FONSECA', 25 ,70, { width: 550, align: 'left'})
  doc.text('CÓDIGO: 810269', 400 , 70, { width: 600, align: 'left'})

  doc.text('CARGO: ENGENHEIRO DE SEG DO TRABALHO', 25 ,85, { width: 550, align: 'left'})
  doc.text('SETOR: SESMT', 400 ,85, { width: 550, align: 'left'})

  doc.text('NOVO CARGO: ENGENHEIRO DE SEG DO TRABALHO', 25 ,100, { width: 550, align: 'left'})
  doc.text('SETOR: SESMT', 400 , 100, { width: 550, align: 'left'})

  doc.text(' ', 25, 95, { width: 550, align: 'justify', paragraphGap: 10, lineGap: 4})
  
  doc.moveTo(20, 113) 
    .lineTo(580, 113)
    .stroke();

  // Fim de cabeçalho

  doc.text('EQUIPAMENTO: Fatiador de Frios', 25 ,120, { width: 550, align: 'left', paragraphGap: 4})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('OBJETIVO', { width: 550, align: 'left', paragraphGap: 4})
    
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('DESCRIÇÃO DO EQUIPAMENTO', { width: 550, align: 'left', paragraphGap: 4})
    
  doc.font('Helvetica')    
  doc.text(lorem + lorem, { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('FUNÇÃO DO EQUIPAMENTO', { width: 550, align: 'left', paragraphGap: 4})
    
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('OPERAÇÃO DO EQUIPAMENTO', { width: 550, align: 'left', paragraphGap: 4})
    
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('PROIBIÇÕES', { width: 550, align: 'left', paragraphGap: 4})
    
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('VERIFICAÇÕES A SEREM REALIZADAS NO EQUIPAMENTO ANTES DO INÍCIO DA OPERAÇÃO', { width: 550, align: 'left', paragraphGap: 4})
    
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('VERIFICAÇÕES A SEREM REALIZADAS NO EQUIPAMENTO ANTES DO INÍCIO DA OPERAÇÃO', { width: 550, align: 'left', paragraphGap: 4})
    
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('CUIDADOS A SEREM OBSERVADOS PARA LIMPEZA E MANUTENÇÃO DO EQUIPAMENTO', { width: 550, align: 'left', paragraphGap: 4})
    
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('DISPOSITIVOS DE PROTEÇÃO', { width: 550, align: 'left', paragraphGap: 4})
    
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('Termo de Recebimento e Compromisso', { width: 550, align: 'left', paragraphGap: 4})
    
  doc.font('Helvetica')    
  doc.text(termo, { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(`Governador Valadares, 25 de Janeiro de 2021.`, { width: 550, align: 'justify', paragraphGap: 30})

  doc.text('_________________________________________', {width: 550, align: 'center'})
  doc.text('CICLANO DA SILVA JUNIOR SOUZA ', {width: 550, align: 'center'})

  // --------------------------
  // DOCUMENTO: ORDEM DE SERVIÇO POR ATIVIDADE
  // --------------------------
  doc.addPage({size: 'A4'});
  // Início de cabeçalho
  doc.image('images/logo_coelhodiniz.jpg', 25, 20, {width: 100})

  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('ORDEM DE SERVIÇOS (O.S.)', 0, 20, { width: 650, align: 'center'});
  doc.text('POR ATIVIDADE', 0 ,35, { width: 650, align: 'center'})

  doc.moveTo(20, 65) 
    .lineTo(580, 65)
    .stroke();

  doc.fontSize(10).text('FUNCIONÁRIO (A): LEANDRO FONSECA', 25 ,70, { width: 550, align: 'left'})
  doc.text('CÓDIGO: 810269', 400 , 70, { width: 600, align: 'left'})

  doc.text('CARGO: ENGENHEIRO DE SEG DO TRABALHO', 25 ,85, { width: 550, align: 'left'})
  doc.text('SETOR: SESMT', 400 ,85, { width: 550, align: 'left'})

  doc.text('NOVO CARGO: ENGENHEIRO DE SEG DO TRABALHO', 25 ,100, { width: 550, align: 'left'})
  doc.text('SETOR: SESMT', 400 , 100, { width: 550, align: 'left'})

  doc.text(' ', 25, 95, { width: 550, align: 'justify', paragraphGap: 10, lineGap: 4})
  
  doc.moveTo(20, 113) 
    .lineTo(580, 113)
    .stroke();

  // Fim de cabeçalho

  doc.text('EQUIPAMENTO: Fatiador de Frios', 25 ,120, { width: 550, align: 'left', paragraphGap: 4})
  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('Descrição do Serviço', { width: 550, align: 'left', paragraphGap: 4})
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})
  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('Riscos Associados', { width: 550, align: 'left', paragraphGap: 4})
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})
  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('Medidas Preventivas', { width: 550, align: 'left', paragraphGap: 4})
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})
  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('EPI/EPC de uso obrigatório', { width: 550, align: 'left', paragraphGap: 4})
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})
  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('Obrigações do Empregado', { width: 550, align: 'left', paragraphGap: 4})
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})
  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('Probições', { width: 550, align: 'left', paragraphGap: 4})
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})
  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.font('Helvetica-Bold')
  doc.text('Termo de Recebimento e Compromisso', { width: 550, align: 'left', paragraphGap: 4})
  doc.font('Helvetica')    
  doc.text(lorem, { width: 550, align: 'justify', paragraphGap: 0})
  doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})

  doc.text(`Governador Valadares, 25 de Janeiro de 2021.`, { width: 550, align: 'justify', paragraphGap: 30})

  doc.text('_________________________________________', {width: 550, align: 'center'})
  doc.text('CICLANO DA SILVA JUNIOR SOUZA ', {width: 550, align: 'center'})

  doc.addPage({size: 'A4', layout: 'landscape'});
  
  // --------------------------
  // DOCUMENTO: AUTORIZAÇÃO PARA OPERADORES DE MÁQUINAS NR12
  // --------------------------
  
  // Início de cabeçalho
  doc.image('images/logo_coelhodiniz.jpg', 25, 20, {width: 100})

  doc.font('Helvetica-Bold')
  doc.fontSize(16).text('AUTORIZAÇÃO PARA OPERADORES DE ', 0, 20, { width: 810, align: 'center' });
  doc.text('MÁQUINAS E EQUIPAMENTOS - NR12', 0 ,35, { width: 810, align: 'center'})

  doc.moveTo(20, 65) 
    .lineTo(810, 65)
    .stroke();

  // MARGENS DA PÁGINA
  doc.lineJoin('miter')
   .rect(20, 15, 790, 565)
   .stroke();

  // BORDAS DA PRIMEIRA LINHA
  doc.lineJoin('miter')
  .rect(20, 113, 200, 56)
  .stroke();

  doc.lineJoin('miter')
  .rect(220, 113, 200, 56)
  .stroke();

  doc.lineJoin('miter')
  .rect(420, 113, 200, 56)
  .stroke();

  doc.lineJoin('miter')
  .rect(620, 113, 189, 56)
  .stroke();

  // BORDAS DA SEGUNDA LINHA
  doc.lineJoin('miter')
  .rect(20, 169, 790, 90)
  .stroke();

  // BORDAS DA TERCEIRA LINHA
  doc.lineJoin('miter')
  .rect(20, 259, 240, 110)
  .stroke();

  doc.lineJoin('miter')
  .rect(260, 259, 240, 110)
  .stroke();

  doc.lineJoin('miter')
  .rect(500, 259, 220, 110)
  .stroke();

  doc.lineJoin('miter')
  .rect(720, 259, 90, 110)
  .stroke();

  // BORDAS DA QUARTA LINHA
  doc.lineJoin('miter')
  .rect(20, 369, 790, 90)
  .stroke();

  doc.fontSize(10).text('FUNCIONÁRIO (A): LEANDRO FONSECA', 25 ,70, { width: 550, align: 'left'})
  doc.text('CÓDIGO: 810269', 400 , 70, { width: 600, align: 'left'})

  doc.text('CARGO: ENGENHEIRO DE SEG DO TRABALHO', 25 ,85, { width: 550, align: 'left'})
  doc.text('SETOR: SESMT', 400 ,85, { width: 550, align: 'left'})

  doc.text('NOVO CARGO: ENGENHEIRO DE SEG DO TRABALHO', 25 ,100, { width: 550, align: 'left'})
  doc.text('SETOR: SESMT', 400 , 100, { width: 550, align: 'left'})

  doc.text(' ', 25, 95, { width: 550, align: 'justify', paragraphGap: 10, lineGap: 4})

  // Primeira linha
  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Loja', 0, 117, { width: 230, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(12).text('01 - Matriz - Gov. Valadares', 0, 137, { width: 230, align: 'center'});
  
  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Setor', 200, 117, { width: 230, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(12).text('HAF - Frios', 200, 137, { width: 230, align: 'center'});

  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Máquina/Equipamento', 400, 117, { width: 230, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(12).text('Fatiador de Frios', 400, 137, { width: 230, align: 'center'});

  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Localização no Croqui', 600, 117, { width: 230, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(12).text('', 600, 137, { width: 230, align: 'center'});

  // Segunda linha
  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Descrição do Trabalho', 0, 174, { width: 770, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(10).text(termo, 30, 194, { width: 770, align: 'left'});

  // Terceira linha
  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Riscos', 0, 265, { width: 270, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(10).text(texto, 25, 280, { width: 230, align: 'justify'});

  
  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Causas', 230, 265, { width: 280, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(10).text(texto, 265, 280, { width: 230, align: 'justify'});

  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Medidas Preventivas', 470, 265, { width: 280, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(10).text(texto, 505, 280, { width: 210, align: 'justify'});

  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Conformidade', 624, 264, { width: 280, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(12).text('S', 734, 290, { width: 50, align: 'center'});

  // Quarta Linha
  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Declaração', 20, 375, { width: 480, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(10).text(declaracaoAutorizacao, 25, 395, { width: 480, align: 'justify'});

  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Assinatura', 524, 374, { width: 280, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(12).text(assinatura, 534, 420, { width: 280, align: 'center'});

  // Quinta Linha
  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Responsável/Setor', 20, 465, { width: 220, align: 'center'});

  doc.font('Helvetica-Bold')
  doc.fontSize(12).text('Termo de Responsabilidade pelo Trabalho', 160, 465, { width: 480, align: 'center'});

  doc.font('Helvetica')
  doc.fontSize(10).text(termoAutorizacao, 280, 485, { width: 520, align: 'justify'});

  doc.end();
  stream.on('finish', function () {
    iframe.src = stream.toBlobURL('application/pdf');
  });
}