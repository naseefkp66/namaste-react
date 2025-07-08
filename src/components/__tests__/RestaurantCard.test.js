import { render, fireEvent, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from '../RestaurantCard'
import resCardMock from '../mocks/resCardMock.json'
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";


it("Should render restaurant card with data", () => {
    render(
        <BrowserRouter>
            <RestaurantCard resData={resCardMock} />
        </BrowserRouter>)

    const name = screen.getByText("Sab Ghar Tak Foods")
    expect(name).toBeInTheDocument()

})

it("Should render restaurant card with promoted label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
    render(
        <BrowserRouter>
            <RestaurantCardPromoted resData={resCardMock} />
        </BrowserRouter>)

    const name = screen.getByText("promoted")
    expect(name).toBeInTheDocument()

})