import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

import MyHeroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroesById debe de retornar un heroe por ID', () => { 

        const id = 1;
        const heroe = getHeroeById(id);

        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

     })


     test('getHeroesById debe de retornar undefined si no existe el ID', () => { 

        const id = 100;
        const heroe = getHeroeById(id);


        // undefined/null/false
        expect( heroe ).toBeFalsy();

     })

     test('getHeroesByOwener debe retornar heroes de DC', () => { 

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);


        // Esperamos que nos retorne un array
        expect( typeof heroes ).toBe('object')

        // Estamos comparando un objeto, asi que usamos toEqual o toStrictEqual
        expect( heroes ).toEqual([{ id: 1, name: 'Batman', owner: 'DC' }, { id: 3, name: 'Superman', owner: 'DC' }, { id: 4, name: 'Flash', owner: 'DC' }])

        // Otra forma de hacerlo es filtrando el array de heroes y comparando el resultado
        expect( heroes ).toEqual(MyHeroes.filter( (heroe) => heroe.owner === 'DC' ));

        // Estamos comparando el length del array, asi que usamos toBe (strings/numbers/booleans usariamos este metodo)
        expect( heroes.length ).toBe(3);

      })

      test('getHeroesByOwener debe retornar heroes de Marvel', () => { 

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);


        // Esperamos que nos retorne un array
        expect( typeof heroes ).toBe('object')

        // Estamos comparando el length del array, asi que usamos toBe (strings/numbers/booleans usariamos este metodo)
        expect( heroes.length ).toBe(2);

      })
 })