import { render, screen } from "@testing-library/react";
import CardContainer from "@/app/ui/cardContainer";
import "@testing-library/jest-dom";

describe("CardContainer", () => {
  test("CardContainer component renders correctly", () => {
    const renderContainer = render(<CardContainer />);

    expect(renderContainer).toBeTruthy;
  });

  test("Title component exist", () => {
    render(<CardContainer />);

    const titleComponent = screen.getByText(/Tarjetas/i);

    expect(titleComponent).toBeInTheDocument();
  });

  test("Title component exist - other form to test", () => {
    const { getByText } = render(<CardContainer />);

    expect(getByText(/Tarjetas/i)).toBeInTheDocument();
  });
  
});
