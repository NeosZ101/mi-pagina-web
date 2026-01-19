import {render, screen, fireEvent} from '@testing-library/react';
import NameForm from './main';
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
    test('Debe mostrar una aleta si el nombre es invalido (numeros)',() => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() =>{});
        render(<NameForm onUpdateName={() => {}} />);
        const input = screen.getByPlaceholderText(/type a name/i);
        const button = screen.getByRole('button');
        fireEvent.change(input, {target: {value: 'Pablo123'}});
        fireEvent.click(button);
        expect(alertMock).toHaveBeenCalled();
        alertMock.mockRestore();
    });
});
