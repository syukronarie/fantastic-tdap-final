/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */

import pretty from 'pretty';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

function MockTodoFooter({ numberOfIncompleteTasks }) {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
}

describe('Testing TodoFooter', () => {
  describe('Snapshot TodoFooter', () => {
    //   it("should snapshot TodoFooter correctly", () => {
    //     const { container } = render(
    //       <MockTodoFooter numberOfIncompleteTasks={1} />
    //     );
    //     expect(container.innerHTML).toMatchInlineSnapshot(`"<div class=\\"todo-footer\\"><p>1 task left</p><a href=\\"/followers\\">Followers</a></div>"`);
    //   });

    it('should snapshot TodoFooter correctly', () => {
      const { container } = render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });

  describe('Testing TodoFooter interactifity', () => {
    it('should render TodoFooter "task" correctly', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const pElement = screen.getByText(/1 task left/i);
      expect(pElement).toBeInTheDocument();
    });

    it('should render TodoFooter "tasks" correctly', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={2} />);
      const pElement = screen.getByText(/2 tasks left/i);
      expect(pElement).toHaveTextContent('2 tasks left');
    });

    it('should renders TodoFooter "tasks" correctly', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={4} />);
      const pElement = screen.getByText(/4 tasks left/i);
      expect(pElement.textContent).toBe('4 tasks left');
    });

    it('should renders TodoFooter "tasks" correctly bos', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={9} />);
      const pElement = screen.getByText(/9 tasks left/i);
      expect(pElement).not.toBeFalsy();
    });

    it('should renders TodoFooter "tasks" correctly bosqu', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={10} />);
      const pElement = screen.getByText(/10 tasks left/i);
      expect(pElement).toBeTruthy();
    });
  });
});
