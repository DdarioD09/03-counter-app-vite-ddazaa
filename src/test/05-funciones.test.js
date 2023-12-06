import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones";

describe('Test on 05-funciones', () => {
    test('getUser should return an object', () => {
        const mocktUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        console.log(user);
        expect(mocktUser).toEqual(user);
    })

    test('getUsuarioActivo should return an object', () => {
        const name = 'Fernando'
        const mocktUser = {
            uid: 'ABC567',
            username: name
        }
        const activeUser = getUsuarioActivo(name);
        expect(activeUser).toEqual(mocktUser);
    })
});