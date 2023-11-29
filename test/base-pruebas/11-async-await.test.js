import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => { 
    test('getImagen debe de retornar el url de la imagen', async() => { 
        const url = await getImagen();
        console.log(url);
        
        expect( url.includes('https://') ).toBe( true );
        expect(typeof url).toBe('string');
    })
 })