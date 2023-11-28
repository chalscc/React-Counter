import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'Mi_Username'
        };

        const user = getUser();

        expect( testUser ).toStrictEqual( user );

     })

     test('getUsuarioActivo debe retornar un objeto', () => { 
        
        const nombre = 'Carles';

        const testUsuarioActivo = {
            uid: 'ABC567',
            username: nombre
        };

        const userActivo = getUsuarioActivo( nombre );

        expect( testUsuarioActivo ).toStrictEqual( userActivo	 );

      })

 })