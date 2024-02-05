import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import { withDiscountLabel } from "../components/RestaurantCard";
import resCardMock from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

it("Should render RestaurantCard with props data",() => {
    render(<RestaurantCard resData={resCardMock} />)

    const name = screen.getByText("Burger King")
    expect(name).toBeInTheDocument()
})

