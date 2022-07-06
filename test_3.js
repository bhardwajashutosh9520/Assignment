/**
 * kegs= 30,000 ml
 * bottle = 330 ml
 * can=300 ml
 * container= 10,000,00 ml
 *
 * first, quantity per order = 1000 liter, packaging = bottles, frequescy = 3 per weeks
 * 1 bottles = 330 ml , 0.33 liter = 330 / 1,000
 * 0.33 liter = 1 bottles
 * 1000000 ml =
 *
 */

function cal(data) {
  const packaging = [
    { id: 1, title: 'kegs', size: 30000 },
    { id: 2, title: 'bottle', size: 330 },
    { id: 3, title: 'can', size: 300 },
    { id: 4, title: 'container', size: 1000000 },
  ]
  const selectPackage = packaging.filter((item) => item.id === data.packaging)
  const totalOrderPlaced = 52 / data.orderFrequency
  const volumePerOrder = data.quantityPerOrder / 100
  const unitsPerOrder = (data.quantityPerOrder * 1000) / selectPackage[0].size

  return {
    totalVolumeInYear: Math.ceil(totalOrderPlaced * volumePerOrder),
    packaging: selectPackage[0].title,
    unitsPerOrder: Math.ceil(unitsPerOrder),
  }
}

const result = cal({
  id: 1,
  title: 'Beer',
  packaging: 2,
  orderFrequency: 3,
  quantityPerOrder: 1000,
  createdAt: 6896896878798,
})
console.log('result---', result, Math.ceil(20.89))
