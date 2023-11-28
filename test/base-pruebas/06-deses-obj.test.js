import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 05-funciones', () => {

    test('Test objeto desestructurado', () => {

        const clave = 'Ironman';
        const edad = 45;

        const testUser = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            },
        };

        const user = usContext({clave, edad});

        expect( testUser ).toStrictEqual( user );

        

     })

 })