import { render } from "@testing-library/react";
import CardItems from "../components/CardItems";
import React from "react";

describe("CardItems Component", () => {
  test("The Item component is in the CardItems", () => {
    const data = [
      {
        _id: "001",
        isActive: "true",
        price: "20.00",
        picture: "/img/products/N0CA_430.png",
        name: "Damage Reverse Oil Conditioner",
        about:
          "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        tags: ["ojon", "oil", "conditioner"]
      }
    ];
    const cardItemsComponent = render(
      <CardItems data={data} text={"damage"} close={true} />
    );

    expect(cardItemsComponent).toBeTruthy();
    expect(
      cardItemsComponent.queryAllByText("DISPLAYING 1 OF 1 RESULTS")
    ).toBeTruthy();
  });

  test("No results should be shown", () => {
    const data = [];
    const cardItemsComponent = render(
      <CardItems data={data} text={"damage"} close={true} />
    );
    expect(cardItemsComponent).toBeTruthy();

    expect(cardItemsComponent.queryAllByText("NO RESULTS FOUND")).toBeTruthy();
  });
});
