import React from "react";
import { useForm } from "react-hook-form";

const SubscriberForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-2 md:p-5 w-full mx-auto rounded-md max-w-3xl gap-4 border border-blue-300"
    >
      <h4 className="text-center">
        A. Subscriber's Fiber To The Home (FTTH) Information Sheet - INDIVIDUAL
      </h4>
      <h5 className="text-center bg-gray-700 text-white">
        A. ACCOUNT APPLICATION HISTORY
      </h5>

      <div className="border border-blue-300 rounded-md p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              Account Type
            </label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="accountType"
                  value="a"
                  className="form-radio"
                />
                <span className="ml-2">NEW SUBSCRIBER</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="accountType"
                  value="b"
                  className="form-radio"
                />
                <span className="ml-2">EXISTING PARASAT SUBSCRIBER</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="accountType"
                  value="c"
                  className="form-radio"
                />
                <span className="ml-2">SWITCHER FROM OTHER PROVIDER</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              CONTACT DATE
            </label>
            <input
              type="date"
              name="contactDate"
              placeholder="CONTACT DATE"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              ACCOUNT NUMBER (Parasat use only)
            </label>
            <input
              type="text"
              name="accountNumber"
              placeholder="ACCOUNT NUMBER (Parasat use only)"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
        </div>

        <h5 className="text-center bg-gray-700 text-white mt-6">
          B. SUBSCRIBER'S INFORMATION - RESIDENTIAL
        </h5>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              LAST NAME
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="LAST NAME"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              FIRST NAME
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="FIRST NAME"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              MIDDLE NAME
            </label>
            <input
              type="text"
              name="middleName"
              placeholder="MIDDLE NAME"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="block text-sm font-bold text-gray-700">
            COMPLETE HOME ADDRESS
          </label>
          <input
            type="text"
            name="homeAddress"
            placeholder="COMPLETE HOME ADDRESS"
            className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <label className="flex items-center">
            <input type="checkbox" name="owned" className="form-checkbox" />
            <span className="ml-2">OWNED</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="rented" className="form-checkbox" />
            <span className="ml-2">RENTED</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="livingWithRelatives"
              className="form-checkbox"
            />
            <span className="ml-2">LIVING W/ RELATIVES</span>
          </label>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              BIRTH DATE
            </label>
            <input
              type="date"
              name="birthDate"
              placeholder="BIRTH DATE"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              CONTACT NUMBER
            </label>
            <input
              type="text"
              name="contactNumber"
              placeholder="CONTACT NUMBER"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              SPECIFY LANDMARK
            </label>
            <input
              type="text"
              name="landmark"
              placeholder="SPECIFY LANDMARK"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label className="block text-sm font-bold text-gray-700">
            BUSINESS / EMPLOYER ADDRESS
          </label>
          <input
            type="text"
            name="employerAddress"
            placeholder="BUSINESS / EMPLOYER ADDRESS"
            className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
          />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              POSITION / TITLE
            </label>
            <input
              type="text"
              name="position"
              placeholder="POSITION / TITLE"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              YEARS WITH FIRM
            </label>
            <input
              type="text"
              name="yearsWithFirm"
              placeholder="YEARS WITH FIRM"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
        </div>

        <h5 className="text-center bg-gray-700 text-white mt-6">
          C. OTHER INFORMATION
        </h5>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              MARITAL STATUS
            </label>
            <input
              type="text"
              name="maritalStatus"
              placeholder="MARITAL STATUS"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              NAME OF SPOUSE
            </label>
            <input
              type="text"
              name="spouseName"
              placeholder="NAME OF SPOUSE"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-bold text-gray-700">
              CONTACT NUMBER
            </label>
            <input
              type="text"
              name="spouseContactNumber"
              placeholder="CONTACT NUMBER"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
        </div>

        <h5 className="text-center bg-gray-700 text-white mt-6">
          D. SUBSCRIBER'S INFORMATION - COMMERCIAL
        </h5>

        <div className="flex flex-col mt-4">
          <label className="block text-sm font-bold text-gray-700">
            CORPORATE NAME
          </label>
          <input
            type="text"
            name="corporateName"
            placeholder="CORPORATE NAME"
            className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="block text-sm font-bold text-gray-700">
            ADDRESS
          </label>
          <input
            type="text"
            name="corporateAddress"
            placeholder="ADDRESS"
            className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="block text-sm font-bold text-gray-700">
            AUTHORIZE REPRESENTATIVE
          </label>
          <input
            type="text"
            name="authorizedRepresentative"
            placeholder="AUTHORIZE REPRESENTATIVE"
            className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex flex-col w-full">
            <label className="block text-sm font-bold text-gray-700">
              CONTACT NUMBER
            </label>
            <input
              type="text"
              name="corporateContactNumber"
              placeholder="CONTACT NUMBER"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="block text-sm font-bold text-gray-700">
              POSITION TITLE
            </label>
            <input
              type="text"
              name="corporatePosition"
              placeholder="POSITION TITLE"
              className="mt-1 block w-full border-black rounded-md shadow-sm bg-gray-100"
            />
          </div>
        </div>

        <h5 className="text-center bg-gray-700 text-white mt-6">
          E. FOR PARASAT USE ONLY
        </h5>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Save
        </button>

        {errors && (
          <p className="text-red-500 mt-4">
            Not all fields of the form are filled in correctly. Correct the
            values of the form fields and try again.
          </p>
        )}
        {!errors && (
          <p className="text-green-500 mt-4">
            The form has been sent, thank you!
          </p>
        )}
      </div>
    </form>
  );
};

export default SubscriberForm;
