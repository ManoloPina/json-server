const faker = require('faker');

module.exports = () => {
  const data = { batches: {content: [], message: "Ação Efetuada com Sucesso", typeResult: 1} };

  for (let i = 0; i < 20; i++) {
    data.batches.content.push({ 
      id: faker.random.uuid(), 
      companyName: faker.helpers.replaceSymbols("?#?#?"),
      date: faker.date.recent(),
      processedBillings: faker.random.number({min:0, max: 500}), 
      totalRunningBillings: faker.random.number({min: 500, max: 1000}),
      batchBillingType: faker.helpers.randomize(["Mensalidade", "Anual"]),
    })
  }
  return data
}