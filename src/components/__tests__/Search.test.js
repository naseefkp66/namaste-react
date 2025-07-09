import { fireEvent, render, screen } from "@testing-library/react"
import Body from '../Body'
import mockResListData from '../mocks/mockResListData.json'
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(mockResListData)
        }
    })
})

it("Should search res list for pizza text input", async () => {
    await act(async () => {
        render(<BrowserRouter><Body /></BrowserRouter>)
    })
    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(8)
    const searchBtn = screen.getByRole("button", { name: "Search" })
    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, { target: { value: "pizza" } })
    fireEvent.click(searchBtn)
    const cardsAfterSearch = screen.getAllByTestId("resCard")
    expect(cardsAfterSearch.length).toBe(1)
})

it("Should filter top rated restaurants", async () => {
    await act(async () => {
        render(<BrowserRouter><Body /></BrowserRouter>)
    })
    const cardsBeforeClick = screen.getAllByTestId("resCard")
    expect(cardsBeforeClick.length).toBe(8)
    const topRatedBtn = screen.getByRole("button", { name: "Top rated Restaurants" })
    fireEvent.click(topRatedBtn)
    const cardsAfterClick = screen.getAllByTestId("resCard")
    expect(cardsAfterClick.length).toBe(1)
})