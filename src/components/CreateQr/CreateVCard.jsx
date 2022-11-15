import { PreviewQrWrapper, PhoneFrame, EnterQrCode, CreateBtn } from "../";
import { RecentActors } from "@mui/icons-material";

const CreateVCard = () => {
  return (
    <form className="w-full">
      <div className="flex space-x-4">
        <div className="md:w-2/3 w-full">
          <EnterQrCode
            title={"Enter your contact data"}
            icon={<RecentActors sx={{ color: "#616568", fontSize: "2rem" }} />}
          >
            <h1 className="text-[#82848f] mb-14">
              Enter your contact details. Users can save your info to their
              smartphone address book after scanning or contact you right away.
            </h1>
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="name" className="text-gray-500 w-1/4">
                Your Name:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
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
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="mobile" className="text-gray-500 w-1/4">
                Contact:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
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
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="email" className="text-gray-500 w-1/4">
                Email:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
                />
              </div>
            </div>
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="company" className="text-gray-500 w-1/4">
                Company:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
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
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="street" className="text-gray-500 w-1/4">
                Street:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
                <input
                  type="text"
                  id="street"
                  className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
                />
              </div>
            </div>
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="city" className="text-gray-500 w-1/4">
                City:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
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
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="state" className="text-gray-500 w-1/4">
                State:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
                <input
                  type="text"
                  id="state"
                  className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
                />
              </div>
            </div>
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="country" className="text-gray-500 w-1/4">
                Country:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
                <input
                  type="text"
                  id="country"
                  className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
                />
              </div>
            </div>
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="website" className="text-gray-500 w-1/4">
                Website:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
                <input
                  type="text"
                  id="website"
                  placeholder="www.your-website.com"
                  className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
                />
              </div>
            </div>
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="country" className="text-gray-500 w-1/4">
                Country:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
                <input
                  type="text"
                  id="country"
                  className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
                />
              </div>
            </div>
            <div className="lg:flex justify-between items-start my-4">
              <label htmlFor="website" className="text-gray-500 w-1/4">
                Website:
              </label>
              <div className="flex justify-between lg:w-3/4 flex-wrap">
                <input
                  type="text"
                  id="website"
                  placeholder="www.your-website.com"
                  className="block focus:outline-none border-2 py-2 px-2 w-[100%]"
                />
              </div>
            </div>
          </EnterQrCode>
        </div>
        <div className="min-w-[23rem] hidden md:block relative">
          <PreviewQrWrapper>
            <PhoneFrame>
              <div className="bg-gray-400 py-4 px-3">
                <p className="text-center text-white">Vcard</p>
              </div>
            </PhoneFrame>
          </PreviewQrWrapper>
        </div>
      </div>
      <CreateBtn backBtn={true} disabled={false} />
    </form>
  );
};

export default CreateVCard;
