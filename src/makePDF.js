module.exports = (PDFDocument, blobStream, lorem, iframe) => {
  // create a document and pipe to a blob
  var doc = new PDFDocument();
  var stream = doc.pipe(blobStream());
  
  const termo = `Recebi este procedimento operacional, juntamente com os Treinamentos de Segurança e as instruções necessárias para a realização de minhas atividades com segurança e estou ciente da obrigatoriedade do cumprimento dessas instruções relativas à Segurança e Medicina do Trabalho, e ainda que, constituirá ato faltoso, passível de punição, a minha recusa no cumprimento destas determinações (Art. 158 V da CLT, lei 6.514 de 22/12/77). Comprometo-me a cumprir todas as determinações impostas nesta OS.`
  const assinatura = '________________________________________ Assinatura do funcionário (a)';
  const assinaturaTecnico = '_________________________________________ DANIELE DE SOUZA ROCHA - TÉC. SEG. DO TRABALHO / MTE - 40200';

  doc.image('images/logo_coelhodiniz.jpg', 25, 20, {width: 100})

  doc.registerFont('Roboto', 'fonts/Roboto-Regular.ttf')

  // draw some text
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

  doc.end();
  stream.on('finish', function () {
    iframe.src = stream.toBlobURL('application/pdf');
  });
}