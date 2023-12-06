import { usContext } from "../base-pruebas/06-deses-obj";

describe('Tests on 06-deses-obj', () => {
    test('should return hero information', () => {
        const mockHero = {
            nombre: 'Tony',
            edad: 23,
            clave: 'Ironman'
        }
        const hero = usContext(mockHero)
        expect(hero).toEqual({
            nombreClave: 'Ironman',
            anios: 23,
            latlng: { lat: 14.1232, lng: -12.3232 }
        })
    })
})