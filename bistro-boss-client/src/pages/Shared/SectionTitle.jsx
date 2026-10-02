
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mt-10 md:mt-20 flex flex-col items-center text-center px-4">
            <h4 className="text-base md:text-xl text-[#D99904] italic mb-3 md:mb-5 border-b-2 border-gray-200 w-fit pb-1 md:pb-2">
             {heading}
            </h4>

            <h1 className="text-[28px] md:text-[40px] border-b-2 border-gray-200 w-fit  font-semibold uppercase leading-tight">
               {subHeading}
            </h1>
        </div>
    );
};

export default SectionTitle;