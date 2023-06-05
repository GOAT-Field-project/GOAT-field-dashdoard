import React, { useEffect, useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
export function ContactUs() {

  // const [contactInfo, setContactInfo] = useState([])

  const getContactInfo = async () => {
    try {
      const response = await fetch("http://localhost:8181/getContact");
      const jsonData = await response.json()
      console.log(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getContactInfo()
  }, [])

  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")

  function handleContact(e) {
    e.preventDefault()

    console.log(phone, email, location)

    axios.put('http://localhost:8181/contactus00/2', {

      email: email,
      phone_number: phone,
      location_link: location
    })
      .then(function (response) {
        console.log(response);
        // window.location.reload(false);

      })
      .catch(function (error) {
        console.log(error);
      });


  }


  return (


    <form onSubmit={handleContact}>
      <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">

        <div className=' '>
          <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Edit contact us inoformation</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500"> You can contact us anytime to share your ideas on how to improve our company. We value your support and would be glad to have you as a valuable contributor.
                </p>
              </div>

              <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                  <div className="overflow-hidden bg-white rounded-xl">
                    <div className="p-6">
                      <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          fill='#2E594A'
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <p className="mt-6 text-lg font-medium text-gray-900">
                        <a href="tel:+962790012079">+962 790012079</a>
                      </p>
                      <input className="border border-black border-solid" type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="overflow-hidden bg-white rounded-xl">
                    <div className="p-6">
                      <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path fill='#2E594A' d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="mt-6 text-lg font-medium text-gray-900">
                        <a href="mailto:OWNER@GOAT.com">OWNER@GOAT.com</a>
                      </p>
                      <input className="border border-black border-solid" type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="overflow-hidden bg-white rounded-xl">
                    <div className="p-6">
                      <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path fill='#2E594A ' d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path fill='#2E594A' d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                        <a href="https://goo.gl/maps/5xLRKXYoJmdNnYtw6?coh=178573&entry=tt" target="_blank" rel="noopener noreferrer">
                          Our Location
                        </a>
                      </p>
                      <input className="border border-black border-solid" type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />

                    </div>
                  </div>
                  <button type="submit">ADD</button>
                </div>

                {/* <div className="mt-6 overflow-hidden bg-white rounded-xl">
                <div className="px-6 py-12 sm:p-12">
                  <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                  <form action="#" method="POST" className="mt-14" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                      <div>
                        <label className="text-base font-medium text-gray-900"> Your name </label>
                        <div className="mt-2.5 relative">
                          <input required type="text" name="name" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-600 caret-green-600" />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900"> Email address </label>
                        <div className="mt-2.5 relative">
                          <input required type="email" name="email" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-600 caret-green-600" />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900"> Phone number </label>
                        <div className="mt-2.5 relative">
                          <input required type="tel" name="phone" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-600 caret-green-600" />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900"> Company name </label>
                        <div className="mt-2.5 relative">
                          <input required type="text" name="company" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-600 caret-green-600" />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-base font-medium text-gray-900"> Message </label>
                        <div className="mt-2.5 relative">
                          <textarea required name="message" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-green-600 caret-green-600" rows="4"></textarea>
                        </div>
                      </div>


                      <button type="submit" className="relative left-60 w-ful px-5 py-2 font-medium text-white group">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-green-700 group-hover:skew-x-12"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-green-600 -rotate-12"></span>
                        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-green-400 -rotate-12"></span>
                        <span className="relative">Sign up</span>
                      </button>

                    </div>
                  </form>
                </div>
              </div> */}
              </div>
            </div>
          </section>

        </div>
      </div>

    </form>
  );
}

export default ContactUs;
