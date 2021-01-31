const { GoogleSpreadsheet } = require('google-spreadsheet')
const creds = require('./client_secret.json')
async function accessSpreadsheet() {
  try {
    const doc = new GoogleSpreadsheet('1LPF1XPY0ZkHNgNv0ITQM1QLjjFc8MK4rSL8NRZHIhGY')
    await doc.useServiceAccountAuth(creds)
    const newSheet = await doc.addSheet({
      title: 'Hola desde el servidor 3',
      headerValues: ['Hola', 'desde', 'el servidor']
    })
    newSheet.addRows([
      {
        'Hola': 'test1.1',
        'desde': 'test2.1',
        'el servidor': 'test3.1'
      },
      {
        'Hola': 'test1',
        'desde': 'test2',
        'el servidor': 'test3'
      }
    ])
    
  } catch (error) {
    console.log('Documento no encontrado')
  }
}
accessSpreadsheet()