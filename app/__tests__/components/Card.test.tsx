import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "../../components/Card";

describe("Card", () => {
  test("renders component", () => {
    render(
      <Card title="Test" category="Test Category" amount={10} date="1st" />
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Category: Test Category")).toBeInTheDocument();
    expect(screen.getByText("Amount: £10")).toBeInTheDocument();
    expect(screen.getByText("Date: 1st")).toBeInTheDocument();
  });
});
