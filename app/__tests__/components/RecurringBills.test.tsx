import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import RecurringBills from "../../components/RecurringBills";

describe("Recurring Bills", () => {
  test("adds a new bill when add button is clicked", () => {
    render(<RecurringBills />);
    fireEvent.click(screen.getByTestId("add-bill-button"));
    expect(screen.getByText("New Bill")).toBeInTheDocument();
  });
});
