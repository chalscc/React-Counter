import { fireEvent, render, screen } from "@testing-library/react"
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

     test('Debe de incrementar con el boton +1', () => { 
        
        render(<CounterApp value={initialValue}/>)

        fireEvent.click(screen.getByRole('button', {name: '+1'}));

        // screen.debug();
        expect(screen.getByText(initialValue + 1)).toBeTruthy();

        
     })

     test('Debe de funcionar el botón de Reset', () => {
        render(<CounterApp value={initialValue}/>)

        fireEvent.click(screen.getByRole('button', {name: '+1'}));
        fireEvent.click(screen.getByRole('button', {name: '+1'}));
        expect(screen.getByText(initialValue + 2)).toBeTruthy();

        
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText(initialValue)).toBeTruthy();

     })

 })