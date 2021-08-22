module.exports = (PDFDocument, blobStream, lorem, iframe) => {
  // create a document and pipe to a blob
  var doc = new PDFDocument();
  var stream = doc.pipe(blobStream());

  const exigenciaLegal = "Esta Ordem de Serviço é uma orientação técnica do SESMT, seguindo o que prevê a Norma Regulamentadora NR - 1 da Portaria Ministerial 3.214 de 08 de junho de 1978, que aprovou as Normas Regulamentadora - NR do Capitulo V, Titulo II, da Consolidação das Leis do Trabalho - CLT, relativas à Segurança e Medicina do Trabalho.";
  const objetivo = "As Normas de Segurança e Medicina do Trabalho foram criadas para proteger o empregado de possíveis acidentes de trabalho, orientando-lhe para a execução correta de suas tarefas diárias, objetivando na prevenção de acidentes e doenças decorrentes do trabalho, de modo a tornar compatível permanentemente o trabalho com a preservação da vida e a promoção da saúde do trabalhador. Portanto é necessário observar e cumprir as ordens de Serviços expedidas pelo SESMT da empresa.";
  const penalidades = "Constitui ATO FALTOSO: A recusa injustificada do não cumprimento da Normas de Segurança e Medicina do Trabalho, Instruções de Serviços, Manual de segurança etc. sendo o funcionário passível de medidas disciplinares previstas na CLT - Consolidações das Leis Trabalhistas";
  const declaracao = "Declaro ter tomado conhecimento dessas orientações e ter sido treinado para o uso adequado dos EPI's e que, durante a execução do meu trabalho, atenderei às mesmas.";
  const assinatura = "Data: _________/_________/_________/             Assinatura do funcionário (a): ___________________________________"
  // const descricaoCargo = "Pellentesque eleifend malesuada purus, quis scelerisque justo molestie quis. Pellentesque pellentesque, arcu at consequat scelerisque, libero tellus eleifend metus, ac placerat lacus elit nec massa. Morbi porttitor orci nec nisi vehicula, eu lacinia nulla dapibus. Nam viverra tortor nec odio finibus convallis. Etiam nulla erat, sollicitudin et lacinia eu, tristique sit amet lorem. Vivamus ornare aliquam nunc a facilisis. Donec in est risus. Donec euismod, dui vel maximus rutrum, metus nulla consequat sem, eget ullamcorper elit erat ut ipsum. Etiam accumsan justo vulputate, gravida metus eget, commodo odio. Suspendisse molestie, turpis ac tincidunt vulputate, lorem orci molestie neque, sed maximus justo arcu id justo. Fusce pretium luctus varius. Nunc sollicitudin mattis eros, quis vestibulum dui malesuada in. Donec vitae lacus a orci sollicitudin fermentum malesuada vitae justo. Praesent scelerisque, erat eu aliquam eleifend, odio metus rutrum diam, vel fringilla elit nibh et enim. In vitae porttitor urna, tempor accumsan erat. Pellentesque eleifend malesuada purus, quis scelerisque justo molestie quis. Pellentesque pellentesque, arcu at consequat scelerisque, libero tellus eleifend metus, ac placerat lacus elit nec massa. Morbi porttitor orci nec nisi vehicula, eu lacinia nulla dapibus. Nam viverra tortor nec odio finibus convallis. Etiam nulla erat, sollicitudin et lacinia eu, tristique sit amet lorem. Vivamus ornare aliquam nunc a facilisis. Donec in est risus. Donec euismod, dui vel maximus rutrum, metus nulla consequat sem, eget ullamcorper elit erat ut ipsum. Etiam accumsan justo vulputate, gravida metus eget, commodo odio. Suspendisse molestie, turpis ac tincidunt vulputate, lorem orci molestie neque, sed maximus justo arcu id justo. Fusce pretium luctus varius. Nunc sollicitudin mattis eros, quis vestibulum dui malesuada in. Donec vitae lacus a orci sollicitudin fermentum malesuada vitae justo. Praesent scelerisque, erat eu aliquam eleifend, odio metus rutrum diam, vel fringilla elit nibh et enim. In vitae porttitor urna, tempor accumsan erat. Pellentesque eleifend malesuada purus, quis scelerisque justo molestie quis. Pellentesque pellentesque, arcu at consequat scelerisque, libero tellus eleifend metus, ac placerat lacus elit nec massa. Morbi porttitor orci nec nisi vehicula, eu lacinia nulla dapibus. Nam viverra tortor nec odio finibus convallis. Etiam nulla erat, sollicitudin et lacinia eu, tristique sit amet lorem. Vivamus ornare aliquam nunc a facilisis. Donec in est risus. Donec euismod, dui vel maximus rutrum, metus nulla consequat sem, eget ullamcorper elit erat ut ipsum. Etiam accumsan justo vulputate, gravida metus eget, commodo odio. Suspendisse molestie, turpis ac tincidunt vulputate, lorem orci molestie neque, sed maximus justo arcu id justo. Fusce pretium luctus varius. Nunc sollicitudin mattis eros, quis vestibulum dui malesuada in. Donec vitae lacus a orci sollicitudin fermentum malesuada vitae justo. Praesent scelerisque, erat eu aliquam eleifend, odio metus rutrum diam, vel fringilla elit nibh et enim. In vitae porttitor urna, tempor accumsan erat. Pellentesque eleifend malesuada purus, quis scelerisque justo molestie quis. Pellentesque pellentesque, arcu at consequat scelerisque, libero tellus eleifend metus, ac placerat lacus elit nec massa. Morbi porttitor orci nec nisi vehicula, eu lacinia nulla dapibus. Nam viverra tortor nec odio finibus convallis. Etiam nulla erat, sollicitudin et lacinia eu, tristique sit amet lorem. Vivamus ornare aliquam nunc a facilisis. Donec in est risus. Donec euismod, dui vel maximus rutrum, metus nulla consequat sem, eget ullamcorper elit erat ut ipsum. Etiam accumsan justo vulputate, gravida metus eget, commodo odio. Suspendisse molestie, turpis ac tincidunt vulputate, lorem orci molestie neque, sed maximus justo arcu id justo. Fusce pretium luctus varius. Nunc sollicitudin mattis eros, quis vestibulum dui malesuada in. Donec vitae lacus a orci sollicitudin fermentum malesuada vitae justo. Praesent scelerisque, erat eu aliquam eleifend, odio metus rutrum diam, vel fringilla elit nibh et enim. In vitae porttitor urna, tempor accumsan erat.";
  doc.image('images/logo_coelhodiniz.jpg', 25, 20, {width: 100})

  doc.registerFont('Roboto', 'fonts/Roboto-Regular.ttf')

  // draw some text
  doc.font('Helvetica-Bold')
  doc.fontSize(14).text('ORDEM DE SERVIÇO (O.S.) POR ATIVIDADE', 0, 20, { width: 650, align: 'center'});
  doc.text('SEGURANÇA DO TRABALHO', 0 ,35, { width: 650, align: 'center'})
  doc.text('SESMT', 0 ,50, { width: 650, align: 'center'})

  doc.fontSize(10).text('Matriz-Gov. Valadares', 25 ,70, { width: 550, align: 'left'})

  doc.moveTo(20, 83) 
    .lineTo(580, 83)
    .stroke();

  doc.fontSize(10).text('FUNCIONÁRIO (A): LEANDRO FONSECA', 25 ,90, { width: 550, align: 'left'})
  doc.fontSize(10).text('CÓDIGO: 810269', 400 , 90, { width: 600, align: 'left'})

  doc.fontSize(10).text('CARGO: ENGENHEIRO DE SEG DO TRABALHO', 25 ,105, { width: 550, align: 'left'})
  doc.fontSize(10).text('SETOR: SESMT', 400 ,105, { width: 550, align: 'left'})

  doc.fontSize(10).text('EXIGÊNCIA LEGAL', 25 ,126, { width: 550, align: 'left'})

  doc.moveTo(20, 137) 
    .lineTo(580, 137)
    .stroke();
    
  doc.font('Helvetica')    
  doc.fontSize(10).text(exigenciaLegal, 25 ,142, { width: 550, align: 'left'})

  doc.font('Helvetica-Bold')
  doc.fontSize(10).text('OBJETIVO', 25 ,188, { width: 550, align: 'justify'})

  doc.moveTo(20, 200) 
    .lineTo(580, 200)
    .stroke();
    
  doc.font('Helvetica')    
  doc.fontSize(10).text(objetivo, 25 ,205, { width: 550, align: 'justify'})

  doc.font('Helvetica-Bold')
  doc.fontSize(10).text('PENALIDADES', 25 ,274, { width: 550, align: 'left'})

  doc.moveTo(20, 285) 
    .lineTo(580, 285)
    .stroke();
    
  doc.font('Helvetica')    
  doc.fontSize(10).text(penalidades, 25 ,292, { width: 550, align: 'justify'})

  doc.font('Helvetica')    
  doc.fontSize(10).text(penalidades, 25 ,292, { width: 550, align: 'justify'})
  
  doc.font('Helvetica-Bold')
  doc.fontSize(10).text('1. DESCRIÇÃO DA FUNÇÃO', 25 ,336, { width: 550, align: 'left'})
    
  doc.font('Helvetica')    
  doc.fontSize(10).text(penalidades, 25 ,356, { width: 550, align: 'justify', paragraphGap: 10, lineGap: 1 })

  doc.font('Helvetica-Bold')
  doc.fontSize(10).text('2. AGENTES ASSOCIADOS À ATIVIDADE', { width: 550, align: 'left', lineGap: 4})
    
  doc.font('Helvetica')    
  doc.fontSize(10).text(penalidades, { width: 550, align: 'justify', paragraphGap: 10, lineGap: 1 })

  doc.font('Helvetica-Bold')
  doc.fontSize(10).text('3. EPI de USO OBRIGATÓRIO', { width: 550, align: 'left', lineGap: 4})
    
  doc.font('Helvetica')    
  doc.fontSize(10).text(penalidades, { width: 550, align: 'justify', paragraphGap: 10, lineGap: 1 })

  doc.font('Helvetica-Bold')
  doc.fontSize(10).text('4. RECOMENDAÇÕES GERAIS', { width: 550, align: 'left', lineGap: 4})
    
  doc.font('Helvetica')    
  doc.fontSize(10).text(penalidades, { width: 550, align: 'justify', paragraphGap: 10, lineGap: 1 })

  doc.font('Helvetica-Bold')
  doc.fontSize(10).text('5. PROCEDIMENTOS EM CASO DE ACIDENTES', { width: 550, align: 'left', lineGap: 4})
    
  doc.font('Helvetica')    
  doc.fontSize(10).text(penalidades, { width: 550, align: 'justify', paragraphGap: 10, lineGap: 1 })

  doc.font('Helvetica-Bold')
  doc.fontSize(10).text('OBSERVAÇÕES', { width: 550, align: 'left', lineGap: 4})
    
  doc.font('Helvetica')    
  doc.fontSize(10).text(penalidades, { width: 550, align: 'justify', paragraphGap: 10, lineGap: 1 })

  doc.font('Helvetica-Bold')
  doc.fontSize(10).text('Declaração', { width: 550, align: 'left', lineGap: 4})
    
  doc.font('Helvetica')    
  doc.fontSize(10).text(declaracao, { width: 550, align: 'justify', paragraphGap: 20, lineGap: 1 })
  
  doc.fontSize(10).text(assinatura, { width: 550, align: 'justify', paragraphGap: 10, lineGap: 1 })



  doc.end();
  stream.on('finish', function () {
    iframe.src = stream.toBlobURL('application/pdf');
  });
}