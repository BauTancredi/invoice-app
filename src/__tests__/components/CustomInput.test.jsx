import { cleanup, render } from "@testing-library/react";
import { useFormContext } from "react-hook-form";

import CustomInput from "../../components/CustomInput";

jest.mock("react-hook-form");

describe("CustomInput", () => {
  beforeEach(() => {
    useFormContext.mockImplementation(() => ({
      register: jest.fn(),
      errors: {},
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it("should render the input with the props correctly", () => {
    const { getByText, getByLabelText } = render(
      <CustomInput label="label" name="name" type="text" />,
    );

    expect(getByText("label")).toBeInTheDocument();
    expect(getByLabelText("label")).toHaveAttribute("id", "name");
    expect(getByLabelText("label")).toHaveAttribute("type", "text");
  });

  it("should render the error message if there is an error", () => {
    useFormContext.mockImplementation(() => ({
      register: jest.fn(),
      errors: {
        name: {
          message: "error message",
        },
      },
    }));

    const { getByText } = render(<CustomInput label="label" name="name" type="text" />);

    expect(getByText("error message")).toBeInTheDocument();
  });
});
