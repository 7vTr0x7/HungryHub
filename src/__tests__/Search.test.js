import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// modifying/altering the fetch to work with jsdom environment
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for Pizza input", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(10);
  const searchBtn = screen.getByRole("button", { name: "search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(3);
});

it("Should Filter Top Rated Restaurants", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(10);

  const topRated = screen.getByRole("button", { name: "Top Rated" });

  fireEvent.click(topRated);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(7);
});
