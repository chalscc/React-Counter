import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

// La importacion del screen, el objeto screen es aquel jsx que estamos renderizando

describe('Pruebas en <FirstApp /> component', () => { 
    const title = 'Hola, soy Carles'
    const subTitle = 'Soy un subtitulo'

    test('debe de hacer match con el snapshot', () => { 

        const { container } = render(<FirstApp title={ title } />)

        expect(container).toMatchSnapshot()
     })

     test('debe de mostrar el mensaje <<Hola, soy Carles>>', () => { 

        render(<FirstApp title={ title } />)

        // screen.debug() // Muestra el html que se ha renderizado

        // Espero que el titulo exista
        expect(screen.getByText(title)).toBeTruthy();
        // expect(screen.getByText(title)).not.toBeTruthy();
    });

    test('debe de mostrar el titulo en un h1', () =>
    {
        render(<FirstApp title={ title } />)

        // Le decimos que debe mostrar el heading (h) en nivel 1 (h1)
        // Y este debe contener el titulo enviado por props
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)

    })

    test('debe de mostrar el subtitulo enviado por props 2 veces', () => { 
        render(<FirstApp 
            title={ title } 
            subtitle="Soy un subtitulo" 
        />)


        expect(screen.getAllByText(subTitle).length).toBe(2);
     })
 })