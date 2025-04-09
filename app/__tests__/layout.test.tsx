import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "../layout";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false, // You can set this to true if needed
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test("renders RootLayout with children", () => {
  render(
    <RootLayout>
      <div>Test Child</div>
    </RootLayout>
  );

  // Check if the child content is rendered
  const childElement = screen.getByText(/Test Child/i);
  expect(childElement).toBeInTheDocument();

  // Check if the <html> element has the correct lang attribute
  const htmlElement = document.querySelector("html");
  expect(htmlElement).toHaveAttribute("lang", "en");

  // Check if the <body> element has the Roboto font variable class
  const bodyElement = document.querySelector("body");
  expect(bodyElement).toHaveClass("variable");
});
