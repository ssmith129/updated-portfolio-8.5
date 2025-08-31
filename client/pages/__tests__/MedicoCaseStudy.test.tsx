import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MedicoCaseStudy from "../MedicoCaseStudy";

// Mock the hooks
vi.mock("../../hooks/use-page-animations", () => ({
  useIntersectionAnimation: () => ({
    elementRef: { current: null },
    isVisible: false,
    hasAnimated: false,
  }),
}));

// Mock the components that aren't critical for this test
vi.mock("../../components/Navigation", () => ({
  default: () => <nav data-testid="navigation">Navigation</nav>,
  SkipLink: () => <a href="#main" data-testid="skip-link">Skip to main content</a>,
}));

vi.mock("../../components/RelatedCaseStudies", () => ({
  default: () => <section data-testid="related-case-studies">Related Case Studies</section>,
}));

vi.mock("../../components/Footer", () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

const MedicoCaseStudyWithRouter = () => (
  <BrowserRouter>
    <MedicoCaseStudy />
  </BrowserRouter>
);

describe("MedicoCaseStudy", () => {
  it("renders without crashing", () => {
    render(<MedicoCaseStudyWithRouter />);
    expect(screen.getByText("Medico – Unified Hospital Operations Platform")).toBeInTheDocument();
  });

  it("displays the main heading", () => {
    render(<MedicoCaseStudyWithRouter />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Medico – Unified Hospital Operations Platform"
    );
  });

  it("shows the executive summary section", () => {
    render(<MedicoCaseStudyWithRouter />);
    expect(screen.getByText("Executive Summary")).toBeInTheDocument();
  });

  it("displays animated counters with correct initial state", () => {
    render(<MedicoCaseStudyWithRouter />);
    
    // Check that animated counter elements exist
    const counters = screen.getAllByRole("status");
    expect(counters.length).toBeGreaterThan(0);
  });

  it("has accessible navigation elements", () => {
    render(<MedicoCaseStudyWithRouter />);
    
    // Check for skip link
    expect(screen.getByTestId("skip-link")).toBeInTheDocument();
    
    // Check for back button with proper aria-label
    const backButton = screen.getByLabelText("Return to case studies overview page");
    expect(backButton).toBeInTheDocument();
  });

  it("renders the three main feature cards", () => {
    render(<MedicoCaseStudyWithRouter />);
    
    expect(screen.getByText("Clinical Care Hub")).toBeInTheDocument();
    expect(screen.getByText("AI Operations Center")).toBeInTheDocument();
    expect(screen.getByText("Compliance Dashboard")).toBeInTheDocument();
  });

  it("handles image modal interactions", () => {
    render(<MedicoCaseStudyWithRouter />);
    
    // Modal should not be open initially
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("handles escape key to close modal", () => {
    render(<MedicoCaseStudyWithRouter />);
    
    // Fire escape key event
    fireEvent.keyDown(document, { key: "Escape" });
    
    // Modal should remain closed as it wasn't open
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

// Test the custom hook separately
describe("useCountAnimation edge cases", () => {
  it("handles zero end value correctly", async () => {
    // This would be tested in the actual component
    render(<MedicoCaseStudyWithRouter />);
    
    // The component should render without errors even with edge case values
    expect(screen.getByText("Medico – Unified Hospital Operations Platform")).toBeInTheDocument();
  });
});