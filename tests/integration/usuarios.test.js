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
      const { usuarios } = res.body
      expect(usuarios.length).toBeGreaterThan(0)
      expect(res.status).toBe(200)
    })
  })
  describe('GET /:id', () => {
    const n = usuarios.length
    it('Debe regresar un usuario por ID', async () => {
      const res = await request(server).get(`/usuarios/${n}`)
      expect(res.status).toBe(200)
    })
    it('Debe buscar un ID que no existe', async () => {
      const res = await request(server).get(`/usuarios/${n + 2}`)
      expect(res.status).toBe(404)
    })
  })
})
