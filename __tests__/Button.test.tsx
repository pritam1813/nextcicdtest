import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button component", () => {
  test("renders the button with correct text", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("has the correct initial class names", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toHaveClass(
      "text-xl px-3 py-1 bg-slate-500 text-white rounded-full hover:bg-yellow-500 hover:text-stone-900 border-none"
    );
  });

  test("changes class names on hover", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toHaveClass(
      "hover:bg-yellow-500 hover:text-stone-900"
    );
  });
});
