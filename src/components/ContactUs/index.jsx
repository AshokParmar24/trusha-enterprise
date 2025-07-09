import React from "react";
import { useForm, Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  isValidPhoneNumber,
  formatNumber,
  parsePhoneNumber,
} from "libphonenumber-js";
import "./contactus.css";
import { Divider, Radio, Group, Input } from "@mantine/core";
import { registation } from "@/services/api";
import { toast } from "react-toastify";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formatted = parsePhoneNumber(data?.phoneNumber)?.formatNational();
      const payload = {
        name: data?.name,
        email: data?.email,
        phoneNumber: formatted,
        gender: data?.gender,
      };
      console.log("payloadpayloadpayload :>> ", payload);
      const response = await registation(payload);
      console.log("response :>> ", response);

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        reset()
      }
    } catch (error) {
      console.log("error :>> ", error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">
          Welcome to Tulsi Enterprise
        </h2>
        <Divider className="py-2" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              className={`w-full ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Your email"
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 ring-red-100" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: "Phone number is required",
                validate: (value) =>
                  isValidPhoneNumber(value || "") || "Invalid phone number",
              }}
              render={({ field, fieldState }) => (
                <>
                  <PhoneInput
                    {...field}
                    defaultCountry="IN"
                    placeholder="Enter phone number"
                    className={`w-full px-3 py-2 border ${
                      fieldState.error ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-sm mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          {/* Gender / Framework Radio Group */}
          <div>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Please select one option" }}
              render={({ field }) => (
                <Radio.Group {...field} label="Select your gender" withAsterisk>
                  <Group mt="xs">
                    <Radio value="Male" label="Male" />
                    <Radio value="Female" label="Female" />
                    <Radio value="Other" label="Other" />
                  </Group>
                </Radio.Group>
              )}
            />
            {errors.framework && (
              <p className="text-red-500 text-sm mt-1">
                {errors.framework.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
