import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"


// can use "it" and "test" to write test cases

describe("Contact Us Page Test Cases",() => {

    
    it("Should load Contact component",() => {
    render(<Contact />);

    const heading = screen.getByRole("heading")
     
    // Assertion
    expect(heading).toBeInTheDocument()
}) 

it("Should load button in Contact Component",() => {
    render(<Contact />)

   // const button = screen.getByRole("button")
   // OR
   const button = screen.getByText("Submit")

   expect(button).toBeInTheDocument()
})

it("Should load Input in Contact Component",() => {
    render(<Contact />)

    const input = screen.getByPlaceholderText("name")

    expect(input).toBeInTheDocument()
})

it("Should load 2 Input Boxes on Contact Component", () => {
    render(<Contact />)

    // querying
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).toBe(2)

})
})