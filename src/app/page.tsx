"use client";
import { useState } from "react";
import FormInput from "./component/FormInput";

export default function Home() {
  const [surveyData, setSurveyData] = useState({
    surveyNo: "",
    date: "",
    schoolName: "",
    schoolAddress: "",
    schoolType: "",
    studentStrength: "",
    noOfClassrooms: "",
    labAvailability: "",
    surveyorName: "",
    principalName: "",
    noOfTeachers: "",
    minStaffQualification: "",
    noOfOtherStaffs: "",
    isLibraryAvailable: false,
    isPlaygroundAvailable: false,
    keyChallenges: "",
  });

  const formContent = [
    {
      label: "Unique ref No. / Report No. /  Survey No.",
      value: surveyData?.surveyNo,
      name: "surveyNo",
      type: "text",
    },
    {
      label: "Date",
      value: surveyData?.date,
      name: "date",
      type: "date",
    },
    {
      label: "Name of the school",
      value: surveyData?.schoolName,
      name: "schoolName",
      type: "text",
    },
    {
      label: "School address",
      value: surveyData?.schoolAddress,
      name: "schoolAddress",
      type: "text",
    },
    {
      label: "School Type",
      value: surveyData?.schoolType,
      name: "schoolType",
      type: "radio",
      options: [
        { label: "Primary", value: true },
        { label: "Secondary", value: false },
        { label: "Higher Secondary", value: false },
      ],
    },
    {
      label: "Student Strength",
      value: surveyData?.studentStrength,
      name: "studentStrength",
      type: "text",
    },
    {
      label: "No. of Classrooms",
      value: surveyData?.noOfClassrooms,
      name: "noOfClassrooms",
      type: "number",
    },
    {
      label: "Availability of labs (science, computer, etc)",
      value: surveyData?.labAvailability,
      name: "labAvailability",
      type: "text",
    },
    {
      label: "Name of the Surveyor",
      value: surveyData?.surveyorName,
      name: "surveyorName",
      type: "text",
    },
    {
      label: "Name of the Prinicipal",
      value: surveyData?.principalName,
      name: "principalName",
      type: "text",
    },
    {
      label: "No. of Teachers",
      value: surveyData?.noOfTeachers,
      name: "noOfTeachers",
      type: "number",
    },
    {
      label: "Minimum staff qualifications",
      value: surveyData?.minStaffQualification,
      name: "minStaffQualification",
      type: "text",
    },
    {
      label: "No. of Other Staffs",
      value: surveyData?.noOfOtherStaffs,
      name: "noOfOtherStaffs",
      type: "number",
    },
    {
      label: "Library avalability (Yes/No)",
      value: surveyData?.isLibraryAvailable,
      name: "isLibraryAvailable",
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    {
      label: "Playground area",
      value: surveyData?.isPlaygroundAvailable,
      name: "isPlaygroundAvailable",
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    {
      label: "Key challenges faced by the school",
      value: surveyData?.keyChallenges,
      name: "keyChallenges",
      type: "text",
    },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = event.target;
    console.log("value - ", value);
    setSurveyData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "radio"
          ? value === "true"
          : value,
    }));
  };

  return (
    <main className="h-screen w-screen">
      <section className="p-5 max-w-5xl mx-auto">
        <div className="text-2xl font-bold text-center">SDK Candidate</div>
        {JSON.stringify(surveyData)}
        <section className="mt-6">
          <form className="flex flex-col items-start">
            {formContent?.map((_form, index) => (
              <FormInput
                key={index}
                label={_form?.label}
                type={_form?.type}
                name={_form?.name}
                value={_form?.value}
                onChange={handleChange}
                isFilled={
                  typeof surveyData[_form.name as keyof typeof surveyData] ===
                  "boolean"
                    ? surveyData[_form.name as keyof typeof surveyData]
                    : !!surveyData[_form.name as keyof typeof surveyData]
                }
                options={_form?.options}
              />
            ))}

            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                className="mt-5 p-3 w-fit bg-cyan-300 font-bold text-black rounded-md"
              >
                Generate PDF
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
