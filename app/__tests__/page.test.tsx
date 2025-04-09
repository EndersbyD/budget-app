import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Page from "../page";

describe("Page", () => {
  test("renders page component", () => {
    render(<Page />);
    expect(screen.getByText("Recurring Bills")).toBeInTheDocument();
    expect(screen.getByText("Month Views")).toBeInTheDocument();
  });

  test("menu drawer opens and closes", async () => {
    render(<Page />);
    const menuButton = screen.getByTestId("menu-button");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);
    const drawer = screen.getByTestId("menu-drawer");
    expect(drawer).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("menu-drawer-close-button"));
    expect(drawer).not.toBeVisible();
  });

  test("menu drawer does not close on button down event", async () => {
    render(<Page />);
    const menuButton = screen.getByTestId("menu-button");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);
    const drawer = screen.getByTestId("menu-drawer");
    expect(drawer).toBeInTheDocument();
    fireEvent.keyDown(menuButton, {
      key: "Tab",
      code: "Tab",
      keyCode: 9,
    });
    expect(drawer).toBeVisible();
  });
});
