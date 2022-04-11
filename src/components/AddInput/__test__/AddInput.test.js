import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodo = jest.fn();

describe("Testing AddInput component, should render it", () => {
  it("should be render AddInput comp correctly", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const placeholderElement = screen.getByPlaceholderText(
      /Add a new task here.../i
    );
    expect(placeholderElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    fireEvent.change(inputElement, { target: { value: "Learning to code" } });

    expect(inputElement.value).toBe("Learning to code");
  });

  it("should be able to type into the input", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    fireEvent.change(inputElement, { target: { value: "Learning to code" } });

    expect(inputElement.value).toBe("Learning to code");
  });
});

describe("Testing AddInput, should interact correctly", () => {
  it("should be able to type and add into Input", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Learning to code" } });
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockSetTodo).toHaveBeenCalled();
  });

  it("should be able to prevent adding todo", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "" } });
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockSetTodo).not.toBeCalled();
  });

  it("should be able to prevent adding tOdo", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "" } });
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
