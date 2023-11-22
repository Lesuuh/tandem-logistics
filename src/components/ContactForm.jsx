import { useState } from "react";

export const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDetails((values) => ({ ...values, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form sucessfully submited", formDetails);
    alert(JSON.stringify(formDetails, null, 2));
  };

  return (
    <div
      data-aos="fade-up"
      className="w-full max-w-[1100px] mx-auto my-10 px-5"
    >
      <h1 className="text-center text-2xl font-bold">Write Your Message</h1>
      <div className="bg-white mt-10 p-5 md:p-10 rounded   max-w-[900px] mx-auto">
        <form
          onSubmit={formSubmit}
          action=""
          className="flex flex-col   justify-between"
        >
          <div className="flex flex-wrap justify-between  gap-5">
            <input
              type="text"
              placeholder="Fullname*"
              className="w-full md:w-[400px] h-[40px] border border-solid px-5"
              name="fullname"
              onChange={handleChange}
              value={formDetails.fullname || ""}
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full md:w-[400px] h-[40px] border border-solid px-5"
              name="email"
              onChange={handleChange}
              value={formDetails.email}
              required
            />
          </div>
          <div className="flex flex-wrap justify-between  gap-5 mt-10">
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full md:w-[400px] h-[40px] border border-solid px-5"
              name="phone"
              onChange={handleChange}
              value={formDetails.phone}
              required
            />
            <input
              type="text"
              placeholder="City*"
              className="w-full md:w-[400px] h-[40px] border border-solid px-5"
              name="city"
              onChange={handleChange}
              value={formDetails.city}
              required
            />
          </div>
          <div className="flex flex-wrap gap-5 mt-10">
            <input
              type="text"
              placeholder="Subject"
              className="w-full  h-[40px] border border-solid px-5"
              name="subject"
              onChange={handleChange}
              value={formDetails.subject}
            />
          </div>
          <div className="flex gap-5 mt-10">
            <textarea
              id=""
              cols="30"
              rows="10"
              className="border border-solid w-full p-5"
              placeholder="Type your message here"
              name="message"
              onChange={handleChange}
              value={formDetails.message}
            ></textarea>
          </div>

          <button
            type="submit"
            className=" rounded px-5 py-2 max-w-[200px] w-full  text-white font-bold mt-10 flex justify-center items-center bg-orange"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
