import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp /> component', () => { 
    test('debe de hacer match con el snapshot', () => { 

        const title = 'Hola, soy Carles'

        const { container } = render(<FirstApp title={ title } />)

        // console.log(container)

        expect(container).toMatchSnapshot()
     })

     test('debe de mostrar el titulo en un h1', () => { 

        const title = 'Hola, soy Carles'

        const { container, getByText } = render(<FirstApp title={ title } />)

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');

        expect(h1.innerHTML).toContain(title)
    })
 })