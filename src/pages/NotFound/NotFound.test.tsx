import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFound from "./NotFound";
import { MemoryRouter } from "react-router-dom";

describe("NotFound", () => {
  it("should render the state", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText("The page you are looking for does not exist."));
  });

  it("should render the state", () => {
    render(
      <MemoryRouter>
        <NotFound message="email has been taken" />
      </MemoryRouter>
    );
    expect(screen.getByText("email has been taken"));
  });
});
