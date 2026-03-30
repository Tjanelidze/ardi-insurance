import { forwardRef, useImperativeHandle, useState } from "react";
import { validateDriverFields, validateVehicleFields } from "@/utils/validation.ts";
import type { DriverFields, Errors, StepOneRef, VehicleFields } from "@/types/insurance.types.ts";
import { TextInput } from "@/components/ui/TextInput/TextInput.tsx";
import { CheckCircleIcon, WarningIcon } from "@/components/ui/icons.tsx";
import { lookupPlate } from "@/api/plateApi.ts";
import type { StepOneDriverInfoProps } from "@/components/steps/StepOneDriverInfo/StepOneDriverInfo.types.ts";

export const StepOneDriverInfo = forwardRef<StepOneRef, StepOneDriverInfoProps>(
  ({ driverData, vehicleData, onDriverChange, onVehicleChange }, ref) => {
    const [errors, setErrors] = useState<Errors>({});
    const [plateLoading, setPlateLoading] = useState(false);
    const [plateStatus, setPlateStatus] = useState<
      "found" | "not_found" | null
    >(null);

    useImperativeHandle(ref, () => ({
      validate: () => {
        const driverErrors = validateDriverFields(driverData);
        const vehicleErrors = validateVehicleFields(vehicleData);
        const combined = { ...driverErrors, ...vehicleErrors };
        setErrors(combined);

        return Object.keys(combined).length === 0;
      },
    }));

    const updateDriver =
      (field: keyof DriverFields) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onDriverChange({ ...driverData, [field]: e.target.value });
        if (errors[field])
          setErrors((prev) => ({ ...prev, [field]: undefined }));
      };

    const updateVehicle =
      (field: keyof VehicleFields) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onVehicleChange({ ...vehicleData, [field]: e.target.value });
        if (errors[field])
          setErrors((prev) => ({ ...prev, [field]: undefined }));
        if (field === "plateNumber") setPlateStatus(null);
      };

    const handlePlateLookup = async () => {
      if (!vehicleData.plateNumber.trim()) return;
      setPlateLoading(true);
      setPlateStatus(null);

      try {
        const result = await lookupPlate(vehicleData.plateNumber);

        if (result) {
          onVehicleChange({
            ...vehicleData,
            brand: result.brand,
            model: result.model,
            year: result.year,
          });
          setPlateStatus("found");
        } else {
          setPlateStatus("not_found");
        }
      } finally {
        setPlateLoading(false);
      }
    };

    return (
      <div className="p-6 sm:p-8">
        <div className="mb-8">
          <h3 className="text-primary-500 mb-4 text-xs font-semibold tracking-wider uppercase">
            მძღოლის ინფორმაცია
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TextInput
              name="firstName"
              label="სახელი"
              required
              placeholder="გიორგი"
              value={driverData.firstName}
              onChange={updateDriver("firstName")}
              error={errors.firstName}
            />
            <TextInput
              name="lastName"
              label="გვარი"
              required
              placeholder="მამულაშვილი"
              value={driverData.lastName}
              onChange={updateDriver("lastName")}
              error={errors.lastName}
            />
            <TextInput
              name="idNumber"
              label="პირადი ნომერი"
              required
              placeholder="01234567890"
              maxLength={11}
              value={driverData.idNumber}
              onChange={updateDriver("idNumber")}
              error={errors.idNumber}
            />
            <TextInput
              name="phone"
              label="ტელეფონი"
              required
              placeholder="+995 599 123456"
              value={driverData.phone}
              onChange={updateDriver("phone")}
              error={errors.phone}
            />
            <div className="sm:col-span-2">
              <TextInput
                name="birthDate"
                label="დაბადების თარიღი"
                required
                type="date"
                value={driverData.birthDate}
                onChange={updateDriver("birthDate")}
                error={errors.birthDate}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-primary-500 mb-4 text-xs font-semibold tracking-wider uppercase">
            ავტომობილის ინფორმაცია
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <TextInput
                name="plateNumber"
                label="სახელმწიფო ნომერი"
                required
                placeholder="AA-123-BB"
                value={vehicleData.plateNumber}
                onChange={updateVehicle("plateNumber")}
                error={errors.plateNumber}
                actionButton={{
                  label: "შემოწმება",
                  onClick: handlePlateLookup,
                  loading: plateLoading,
                }}
              />
              {plateStatus === "found" && (
                <p className="text-primary-500 mt-1 flex items-center gap-1.5 text-xs">
                  <CheckCircleIcon size={14} />
                  <span>ავტომობილი მოიძებნა და მონაცემები შეივსო</span>
                </p>
              )}
              {plateStatus === "not_found" && (
                <p className="mt-1 flex items-center gap-1.5 text-xs text-amber-500">
                  <WarningIcon size={14} />
                  <span>ნომერი ვერ მოიძებნა — მონაცემები ხელით შეიყვანეთ</span>
                </p>
              )}
            </div>
            <TextInput
              name="brand"
              label="მარკა"
              required
              placeholder="Toyota"
              value={vehicleData.brand}
              onChange={updateVehicle("brand")}
              error={errors.brand}
            />
            <TextInput
              name="model"
              label="მოდელი"
              required
              placeholder="Camry"
              value={vehicleData.model}
              onChange={updateVehicle("model")}
              error={errors.model}
            />
            <TextInput
              name="year"
              label="გამოშვების წელი"
              required
              placeholder="2020"
              type="number"
              min={1900}
              max={new Date().getFullYear()}
              value={vehicleData.year}
              onChange={updateVehicle("year")}
              error={errors.year}
            />
            <TextInput
              name="marketValue"
              label="საბაზრო ღირებულება (GEL)"
              required
              placeholder="25000"
              type="number"
              min={1}
              value={vehicleData.marketValue}
              onChange={updateVehicle("marketValue")}
              error={errors.marketValue}
            />
          </div>
        </div>
      </div>
    );
  },
);
