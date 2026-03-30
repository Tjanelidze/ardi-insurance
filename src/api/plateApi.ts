export type PlateApiResponse = {
  brand: string;
  model: string;
  year: string;
};

const MOCK_DB: Record<string, PlateApiResponse> = {
  "AA-123-BB": { brand: "Toyota", model: "Camry", year: "2020" },
  "BB-456-CC": { brand: "BMW", model: "X5", year: "2019" },
  "CC-789-DD": { brand: "Mercedes", model: "E200", year: "2022" },
  "DD-111-EE": { brand: "Hyundai", model: "Tucson", year: "2021" },
};

export async function lookupPlate(
  plate: string,
): Promise<PlateApiResponse | null> {
  await new Promise((r) => setTimeout(r, 1000));

  return MOCK_DB[plate.toUpperCase()] ?? null;
}
