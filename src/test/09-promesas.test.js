import { getHeroeByIdAsync } from "../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroByIddAsync should return hero', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toEqual({
                    "id": 1, "name": "Batman", "owner": "DC"
                });
                done();
            })
    })

    test('getHeroByIddAsync should get an error if the hero does not exists', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toBeFalsy();
            })
            .catch((error) => {
                expect(error).toEqual(`No se pudo encontrar el héroe ${id}`);
                done();
            })
    })
})