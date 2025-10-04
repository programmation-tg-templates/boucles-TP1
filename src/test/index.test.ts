// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {boucle1} from '../index';

describe('La boucle for', () => {
    test('doit retourner 0 étoile', () => {
        expect(boucle1(0)).toEqual('');
    });

    test('doit retourner 1 étoile', () => {
        expect(boucle1(1)).toEqual('*');
    });

    test('doit retourner 5 étoiles', () => {
        expect(boucle1(5)).toEqual('*****');
    });

    test('doit retourner 7 étoiles', () => {
        expect(boucle1(7)).toEqual('*******');
    });
});