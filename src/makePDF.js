module.exports = (PDFDocument, blobStream, lorem, iframe) => {
  // create a document and pipe to a blob
const doc = new PDFDocument({
  pdfVersion: '1.4',
  size: 'A4'
});

var stream = doc.pipe(blobStream());

const questions = [
	{
		"NUMEMP": 1,
		"TIPCOL": 1,
		"NUMCAD": 150866,
		"TIPAVA": 1,
		"DATAVA": "2022-08-05T03:00:00.000Z",
		"EMPGER": 1,
		"TIPGER": 1,
		"CADGER": 9023,
		"NOMGER": "DIOCLESIO ARAUJO SILVA",
		"EMPENC": 1,
		"TIPENC": 1,
		"CADENC": 9023,
		"NOMENC": "DIOCLESIO ARAUJO SILVA",
		"APRREP": "S",
		"NOMFUN": "MICHAEL FERREIRA DA COSTA",
		"DATADM": "2022-06-10T03:00:00.000Z",
		"CODFIL": 15,
		"NOMCCU": "Hortifruti",
		"TITCAR": "AUXILIAR DE HORTIFRUTI"
	},
	[
		{
			"CODPER": 1,
			"CODNOT": 3,
			"DESRES": null,
			"DESPER": "Relacionamento com liderança e equipe de trabalho",
			"CODASS": 1,
			"DESASS": "Integração"
		},
		{
			"CODPER": 2,
			"CODNOT": 3,
			"DESRES": null,
			"DESPER": "Absenteísmo (faltas, atrasos ou saídas mais cedo)",
			"CODASS": 1,
			"DESASS": "Integração"
		},
		{
			"CODPER": 3,
			"CODNOT": 3,
			"DESRES": null,
			"DESPER": "Adaptação aos processos de trabalho (Ex. Advertências)",
			"CODASS": 2,
			"DESASS": "Adaptação"
		},
		{
			"CODPER": 4,
			"CODNOT": 3,
			"DESRES": null,
			"DESPER": "Interesse pelo trabalho",
			"CODASS": 2,
			"DESASS": "Adaptação"
		},
		{
			"CODPER": 5,
			"CODNOT": 3,
			"DESRES": null,
			"DESPER": "Desempenho na função (cumprimento, rotina, aprendizado)",
			"CODASS": 3,
			"DESASS": "Desenvolvimento"
		},
		{
			"CODPER": 6,
			"CODNOT": 3,
			"DESRES": null,
			"DESPER": "Produtividade (velocidade x entrega de resultados)",
			"CODASS": 3,
			"DESASS": "Desenvolvimento"
		},
		{
			"CODPER": 7,
			"CODNOT": 3,
			"DESRES": null,
			"DESPER": "Qualidade atendimento ao cliente (interno e externo)",
			"CODASS": 4,
			"DESASS": "Qualidade"
		},
		{
			"CODPER": 8,
			"CODNOT": 3,
			"DESRES": null,
			"DESPER": "Qualidade do serviço prestado",
			"CODASS": 4,
			"DESASS": "Qualidade"
		},
		{
			"CODPER": 9,
			"CODNOT": 3,
			"DESRES": null,
			"DESPER": "Determinação, Planejamento, Disciplina, Ética",
			"CODASS": 5,
			"DESASS": "Valores"
		},
		{
			"CODPER": 10,
			"CODNOT": 3,
			"DESRES": null,
			"DESPER": "Disponibilidade, Simplicidade, Fraqueza",
			"CODASS": 5,
			"DESASS": "Valores"
		},
		{
			"CODPER": 11,
			"CODNOT": 0,
			"DESRES": " asf",
			"DESPER": "Observações sobre o(a) colaborador(a) avaliado(a)",
			"CODASS": 6,
			"DESASS": "Observações"
		},
		{
			"CODPER": 12,
			"CODNOT": 0,
			"DESRES": " asdfa",
			"DESPER": "Comentários do(a) colaborador(a) avaliado(a)",
			"CODASS": 6,
			"DESASS": "Observações"
		}
	],
	{
		"NOMGER": "DIOCLESIO ARAUJO SILVA"
	},
	{
		"NOMENC": "DIOCLESIO ARAUJO SILVA"
	}
]

doc.image('images/logo_coelhodiniz.jpg', 25, 20, { width: 100 });

// INICIO
doc.font('Helvetica-Bold')
    doc.fontSize(12).text('AVALIAÇÃO PERÍODO DE EXPERIÊNCIA', 0, 20, { width: 650, align: 'center'});
    
    doc.fontSize(12).text('DADOS DO AVALIADO', 0, 60, { width: 550, align: 'center'});
    
    doc.moveTo(20, 78) 
      .lineTo(580, 78)
      .stroke();

    doc.fontSize(10).text(`COLABORADOR (A): ${questions[0].NOMFUN}`, 25 ,85, { width: 550, align: 'left'})
    doc.text(`CÓDIGO: ${questions[0].NUMCAD}`, 400 , 85, { width: 600, align: 'left'})
  
    doc.text(`CARGO: ${questions[0].TITCAR}`, 25, 103, { width: 550})
    doc.text(`SETOR: ${questions[0].NOMCCU}`, 400 ,103, { width: 550, align: 'left'})
  
    // doc.text(`ADMISSÃO: ${format(questions[0].DATADM, 'dd/MM/yyyy')}`, 25 ,115, { width: 550, align: 'left'})
    doc.text(`ADMISSÃO: 20/07/2022`, 25 ,119, { width: 550, align: 'left'})
    doc.text(`LOJA: ${questions[0].CODFIL}`, 400 ,119, { width: 550, align: 'left'})
    
    doc.text(`ENCARREGADO: ${questions[0].NOMENC}`, 25 , 136, { width: 550, align: 'left'})
    
    doc.text(`GERENTE: ${questions[0].NOMGER}`, 25 , 152, { width: 550, align: 'left'})
  
    doc.moveDown();
    // doc.text(`DATA DA AVALIAÇÃO: ${format(questions[0].DATAVA, 'dd/MM/yyyy')}`, 25 ,115, { width: 550, align: 'left'})
    doc.text(`DATA DA AVALIAÇÃO: 11/08/2022`, { width: 550, align: 'left'})
    doc.text(`AVALIAÇÃO: ${questions[0].APRREP === 'S' ? 'APROVADO' : 'REPROVADO'}`, { width: 550, align: 'left'})
    
    doc.moveTo(20, 202) 
      .lineTo(580, 202)
      .stroke();

    doc.moveDown();

    doc.text(``, { width: 550, align: 'left', paragraphGap: 4})
    
    // Fim de cabeçalho
    
    let note = ''
    let xcodass = 0
    let codass = 0
    let y1 = 155
    let y2 = 180
    
    if (questions) {
        questions[1].map(
          (item) =>
            `${y1 += 35}` +
            `${y2 += 40}` +
            `${listQuestions(item, y1, y2)}`
        );
    }
    
    function listQuestions (item, y1, y2) {
        codass = item.CODASS
        
        doc.font('Helvetica-Bold')
        if (codass !== xcodass) {
            doc.text(`${item.DESASS.toUpperCase()}`, { width: 550, align: 'left', paragraphGap: 4})
        }    
        
        if (item.CODNOT === 1) {
            note = 'Não atende'
        } else if (item.CODNOT === 2) {
            note = 'Atende Parcialmente'
        } else if (item.CODNOT === 3) {
            note = 'Atende Plenamente'
        } else if (item.CODNOT === 4) {
            note = 'Supera as Expectativas'
        } else if (item.CODNOT === 0) {
            note = ''
        }
        
        if (item.CODPER >= 11) {
            note = item.DESRES
        }
        
        doc.font('Helvetica')
        doc.text(`${item.DESPER}: ${note}`,  { width: 550, align: 'left', paragraphGap: 4})
        
        doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})
        
        xcodass = item.CODASS
    }
    
    doc.text(' ', { width: 550, align: 'justify', paragraphGap: 0})
    
    // y2 += 80
    // doc.moveTo(20, y2) 
    //   .lineTo(580, y2)
    //   .stroke();
      
    doc.moveDown();
    doc.moveDown();
    doc.text(`Assinatura Encarregado (a): ______________________________________________________`, { width: 550, align: 'left', paragraphGap: 4})

    doc.moveDown();
    doc.moveDown();
    doc.text(`Assinatura Gerente: ______________________________________________________`, { width: 550, align: 'left', paragraphGap: 4})
    
    doc.moveDown();
    doc.moveDown();
    doc.text(`Assinatura Colaborador (a): ______________________________________________________`, { width: 550, align: 'left', paragraphGap: 4})

    // FIM


doc.stroke();

doc.end();

stream.on('finish', function () {
  iframe.src = stream.toBlobURL('application/pdf');
});
}