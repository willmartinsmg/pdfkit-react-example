module.exports = (PDFDocument, blobStream, lorem, iframe) => {
  // create a document and pipe to a blob
  var doc = new PDFDocument({
    pdfVersion: '1.4',
    size: 'A4',
    bufferPages: true
  });
  var stream = doc.pipe(blobStream());
  
  doc.fontSize(8).text('Here is some vector graphics...', 100, 80);

doc.text("Hello World")
doc.addPage();
doc.text("Hello World2")
doc.addPage();
doc.text("Hello World3")

//Global Edits to All Pages (Header/Footer, etc)
let pages = doc.bufferedPageRange();
for (let i = 0; i < pages.count; i++) {
  doc.switchToPage(i);
  
  //Footer: Add page number
  let oldBottomMargin = doc.page.margins.bottom;
  doc.page.margins.bottom = 0 //Dumb: Have to remove bottom margin in order to write into it
  
  doc.text('Documento assinado digitalmente conforme MP nº 2.200-2 de 24/08/2001, que institui a Infraestrutura de Chaves Públicas Brasileira - ICP-Brasil. Protocolo: 202100027111204123456',
  300,
  doc.page.height - (oldBottomMargin/2), // Centered vertically in bottom margin
  { width: 280, align: 'right' });

  doc
    .text(
      "Page: 1 de 12",
      0,
      doc.page.height - (oldBottomMargin/2), // Centered vertically in bottom margin
      { align: 'center' }
    );
  
  doc.page.margins.bottom = oldBottomMargin; // ReProtect bottom margin
}

  doc.end();
  stream.on('finish', function () {
    iframe.src = stream.toBlobURL('application/pdf');
  });
}