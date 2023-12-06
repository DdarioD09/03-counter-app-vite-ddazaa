import { getHeroeById } from "../base-pruebas/08-imp-exp";

describe('Tests at 08-imp-exp', () => {
    test('getHeroByIds hould return hero by id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
    })
})