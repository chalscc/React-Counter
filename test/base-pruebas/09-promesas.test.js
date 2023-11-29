import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    {
        // done es una funcion que llamamos cuando termina mi codigo asincrono
        // sino ejecutara el codigo de forma secuencial obviando la promise
        // ya que al llegar al final del codigo, jest da por terminada la prueba
        test('getHeroesByIdAsync debe de retornar un héroe', (done) => { 
            const id = 1;
            
            getHeroeByIdAsync(id)
                .then( heroe => {
                    
                    expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );

                    done();
                });

        })

        test('getHeroesByIdAsync debe de retornar error si heroe no existe', (done) => { 
            const id = 100;
            
            getHeroeByIdAsync(id)
                .then( heroe => {
                    
                    // Esperamos que el heroe no existe, esto no deberia de suceder
                    
                    expect( heroe ).toBeFalsy();
                    done();
                })
                .catch( error => {
                    
                    expect(error).toBe('No se pudo encontrar el héroe ' + id);

                    done();
                });

        })

    } 
})