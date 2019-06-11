const numeroMayor = require('../../utils/number')

describe('numeroMayor()', () => {
  it('Numeros negativos deben retornar 0', () => {
    const res = numeroMayor(-1000)
    expect(res).toBe(0)
  })
  it('19', () => {
    const res = numeroMayor(19)
    expect(res).toBe(91)
  })
  it('92', () => {
    const res = numeroMayor(92)
    expect(res).toBe(92)
  })
})