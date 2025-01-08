import Image from 'next/image';

export default function PressCard({onClick}) {
  return (
    <div className="relative bg-white rounded-lg shadow-md w-70"
    onClick={onClick}>
      {/* Main Image */}
      <div className="relative w-full h-48">
        <Image
          src="/images/pressimg.png"
          alt="Main Image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {/* Action Icons */}
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className=" rounded-full shadow-md">
            <Image
              src="/images/editiconwhite.png"
              alt="Edit Icon"
              width={30}
              height={16}
            />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md">
            <Image
              src="/images/trashblue.png"
              alt="Delete Icon"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
      {/* Text Content */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800 px-5 mb-3">
          5 Essential Skills for Thriving in a Digital Workplace.
        </h3>
        <p className="text-sm text-gray-500  px-5 mb-2">24 AUG 2024</p>
      </div>
    </div>
  );
}
