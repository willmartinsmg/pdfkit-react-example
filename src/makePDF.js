module.exports = (PDFDocument, blobStream, lorem, iframe) => {
  // create a document and pipe to a blob
  var doc = new PDFDocument({layout: 'landscape'});
  var stream = doc.pipe(blobStream());

  doc.image('images/fundo_certificado.png', 0,0, {width: doc.page.width, height: doc.page.height});

  doc.image('images/logo_coelhodiniz.jpg', 25, 20, {width: 220})
  // doc.image('images/logo_sesmt.png', 25, 400, {width: 220})

  doc.registerFont('Roboto', 'fonts/Roboto-Regular.ttf')

  // draw some text
  doc.font('Helvetica-Bold')
  doc.fontSize(18).text('Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho', 60, 80);
  doc.text('SESMT', 0 ,112, { width: 800, align: 'center'})

  doc.font('Helvetica')
  doc.text('Certifica que', 0 ,138, { width: 800, align: 'center'})

  doc.font('Helvetica-Bold')
  doc.text('DAVI GARCIA PEREIRA DE ASSIS', 0 ,168, { width: 800, align: 'center'})

  doc.font('Helvetica')
  doc.text('participou do Treinamento ', 0 ,196, { width: 800, align: 'center'})

  doc.font('Helvetica-Bold')
  doc.text('EPI(Equipamento de Proteção Individual)', 0 ,260, { width: 800, align: 'center'})

  doc.font('Helvetica')
  doc.text('realizado pelo Supermercado Coelho Diniz no período de', 0 ,290, { width: 800, align: 'center'})
  doc.text('19/02/2021 até 19/02/2021 com carga horária de 001:00 .', 0 ,320, { width: 800, align: 'center'})

  doc.text('Caratinga, 19 de Fevereiro de 2021', 0, 380, { width: 700, align: 'right'})

  doc.moveTo(250, 450) 
   .lineTo(550, 450)
   .stroke();
 
doc.font('Helvetica-Bold')
doc.fontSize(14).text('DAVI GARCIA PEREIRA DE ASSIS ', 0 ,460, { width: 800, align: 'center'})


  doc.end();
  stream.on('finish', function () {
    iframe.src = stream.toBlobURL('application/pdf');
  });
}