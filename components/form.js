import Image from "next/image";
export default function Form() {
  return (
    <div className="flex flex-col">
      <div className="block mx-auto">
        <Image src="/images/Logo.png" alt="Logo" width={300} height={200} />
      </div>
      <form className="flex flex-col ">
        <div className="w-2/3 mx-auto">
          <label
            className="block  w-full text-gray-500 font-bold"
            for="inline-full-name"
          >
            Email
          </label>

          <div className="md:w-2/3">
            <input className=" border-2 border-gray-200 rounded w-full py-2 px-4 " />
          </div>
        </div>
        <div className="w-2/3 mx-auto">
          <label
            className="block  w-full text-gray-500 font-bold"
            for="inline-full-name"
          >
            Password
          </label>

          <div className="md:w-2/3">
            <input className=" border-2 border-gray-200 rounded w-full py-2 px-4 " />
          </div>
        </div>
      </form>
    </div>
  );
}
