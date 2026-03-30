export type DriverFields = {
  firstName: string;
  lastName: string;
  idNumber: string;
  birthDate: string;
  phone: string;
};

export type VehicleFields = {
  plateNumber: string;
  brand: string;
  model: string;
  year: string;
  marketValue: string;
};

export type Errors = Partial<DriverFields & VehicleFields>;

export type StepOneRef = {
  validate: () => boolean;
};

export type PackageType = "basic" | "standard" | "premium";

export type Addons = {
  roadsideAssistance: boolean;
  replacementCar: boolean;
  zeroDeductible: boolean;
};
