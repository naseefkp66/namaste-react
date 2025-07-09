import { render, screen } from "@testing-library/react"
import Contact from '../Contact'
import "@testing-library/jest-dom"



describe('contact us page test case', () => {
  beforeAll(() => {
    console.log("beforeAll")
  })

  afterAll(() => {
    console.log("afterAll")
  })

  beforeEach(() => {
    console.log("beforeEach")

  })
  beforeAll(() => {
    console.log("beforeAll")

  })

  test('should load contact us page', () => {
    render(<Contact />)
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()



  })
  test('should load button inside contact component', () => {
    render(<Contact />)
    const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument()



  })
  test('should load input inside contact component', () => {
    render(<Contact />)
    const input = screen.getByPlaceholderText("name")
    expect(input).toBeInTheDocument()

  })

  test('should load 2 inputs inside contact component', () => {
    render(<Contact />)
    const inputBoxes = screen.getAllByRole("textbox")
    expect(inputBoxes.length).toBe(2)

  })
})



