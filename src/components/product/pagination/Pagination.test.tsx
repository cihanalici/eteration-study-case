import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("should render the state", () => {
    render(
      <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} />
    );
    // 5. sayfa aktif olduğu için active class'ı olmalı
    expect(document.querySelector(".active")?.textContent).toBe("5");
  });

  it("should render the state", () => {
    render(
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
    );
    // content sayısı 5 olduğu için 5 tane button olmalı
    expect(document.querySelectorAll("button").length).toBe(5);
  });
});
