import { render, screen } from "@testing-library/react-native";

import { BrandTitle } from "../BrandTitle";

describe("BrandTitle", () => {
  it("renders the BetterInvest brand name", async () => {
    await render(<BrandTitle />);

    expect(screen.getByTestId("brand-title")).toHaveTextContent("BetterInvest");
  });
});
