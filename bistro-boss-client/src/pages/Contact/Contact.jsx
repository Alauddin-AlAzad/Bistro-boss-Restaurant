import contactBanner from '../../assets/contact/banner.jpg'
import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import Cover from '../Shared/Cover';
import SectionTitle from '../Shared/SectionTitle';
const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className=''>
                <Cover
                    title={'OUR SHOP'}
                    description={'Would you like to try a dish?'}
                    img={contactBanner}
                />
            </div>
            {/* here others element */}
            <div className='max-w-7xl mx-auto'>
                <div className='md:pb-32 pb-14' >
                    <SectionTitle heading={'---Visit Us---'} subHeading={"OUR LOCATION"}></SectionTitle>
                </div>
                {/* contact info  */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 ">


                        <div className="border border-gray-200 overflow-hidden shadow-sm">
                            <div className="bg-[#D1A054] text-white py-6 flex justify-center items-center">
                                <FaPhoneAlt className="text-2xl" />
                            </div>
                            <div className="bg-[#F3F3F3] mx-6 mb-6 p-8 text-center flex flex-col justify-center min-h-[160px]">
                                <h3 className="text-xl font-bold tracking-wider text-gray-800 uppercase mb-2">
                                    PHONE
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    +38 (012) 34 56 789
                                </p>
                            </div>
                        </div>


                        <div className="border border-gray-200 overflow-hidden shadow-sm">
                            <div className="bg-[#D1A054] text-white py-6 flex justify-center items-center">
                                <FaMapMarkerAlt className="text-2xl" />
                            </div>
                            <div className="bg-[#F3F3F3] mx-6 mb-6 p-8 text-center flex flex-col justify-center min-h-[160px]">
                                <h3 className="text-xl font-bold tracking-wider text-gray-800 uppercase mb-2">
                                    ADDRESS
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    +38 (012) 34 56 789
                                </p>
                            </div>
                        </div>


                        <div className="border border-gray-200 overflow-hidden shadow-sm">
                            <div className="bg-[#D1A054] text-white py-6 flex justify-center items-center">
                                <FaClock className="text-2xl" />
                            </div>
                            <div className="bg-[#F3F3F3] mx-6 mb-6 p-8 text-center flex flex-col justify-center min-h-[160px]">
                                <h3 className="text-xl font-bold tracking-wider text-gray-800 uppercase mb-2">
                                    WORKING HOURS
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                    Mon - Fri: 08:00 - 22:00
                                </p>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                    Sat - Sun: 10:00 - 23:00
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='md:pb-32 pb-14' >
                    <SectionTitle heading={'---Send Us a Message---'} subHeading={"CONTACT FORM"}></SectionTitle>
                </div>
                {/* contact form */}
                <div className="bg-[#F3F3F3] p-8 md:p-20 max-w-6xl mx-auto my-12">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-2">
                                <label className="text-gray-700 font-semibold text-sm md:text-base">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded-md outline-none focus:border-[#D1A054] text-sm text-gray-700 transition"
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label className="text-gray-700 font-semibold text-sm md:text-base">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded-md outline-none focus:border-[#D1A054] text-sm text-gray-700 transition"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-700 font-semibold text-sm md:text-base">
                                Phone*
                            </label>
                            <input
                                type="tel"
                                required
                                placeholder="Enter your phone number"
                                className="w-full bg-white border border-gray-200 px-4 py-3 rounded-md outline-none focus:border-[#D1A054] text-sm text-gray-700 transition"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-700 font-semibold text-sm md:text-base">
                                Message*
                            </label>
                            <textarea
                                rows="7"
                                required
                                placeholder="Write your message here"
                                className="w-full bg-white border border-gray-200 p-4 rounded-md outline-none focus:border-[#D1A054] text-sm text-gray-700 transition resize-none"
                            ></textarea>
                        </div>

                        {/* reCAPTCHA Placeholder / UI */}
                        <div className="pt-2">
                            <div className="w-fit bg-[#F9F9F9] border border-gray-300 rounded p-3 flex items-center gap-6 shadow-sm">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-6 h-6 rounded border-gray-300 accent-blue-600 cursor-pointer"
                                    />
                                    <span className="text-sm font-medium text-gray-700">
                                        I'm not a robot
                                    </span>
                                </label>
                                <div className="flex flex-col items-center">
                                    <img
                                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                                        alt="reCAPTCHA"
                                        className="w-8 h-8 object-contain"
                                    />
                                    <span className="text-[10px] text-gray-400 font-semibold leading-tight">reCAPTCHA</span>
                                    <div className="flex gap-1 text-[9px] text-gray-400 leading-tight">
                                        <span>Privacy</span>
                                        <span>•</span>
                                        <span>Terms</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-6">
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-[#835D23] hover:bg-[#6c4c1c] text-white font-semibold px-8 py-3 rounded transition-all duration-200"
                            >
                                Send Message
                                <FaPaperPlane className="text-sm" />
                            </button>
                        </div>

                    </form>
                </div>

            </div>


        </div>
    );
};

export default Contact;