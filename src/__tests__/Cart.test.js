import { act } from "react-dom/test-utils";
import ResMenu from "../components/ResMenu";
import Header from "../components/Header";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should render Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended (19)");

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(19);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  const beforeClick = screen.getByText("0");
  expect(beforeClick).toBeInTheDocument();

  fireEvent.click(addBtn[0]);

  const afterClick = screen.getByText("1");

  expect(afterClick).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  const afterSecondClick = screen.getByText("2");

  expect(afterSecondClick).toBeInTheDocument();
});
