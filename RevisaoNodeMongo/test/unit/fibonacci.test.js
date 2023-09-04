const fibo = require('./fibonnacci')


describe('soma fibonacci', () =>{
    it('deve retornar 3', () => {
        const res = fibo(4)
        expect(res).toBe(3)
    })
    it('deve retornar 144', () => {
        const res = fibo(6)
        expect(res).toBe(8)
    })
})