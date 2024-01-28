import { getImagen } from '../../src/base-pruebas/11-async-await'

describe('Tests on 11-async-await.js', () => {

    test('getImagen should return an URL image', async () => {
        const url = await getImagen()
            .then((url) => {
                expect(typeof url).toBe('string')
            });
    })

    test('getImagen should return an error message', async () => {
        const url = await getImagen()
            .catch((error) => {
                expect(error).toBe('Image not found')
            });
    })
})