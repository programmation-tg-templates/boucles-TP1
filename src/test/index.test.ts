// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {boucle1} from '../index';

describe('La fonction boucle1 doit retourner', () => {
    test('0 étoile', () => {
        expect(boucle1(0)).toEqual('');
    });

    test('1 étoile', () => {
        expect(boucle1(1)).toEqual('*');
    });

    test('5 étoiles', () => {
        expect(boucle1(5)).toEqual('*****');
    });

    test('7 étoiles', () => {
        expect(boucle1(7)).toEqual('*******');
    });
});