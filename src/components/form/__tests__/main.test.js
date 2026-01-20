import {render, screen, fireEvent} from '@testing-library/react';
import NameForm from '../main';
import '@testing-library/jest-dom';


describe('Pruebas de componentes: <NameForm />', () => {
    test('Debe permitir escribir en el input y llamar a la funcion al enviar',() => {
        const mockUpdateName = jest.fn();
        render(<NameForm onUpdateName={mockUpdateName}/>);
        const input = screen.getByPlaceholderText(/type a name/i);
        const button = screen.getByRole('button');
        fireEvent.change(input,{target:{value: 'Pablo Labra'}});
        fireEvent.click(button);
        expect(mockUpdateName).toHaveBeenCalledWith('Pablo Labra');
    })
    test('Debe permitir escribir en el input y llamar a la funcion al enviar (bien ohiggins)',() => {
        const mockUpdateName = jest.fn();
        render(<NameForm onUpdateName={mockUpdateName}/>);
        const input = screen.getByPlaceholderText(/type a name/i);
        const button = screen.getByRole('button');
        fireEvent.change(input,{target:{value: "Bernardo O'Higgins"}});
        fireEvent.click(button);
        expect(mockUpdateName).toHaveBeenCalledWith("Bernardo O'Higgins");
    })
    test('Debe mostrar una alerta si el nombre es invalido (numeros)',() => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() =>{});
        render(<NameForm onUpdateName={() => {}} />);
        const input = screen.getByPlaceholderText(/type a name/i);
        const button = screen.getByRole('button');
        fireEvent.change(input, {target: {value: 'Pablo123'}});
        fireEvent.click(button);
        expect(alertMock).toHaveBeenCalled();
        alertMock.mockRestore();
    })
    test('Debe mostrar una alerta si el nombre es invalido (signos)',() => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() =>{});
        render(<NameForm onUpdateName={() => {}} />);
        const input = screen.getByPlaceholderText(/type a name/i);
        const button = screen.getByRole('button');
        fireEvent.change(input, {target: {value: 'Pablo!?¿'}});
        fireEvent.click(button);
        expect(alertMock).toHaveBeenCalled();
        alertMock.mockRestore();
    })
    test('Debe mostrar una alerta si el nombre es invalido (Escribe mal ohiggins)',() => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() =>{});
        render(<NameForm onUpdateName={() => {}} />);
        const input = screen.getByPlaceholderText(/type a name/i);
        const button = screen.getByRole('button');
        fireEvent.change(input, {target: {value: "Benando o'higgings"}});
        fireEvent.click(button);
        expect(alertMock).toHaveBeenCalled();
        alertMock.mockRestore();
    })
    test('Debe mostrar una alerta si el nombre es invalido ( o\'higgins)',() => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() =>{});
        render(<NameForm onUpdateName={() => {}} />);
        const input = screen.getByPlaceholderText(/type a name/i);
        const button = screen.getByRole('button');
        fireEvent.change(input, {target: {value: "d'pablo"}});
        fireEvent.click(button);
        expect(alertMock).toHaveBeenCalled();
        alertMock.mockRestore();
    })
    test('Debe mostrar una alerta si el nombre es invalido (nombre corto)',() => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() =>{});
        render(<NameForm onUpdateName={() => {}} />);
        const input = screen.getByPlaceholderText(/type a name/i);
        const button = screen.getByRole('button');
        fireEvent.change(input, {target: {value: "La"}});
        fireEvent.click(button);
        expect(alertMock).toHaveBeenCalled();
        alertMock.mockRestore();
    })
});
