import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export default function ContactBanner() {
  return (
    <>
      {/* Contact banner */}
      <div className="bg-blue-950 p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Email section */}
          <div className="flex items-center space-x-2 text-gray-50">
            <FaMailBulk size={24} className="cursor-pointer" />
            <div className="flex flex-col">
              <div>Email</div>
              <div>info@skillscareer.com</div>
            </div>
          </div>

          {/* Phone section */}
          <div className="flex items-center space-x-2 text-gray-50">
            <FaPhone size={24} className="cursor-pointer" />
            <div className="flex flex-col">
              <div>Phone</div>
              <div>0112-234-763</div>
            </div>
          </div>

          {/* Location section */}
          <div className="flex items-center space-x-2 text-gray-50">
            <FaLocationArrow size={24} className="cursor-pointer" />
            <div className="flex flex-col">
              <div>Location</div>
              <div>Union Place, Colombo 07</div>
            </div>
          </div>

          {/* Social icons section */}
          <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <FaLinkedin size={24} className="cursor-pointer" />
            <FaTwitter size={24} className="cursor-pointer" />
            <FaInstagram size={24} className="cursor-pointer" />
            <FaFacebook size={24} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
