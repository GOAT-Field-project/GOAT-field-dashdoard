import React, { useEffect, useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function ContactUs() {


  const [contactInfo, setContactInfo] = useState([]);

  // ! get all contact info
  const getContactInfo = async () => {
    try {
      const response = await fetch("http://localhost:8181/getContact");
      const jsonData = await response.json();
      setContactInfo(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getContactInfo();
  }, []);







  return (
    <div className="mx-auto my-20 flex flex-col items-center">
      <div className="max-w-screen-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Edit contact us information
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            You can contact us anytime to share your ideas on how to improve our company. We value your support and would be glad to have you as a valuable contributor.
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-6 ">
          {contactInfo.map((info) => (
            <div key={info.id} className="flex items-center bg-white rounded-xl p-6">
              {info.phone_number && (
                <div className="flex flex-col flex-wrap items-center m-5">
                  <svg
                    className="w-10 h-10 text-gray-400 mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#2E594A"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-lg font-medium text-gray-900">
                    <a href={`tel:${info.phone_number}`}>{info.phone_number}</a>
                  </p>
                </div>
              )}


              {info.email && (
                <div className="flex flex-col items-center m-5">
                  <svg
                    className="w-10 h-10 text-gray-400 mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#2E594A"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-lg font-medium text-gray-900">
                    <a href={`mailto:${info.email}`}>{info.email}</a>
                  </p>
                </div>
              )}


              {info.location_link && (
                <div className="flex flex-col items-center m-5">
                  <svg
                    className="w-10 h-10 text-gray-400 mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#2E594A"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      fill="#2E594A"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-lg font-medium leading-relaxed text-gray-900">
                    <a
                      href={info.location_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Location
                    </a>
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
