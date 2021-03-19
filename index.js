const faker = require('faker');
const fakerBr = require('faker-br');

// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000;
server.listen(port, () => {
  const data = { batches: {content: [], message: "Ação Efetuada com Sucesso", typeResult: 1}, batch: {
    content: {
      id: faker.random.uuid(), 
      companyName: faker.helpers.replaceSymbols("????"),
      date: faker.date.recent(),
      processedBillings: faker.random.number({min:0, max: 500}), 
      totalRunningBillings: faker.random.number({min: 500, max: 1000}),
      batchBillingType: faker.helpers.randomize(["Mensalidade", "Anual"]),
      billings: [],
    },
    message: "Ação Efetuada com Sucesso",
    typeResult: 1,
  }  };

  for (let i = 0; i < 10; i++) {
    data.batches.content.push({ 
      id: faker.random.uuid(), 
      companyName: faker.helpers.replaceSymbols("????"),
      date: faker.date.recent(),
      processedBillings: faker.random.number({min:0, max: 500}), 
      totalRunningBillings: faker.random.number({min: 500, max: 1000}),
      batchBillingType: faker.helpers.randomize(["Mensalidade", "Anual"]),
    })

    data.batch.content.billings.push({
      clientName: faker.helpers.replaceSymbols("????"),
      document: faker.helpers.randomize([fakerBr.br.cnpj(), fakerBr.br.cpf()]),
      contractCode: faker.helpers.replaceSymbols("????####"),
      billingCode: faker.helpers.replaceSymbols("????####"),
      rpsCode: faker.helpers.replaceSymbols("????####"),
      batchBillingType: faker.helpers.randomize(["Mensalidade", "Anual"]),
    })
  }
  return data;
})
