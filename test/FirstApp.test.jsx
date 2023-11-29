import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp /> component', () => { 
    test('debe de hacer match con el snapshot', () => { 

        const title = 'Hola, soy Carles'

        render(<FirstApp title={ title } />)

     })
 })