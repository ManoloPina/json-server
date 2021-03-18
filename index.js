const faker = require('faker');

module.exports = () => {
  const data = { batches: {content: [], message: "Ação Efetuada com Sucesso", typeResult: 1} };

  for (let i = 0; i < 100; i++) {
    data.batches.content.push({ 
      id: faker.random.uuid(), 
      companyName: faker.company.companyName(),
      date: faker.date.recent(),
      processedBillings: faker.random.number({max: 100}), 
      totalRunningBillings: faker.random.number({max: 1000}),
      batchBillingType: "Mensalidade",
    })
  }
  return data
}