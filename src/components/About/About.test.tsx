import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

describe("About", () => {
  it("affiche le titre principal", () => {
    render(<About />);
    expect(screen.getByText(/Notre Histoire/i)).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    render(<About />);
    expect(
      screen.getByText(/Découvrez l'aventure du Camion des Saveurs/i)
    ).toBeInTheDocument();
  });

  it("affiche les valeurs", () => {
    render(<About />);
    expect(screen.getAllByText(/^Passion$/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^Qualité$/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^Convivialité$/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^Mobilité$/i).length).toBeGreaterThan(0);
  });

  it("affiche les témoignages clients", () => {
    render(<About />);
    expect(screen.getByText(/Sophie M./i)).toBeInTheDocument();
    expect(screen.getByText(/Thomas L./i)).toBeInTheDocument();
    expect(screen.getByText(/Marie D./i)).toBeInTheDocument();
  });

  it("affiche les citations des témoignages", () => {
    render(<About />);
    expect(
      screen.getByText(/Les meilleurs burgers de Paris/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Service rapide et efficace, parfait pour la pause déjeuner/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Une vraie découverte ! L'ambiance est conviviale/i)
    ).toBeInTheDocument();
  });
});
