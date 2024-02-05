import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"
 

test("Should load Contact component",() => {
    render(<Contact />);

    const heading = screen.getByRole("heading")
     
    // Assertion
    expect(heading).toBeInTheDocument()
}) 

test("Should load button in Contact Component",() => {
    render(<Contact />)

   // const button = screen.getByRole("button")
   // OR
   const button = screen.getByText("Submit")

   expect(button).toBeInTheDocument()
})

test("Should load Input in Contact Component",() => {
    render(<Contact />)

    const input = screen.getByPlaceholderText("name")

    expect(input).toBeInTheDocument()
})