import { render, fireEvent } from "@testing-library/react";
import { Card } from "@/app/ui/card";
import "@testing-library/jest-dom";

describe("Card", () => {
  test("Card component renders correctly", () => {
    const { getByText } = render(
      <Card
        id="1"
        number="1234 5678 9012 3456"
        firstname="John"
        lastname="Doe"
        expirationDate="12/24"
        onDelete={() => {}}
      />
    );

    expect(getByText("1234 5678 9012 3456")).toBeInTheDocument();
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("12/24")).toBeInTheDocument();
  });

  test("Call delete function when click the button ", () => {
    const onDeleteMock = jest.fn();
    const { getByRole } = render(
      <Card
        id="1"
        number="1234 5678 9012 3456"
        firstname="John"
        lastname="Doe"
        expirationDate="12/24"
        onDelete={onDeleteMock}
      />
    );

    const deleteButton = getByRole("button");
    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });

  test("Css styles apply correctly", () => {
    const { container } = render(
      <Card
        id="1"
        number="1234 5678 9012 3456"
        firstname="John"
        lastname="Doe"
        expirationDate="12/24"
        onDelete={() => {}}
      />
    );

    const cardElement = container.firstChild;

    expect(cardElement).toHaveClass("item");
  });
});
