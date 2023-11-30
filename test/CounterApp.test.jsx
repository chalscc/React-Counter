import { render, screen } from "@testing-library/react"
import CounterApp from "../src/CounterApp"

describe('Test sobre <CounterApp/>', () => { 

    const initialValue = 100;

    test('Debe hacer match con el snapshot', () => { 
        
        const { container } = render(<CounterApp value={initialValue}/>)

        expect(container).toMatchSnapshot();

     })

     test('Debe mostrar el valor por defecto de 100', () => { 
        
        render(<CounterApp value={initialValue}/>)

        expect(screen.getByText(initialValue)).toBeTruthy();      
        
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
     })

 })