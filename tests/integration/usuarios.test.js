const request = require('supertest')
const usuarios = require('../../server/data/usuarios')
let server

describe('/ususarios', () => {
  beforeEach(() => {
    server = require('../../index')
  })
  afterEach(() => {
    server.close()
  })
  describe('GET /', () => {
    it('Debe regresar todos los usuarios', async () => {
      const res = await request(server).get('/usuarios')
      expect(res.status).toBe(200)
    })
  })
})
