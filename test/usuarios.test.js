const usuarios = require('../server/data/usuarios')

describe('/api/', () => {
  let server
  beforeEach(() => {
    server = require('../')
  })
  afterEach(() => {
    server.close()
  })
  it('it should work...', () => {
    expect(usuarios).not.toBeNull()
  })
})