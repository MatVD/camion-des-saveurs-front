import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Location from "./Location";

// Mock the getLastLocation function
jest.mock("../../utils/locationUtils", () => ({
  getLastLocation: jest.fn(),
}));

import { getLastLocation } from "../../utils/locationUtils";

const mockGetLastLocation = getLastLocation as jest.MockedFunction<typeof getLastLocation>;

describe("Location", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("affiche le titre principal", async () => {
    mockGetLastLocation.mockResolvedValue({
      id: 3,
      name: "Marché Saint-Germain",
      address: "Marché Saint-Germain, 75006 Paris",
      coordinates: {
        lat: 48.8547,
        lng: 2.3347
      },
      schedule: [
        { day: "Samedi", time: "10h00 - 16h00" },
        { day: "Dimanche", time: "10h00 - 16h00" }
      ]
    });

    render(<Location />);
    
    await waitFor(() => {
      expect(screen.getByText(/Dernière Localisation/i)).toBeInTheDocument();
    });
  });

  it("affiche le nom de la localisation", async () => {
    mockGetLastLocation.mockResolvedValue({
      id: 3,
      name: "Marché Saint-Germain",
      address: "Marché Saint-Germain, 75006 Paris",
      coordinates: {
        lat: 48.8547,
        lng: 2.3347
      },
      schedule: [
        { day: "Samedi", time: "10h00 - 16h00" },
        { day: "Dimanche", time: "10h00 - 16h00" }
      ]
    });

    render(<Location />);
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Marché Saint-Germain/i })).toBeInTheDocument();
    });
  });

  it("affiche l'adresse de la localisation", async () => {
    mockGetLastLocation.mockResolvedValue({
      id: 3,
      name: "Marché Saint-Germain",
      address: "Marché Saint-Germain, 75006 Paris",
      coordinates: {
        lat: 48.8547,
        lng: 2.3347
      },
      schedule: [
        { day: "Samedi", time: "10h00 - 16h00" },
        { day: "Dimanche", time: "10h00 - 16h00" }
      ]
    });

    render(<Location />);
    await waitFor(() => {
      expect(screen.getByText(/75006 Paris/i)).toBeInTheDocument();
    });
  });

  it("affiche les coordonnées", async () => {
    mockGetLastLocation.mockResolvedValue({
      id: 3,
      name: "Marché Saint-Germain",
      address: "Marché Saint-Germain, 75006 Paris",
      coordinates: {
        lat: 48.8547,
        lng: 2.3347
      },
      schedule: [
        { day: "Samedi", time: "10h00 - 16h00" },
        { day: "Dimanche", time: "10h00 - 16h00" }
      ]
    });

    render(<Location />);
    await waitFor(() => {
      expect(screen.getByText(/Coordonnées: 48.8547, 2.3347/i)).toBeInTheDocument();
    });
  });

  it("affiche les horaires", async () => {
    mockGetLastLocation.mockResolvedValue({
      id: 3,
      name: "Marché Saint-Germain",
      address: "Marché Saint-Germain, 75006 Paris",
      coordinates: {
        lat: 48.8547,
        lng: 2.3347
      },
      schedule: [
        { day: "Samedi", time: "10h00 - 16h00" },
        { day: "Dimanche", time: "10h00 - 16h00" }
      ]
    });

    render(<Location />);
    await waitFor(() => {
      expect(screen.getByText(/Horaires:/i)).toBeInTheDocument();
      expect(screen.getByText(/Samedi: 10h00 - 16h00/i)).toBeInTheDocument();
      expect(screen.getByText(/Dimanche: 10h00 - 16h00/i)).toBeInTheDocument();
    });
  });

  it("affiche un message quand aucune localisation n'est disponible", async () => {
    mockGetLastLocation.mockResolvedValue(undefined);

    render(<Location />);
    await waitFor(() => {
      expect(screen.getByText(/Aucune localisation disponible/i)).toBeInTheDocument();
    });
  });

  it("appelle getLastLocation lors du rendu", async () => {
    mockGetLastLocation.mockResolvedValue({
      id: 3,
      name: "Marché Saint-Germain",
      address: "Marché Saint-Germain, 75006 Paris",
      coordinates: {
        lat: 48.8547,
        lng: 2.3347
      },
      schedule: [
        { day: "Samedi", time: "10h00 - 16h00" },
        { day: "Dimanche", time: "10h00 - 16h00" }
      ]
    });

    render(<Location />);
    await waitFor(() => {
      expect(mockGetLastLocation).toHaveBeenCalledTimes(1);
    });
  });
}); 