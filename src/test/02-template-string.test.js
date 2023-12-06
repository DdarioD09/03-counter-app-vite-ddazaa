import { getSaludo } from "../base-pruebas/02-template-string"

describe('Tests on 02-template-string', () => {
    test('getGreating method should return "Hello Mom"', () => {
        const name = 'Mom';
        const message = getSaludo(name);
        expect(message).toBe(`Hello ${name}`);
    })
})