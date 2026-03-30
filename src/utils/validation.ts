import type { DriverFields, VehicleFields } from "../types/insurance.types";

export function validateDriverFields(
  driver: DriverFields,
): Partial<DriverFields> {
  const errors: Partial<DriverFields> = {};

  if (!driver.firstName.trim()) {
    errors.firstName = "სახელი სავალდებულოა";
  }

  if (!driver.lastName.trim()) {
    errors.lastName = "გვარი სავალდებულოა";
  }

  if (!driver.idNumber.trim()) {
    errors.idNumber = "პირადი ნომერი სავალდებულოა";
  } else if (!/^\d{11}$/.test(driver.idNumber.trim())) {
    errors.idNumber = "პირადი ნომერი უნდა იყოს 11 ციფრი";
  }

  if (!driver.phone.trim()) {
    errors.phone = "ტელეფონი სავალდებულოა";
  } else if (
    !/^(\+995|0)\s?\d{3}\s?\d{2}\s?\d{2}\s?\d{2}$/.test(driver.phone.trim())
  ) {
    errors.phone = "ვალიდური ფორმატი: +995 599 123456";
  }

  if (!driver.birthDate) {
    errors.birthDate = "დაბადების თარიღი სავალდებულოა";
  } else {
    const age = getAge(driver.birthDate);

    if (age < 18) {
      errors.birthDate = "მძღოლი უნდა იყოს მინიმუმ 18 წლის";
    }
  }

  return errors;
}

export function validateVehicleFields(
  vehicle: VehicleFields,
): Partial<VehicleFields> {
  const errors: Partial<VehicleFields> = {};

  if (!vehicle.plateNumber.trim()) {
    errors.plateNumber = "სახელმწიფო ნომერი სავალდებულოა";
  }

  if (!vehicle.brand.trim()) {
    errors.brand = "მარკა სავალდებულოა";
  }

  if (!vehicle.model.trim()) {
    errors.model = "მოდელი სავალდებულოა";
  }

  if (!vehicle.year) {
    errors.year = "გამოშვების წელი სავალდებულოა";
  } else if (parseInt(vehicle.year) > new Date().getFullYear()) {
    errors.year = "წელი არ უნდა იყოს მომავალში";
  }

  if (!vehicle.marketValue) {
    errors.marketValue = "ღირებულება სავალდებულოა";
  } else if (parseFloat(vehicle.marketValue) <= 0) {
    errors.marketValue = "ღირებულება უნდა იყოს დადებითი რიცხვი";
  }

  return errors;
}

function getAge(birthDate: string): number {
  const bd = new Date(birthDate);
  const today = new Date();
  const age = today.getFullYear() - bd.getFullYear();
  const hasHadBirthdayThisYear =
    today >= new Date(today.getFullYear(), bd.getMonth(), bd.getDate());

  return hasHadBirthdayThisYear ? age : age - 1;
}
