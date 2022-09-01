import { render, screen } from "@testing-library/react";

import React from "react";
import Item from "../components/Item";

describe("Item Component", () => {
  test("Item component should render the name ", () => {
    const item = {
      name: "test name",
      picture: "picture url",
      price: "1M"
    };
    render(<Item item={item} />);

    expect(
      screen.getByRole("heading", { name: "test name $1M" })
    ).toBeVisible();
  });
});
