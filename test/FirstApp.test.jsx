import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp /> component', () => { 
    test('debe de hacer match con el snapshot', () => { 

        const title = 'Hola, soy Carles'

        const { container } = render(<FirstApp title={ title } />)

        expect(container).toMatchSnapshot()
     })

     test('debe de mostrar el titulo en un h1', () => { 

        const title = 'Hola, soy Carles'

        const { container, getByText, getByTestId } = render(<FirstApp title={ title } />)

        // Espero que el titulo exista
        expect(getByText(title)).toBeTruthy();

        // Espero que el titulo con el id 'test-title' contenga el titulo enviado por props
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () =>
    {
        const title = 'Hola, soy Carles'
        const subtitle = 'Soy un subtitulo'

        const { getByText, getAllByText } = render(
            <FirstApp 
                title={ title } 
                subtitle={ subtitle } 
            />
        );

        // Espero que el titulo exista
        expect(getAllByText(subtitle)).toBeTruthy();

        // Espero que solo haya 1 subtitulo
        expect(getAllByText(subtitle).length).toBe(2);
    })
 })