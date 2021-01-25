const { GoogleSpreadsheet } = require('google-spreadsheet')
const creds = require('./client_secret.json')
async function accessSpreadsheet() {
  const doc = new GoogleSpreadsheet('1LPF1XPY0ZkHNgNv0ITQM1QLjjFc8MK4rSL8NRZHIhGY')
  await doc.useServiceAccountAuth(creds)
  await doc.loadInfo()
  const rows = await doc.sheetsByIndex[0].getRows()
  rows.forEach(row => {
      console.log(row['N°'], row['Nombres y Apellidos'])
  });
}
accessSpreadsheet()