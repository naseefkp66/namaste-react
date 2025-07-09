import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import mockItemList from "../mocks/mockItemList.json"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(mockItemList)
        }
    })
})
it("Should load restaurant menu component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>

        )
    })

})

it("Should load food item list on click on accordion", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>

        )
    })
    const accordionHeader = screen.getByText("Late Night Cravings 8")
    expect(accordionHeader).toBeInTheDocument()
    fireEvent.click(accordionHeader)
    expect(screen.getAllByTestId("item-card").length).toBe(8)

})

it("Should add one item to the cart", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>

        )
    })
    const addBtns = screen.getAllByRole("button", { name: "Add +" })
    expect(screen.getByText("🛒(0)")).toBeInTheDocument()


    fireEvent.click(addBtns[0])

    expect(screen.getByText("🛒(1)")).toBeInTheDocument()

})

it("Should add two items to the cart", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>

        )
    })

    const addBtns = screen.getAllByRole("button", { name: "Add +" })
    fireEvent.click(addBtns[1])
    expect(screen.getByText("🛒(2)")).toBeInTheDocument()
    expect(screen.getAllByTestId("item-card").length).toBe(10)
})

it("Should clear the cart", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>

        )
    })

    fireEvent.click(screen.getByRole("button", { name: "Clear cart" }))
    expect(screen.getAllByTestId("item-card").length).toBe(8)
    expect(screen.getByText("Oops...! No items found in cart")).toBeInTheDocument()

})
