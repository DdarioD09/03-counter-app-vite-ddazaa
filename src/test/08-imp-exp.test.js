import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";
import heroes from "../data/heros";

describe('Tests at 08-imp-exp', () => {
    test('getHeroByIds should return hero by id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })

    test('getHeroByIds should return undefined', () => {
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toBeFalsy();
    })

    test('getHeroByOwner should return all DC heroes', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        const expectedHeroes = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]
        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual(expectedHeroes);
        //Most usefull expect
        expect(heroesDC).toEqual(heroes.filter((hero) => hero.owner === owner));
    })

    test('getHeroByOwner should return all Marvel heroes', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);
        expect(heroesMarvel.length).toBe(2);
        expect(heroesMarvel).toEqual(heroes.filter((hero) => hero.owner === owner));
    })
})