import { GenerateBtn } from "./";

const VCard = () => {
  return (
    <form>
      <h1 className="text-lg text-[#616568] font-semibold">vCard QR Code</h1>
      <div className="sm:flex justify-between items-start my-4">
        <label htmlFor="name" className="text-gray-500 w-1/4">
          Your Name:
        </label>
        <div className="flex justify-between sm:sm:w-3/4 flex-wrap">
          <input
            type="text"
            id="name"
            placeholder="First Name"
            className="block focus:outline-none border-2 py-2 px-2 w-[48%]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="block focus:outline-none border-2 py-2 px-2 w-[48%]"
          />
        </div>
      </div>
      <div className="sm:flex justify-between items-start my-4">
        <label htmlFor="mobile" className="text-gray-500 w-1/4">
          Contact:
        </label>
        <div className="flex justify-between sm:w-3/4 flex-wrap">
          <input
            type="text"
            id="mobile"
            placeholder="Mobile"
            className="block focus:outline-none border-2 py-2 px-2 w-[100%] mb-4"
          />
          <input
            type="text"
            id="name"
            placeholder="Phone"
            className="block focus:outline-none border-2 py-2 px-2 w-[48%]"
          />
          <input
            type="text"
            placeholder="Fax"
            className="block focus:outline-none border-2 py-2 px-2 w-[48%]"
          />
        </div>
      </div>
      <div className="sm:flex justify-between items-start my-4">
        <label htmlFor="email" className="text-gray-500 w-1/4">
          Email:
        </label>
        <div className="flex justify-between sm:w-3/4 flex-wrap">
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
          />
        </div>
      </div>
      <div className="sm:flex justify-between items-start my-4">
        <label htmlFor="company" className="text-gray-500 w-1/4">
          Company:
        </label>
        <div className="flex justify-between sm:w-3/4 flex-wrap">
          <input
            type="text"
            id="company"
            placeholder="Company"
            className="block focus:outline-none border-2 py-2 px-2 w-[48%]"
          />
          <input
            type="text"
            id="name"
            placeholder="Your job"
            className="block focus:outline-none border-2 py-2 px-2 w-[48%]"
          />
        </div>
      </div>
      <div className="sm:flex justify-between items-start my-4">
        <label htmlFor="street" className="text-gray-500 w-1/4">
          Street:
        </label>
        <div className="flex justify-between sm:w-3/4 flex-wrap">
          <input
            type="text"
            id="street"
            className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
          />
        </div>
      </div>
      <div className="sm:flex justify-between items-start my-4">
        <label htmlFor="city" className="text-gray-500 w-1/4">
          City:
        </label>
        <div className="flex justify-between sm:w-3/4 flex-wrap">
          <input
            type="text"
            id="city"
            className="block focus:outline-none border-2 py-2 px-2 w-[58%]"
          />
          <input
            type="text"
            id="name"
            placeholder="ZIP"
            className="block focus:outline-none border-2 py-2 px-2 w-[38%]"
          />
        </div>
      </div>
      <div className="sm:flex justify-between items-start my-4">
        <label htmlFor="state" className="text-gray-500 w-1/4">
          State:
        </label>
        <div className="flex justify-between sm:w-3/4 flex-wrap">
          <input
            type="text"
            id="state"
            className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
          />
        </div>
      </div>
      <div className="sm:flex justify-between items-start my-4">
        <label htmlFor="country" className="text-gray-500 w-1/4">
          Country:
        </label>
        <div className="flex justify-between sm:w-3/4 flex-wrap">
          <input
            type="text"
            id="country"
            className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
          />
        </div>
      </div>
      <div className="sm:flex justify-between items-start my-4">
        <label htmlFor="website" className="text-gray-500 w-1/4">
          Website:
        </label>
        <div className="flex justify-between sm:w-3/4 flex-wrap">
          <input
            type="text"
            id="website"
            placeholder="www.your-website.com"
            className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
          />
        </div>
      </div>
      <GenerateBtn />
    </form>
  );
};

export default VCard;
