"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Iinstitute } from "./institute.types";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { createInstitute } from "@/lib/store/institute/instituteSlice";
import { Status } from "@/lib/store/global/types";
import { useRouter } from "next/navigation";

function CreateInstitute() {
  const { status } = useAppSelector((state) => state.institute);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [data, setData] = useState<Iinstitute>({
    instituteName: "",
    instituteEmail: "",
    institutePhoneNumber: "",
    instituteAddress: "",
    instituteVatNo: "",
    institutePanNo: "",
  });
  console.log(data, "form data...");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // get from localStorage or get from Redux

    if (!token) return alert("Token not found");

    dispatch(createInstitute(data, token));
  };

  useEffect(() => {
    if (status === Status.Error) {
      alert("Institute already created !!!");
      window.location.href = "/";
    } else if (status === Status.Success) {
      alert("Institute created successfully");
    
    }
  }, [status]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div className="relative p-10 bg-white rounded-2xl shadow-lg max-w-lg w-full">
          {/* Decorative Background */}
          <div className="absolute inset-0 -z-10 transform rotate-6 bg-blue-500 rounded-2xl" />
          <h2 className="text-2xl font-semibold text-gray-800">
            <span className="font-bold">Please ! fillup the form</span>
          </h2>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="block font-medium text-gray-700">
                Institute Name*
              </label>
              <input
                onChange={handleChange}
                name="instituteName"
                type="text"
                placeholder="Type Name"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Institue Email*
              </label>
              <input
                onChange={handleChange}
                name="instituteEmail"
                type="email"
                placeholder="Type Your Email"
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Institute Phone No*
              </label>
              <input
                onChange={handleChange}
                name="institutePhoneNumber"
                type="text"
                placeholder="Type Phone No..."
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Institute Address*
              </label>
              <input
                onChange={handleChange}
                name="instituteAddress"
                type="text"
                placeholder="Type Address..."
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              <span className="font-bold">Type One*</span>
            </h2>
            <div>
              <label className="block font-medium text-gray-700">
                Institute Vat No.
              </label>
              <input
                onChange={handleChange}
                name="instituteVatNo"
                type="text"
                placeholder="Type Vat No..."
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Institute Pan No.
              </label>
              <input
                onChange={handleChange}
                name="institutePanNo"
                type="text"
                placeholder="Type Pan No..."
                className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
            >
              Create Institute
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateInstitute;
