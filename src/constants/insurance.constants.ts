import type { Addons, DriverFields, PackageType, VehicleFields } from "@/types/insurance.types.ts";

export const INITIAL_DRIVER: DriverFields = {
  firstName: "",
  lastName: "",
  idNumber: "",
  birthDate: "",
  phone: "",
};

export const INITIAL_VEHICLE: VehicleFields = {
  plateNumber: "",
  brand: "",
  model: "",
  year: "",
  marketValue: "",
};

export const INITIAL_ADDONS: Addons = {
  roadsideAssistance: false,
  replacementCar: false,
  zeroDeductible: false,
};

export const PACKAGES = [
  {
    type: "basic" as PackageType,
    title: "Basic",
    rate: "1.2%",
    description: "მინიმალური დაცვა",
    features: [{ label: "მესამე პირის მიმართ ზიანი" }],
  },
  {
    type: "standard" as PackageType,
    title: "Standard",
    rate: "1.8%",
    description: "ოპტიმალური დაცვა",
    badge: "პოპულარული",
    features: [
      { label: "მესამე პირის მიმართ ზიანი" },
      { label: "ქურდობა" },
      { label: "მინების დაზიანება" },
    ],
  },
  {
    type: "premium" as PackageType,
    title: "Premium",
    rate: "2.5%",
    description: "სრული დაცვა",
    features: [
      { label: "Standard-ის ყველა პაკეტი" },
      { label: "სტიქიური მოვლენები" },
      { label: "საკუთარი ავტომობილის დაზიანება" },
    ],
  },
];

export const ADDONS = [
  {
    key: "roadsideAssistance" as keyof Addons,
    label: "Roadside Assistance",
    description: "გზის დახმარება ნებისმიერ სიტუაციაში",
    price: "+40 GEL",
  },
  {
    key: "replacementCar" as keyof Addons,
    label: "Replacement Car",
    description: "სამარქვეო ავტომობილი შეკეთების პერიოდში",
    price: "+90 GEL",
  },
  {
    key: "zeroDeductible" as keyof Addons,
    label: "0% Deductible",
    description: "ზარალის სრული ანაზღაურება გამოქვითვის გარეშე",
    price: "+15%",
  },
];

export const PACKAGE_RATES: Record<PackageType, number> = {
  basic: 0.012,
  standard: 0.018,
  premium: 0.025,
};
