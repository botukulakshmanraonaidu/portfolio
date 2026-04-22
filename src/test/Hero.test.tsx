import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Hero from "../components/sections/Hero";

// Mock the typewriter component as it might have timers/animations
vi.mock("../common/RoleTypewriter", () => ({
  default: () => <div data-testid="role-typewriter">AI Developer</div>,
}));

describe("Hero Component", () => {
  it("renders the welcome message and name", () => {
    render(<Hero />);
    
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    expect(screen.getByText(/Lakshman Rao/i)).toBeInTheDocument();
  });

  it("contains the download resume link", () => {
    render(<Hero />);
    
    const downloadLink = screen.getByRole("link", { name: /download resume/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute("download");
  });

  it("renders social links with correct aria-labels", () => {
    render(<Hero />);
    
    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });
});
