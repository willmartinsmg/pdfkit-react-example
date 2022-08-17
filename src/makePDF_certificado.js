module.exports = (PDFDocument, blobStream, lorem, iframe) => {
  // create a document and pipe to a blob
  const doc = new PDFDocument({
    pdfVersion: '1.4',
    size: 'A4',
    layout: 'landscape',
    bufferPages: true,
  });

  var stream = doc.pipe(blobStream());

  const nompes = 'FULANO DA SILVA';
  const nomcid = 'Governador Valadares';

  const carhor = '16';

  const lorem1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  doc.image('images/fundo_certificado.png', 0, 0, {
    width: doc.page.width,
    height: doc.page.height,
  });

  doc.image('images/logo_coelhodiniz.jpg', 25, 20, { width: 220 });
  // doc.image('images/logo_sesmt.png', 25, 400, {width: 220})

  doc.registerFont('Roboto', 'fonts/Roboto-Regular.ttf');

  // draw some text
  doc.font('Helvetica-Bold');
  doc
    .fontSize(18)
    .text(
      'Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho',
      60,
      80,
    );
  doc.text('SESMT', 0, 112, { width: 800, align: 'center' });

  doc.font('Helvetica');
  doc.text('Certifica que', 0, 138, { width: 800, align: 'center' });

  doc.font('Helvetica-Bold');
  doc.text(`${nompes}`, 0, 168, {
    width: 800,
    align: 'center',
  });

  doc.font('Helvetica');
  doc.text('participou do Treinamento ', 0, 196, {
    width: 800,
    align: 'center',
  });

  doc.font('Helvetica-Bold');
  doc.text(`CIPA`, 0, 260, {
    width: 800,
    align: 'center',
  });

  doc.font('Helvetica');
  doc.text('realizado pelo Supermercado Coelho Diniz no período de', 0, 290, {
    width: 800,
    align: 'center',
  });
  doc.text(
    `16/02/2022 até '16/02/2022' com carga horária de ${carhor} .`,
    0,
    320,
    { width: 800, align: 'center' },
  );

  doc.text(`${nomcid}, ________/_________/_____________`, 0, 380, {
    width: 700,
    align: 'right',
  });
  // doc.text(assinatura, 0, 380, {
  //   width: 700,
  //   align: 'right',
  // });

  doc
    .moveTo(250, 450)
    .lineTo(550, 450)
    .stroke();

  doc.font('Helvetica-Bold');
  doc.fontSize(14).text(`${nompes}`, 0, 460, {
    width: 800,
    align: 'center',
  });

  doc.addPage();
  doc.lineJoin('miter')
   .rect(15, 15, 810, 570)
   .stroke();

   doc.fontSize(16).text('Conteúdo Programático', 30, 30, {width: 780, align: 'left'})

   doc.font('Helvetica');
   doc.fontSize(14).text(lorem1, 30, 60, {width: 780, align: 'left'})

   doc.font('Helvetica-Bold');
   doc.fontSize(16).text('Instrutores', 30, 450, {width: 780, align: 'left'})

   doc.font('Helvetica');
   doc.fontSize(14).text('Ciclano Silva', 30, 480, {width: 780, align: 'left'})



  doc.fontSize(8).font('Helvetica');
  let pages = doc.bufferedPageRange();
  for (let i = 0; i < pages.count; i++) {
    doc.switchToPage(i);

    //Footer: Add page number
    let oldBottomMargin = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;

    doc.text(
      `Documento assinado digitalmente conforme MP nº 2.200-2 de 24/08/2001, que institui a Infraestrutura de Chaves Públicas Brasileira - ICP-Brasil. Protocolo: 1231231231231312`,
      540,
      doc.page.height - oldBottomMargin / 2, // Centered vertically in bottom margin
      { width: 280, align: 'right' },
    );
    // doc.text(
    //   `Página: ${i + 1} de ${pages.count}`,
    //   0,
    //   doc.page.height - oldBottomMargin / 2,
    //   { align: 'center' },
    // );
    doc.page.margins.bottom = oldBottomMargin; // ReProtect bottom margin
  }

  doc.stroke();

  doc.end();

  stream.on('finish', function () {
    iframe.src = stream.toBlobURL('application/pdf');
  });
}