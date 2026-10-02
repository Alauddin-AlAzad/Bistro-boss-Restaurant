import chefServiceImg from '../assets/home/chef-service.jpg';

const BistroBossBanner = () => {
    return (
        <div
            className="my-16 max-w-350 mx-auto px-4 sm:px-8 py-14 sm:py-20 md:py-28.5 bg-cover bg-fixed bg-center rounded-sm"
            style={{ backgroundImage: `url(${chefServiceImg})` }}
        >
        
            <div className="bg-white text-neutral-800 text-center max-w-4xl mx-auto px-6 py-10 md:px-24 md:py-16 shadow-sm">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase tracking-widest mb-3">
                    Bistro Boss
                </h2>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-700">
                    Welcome to Bistro Boss, where culinary passion meets exquisite flavors. We take pride
                    in crafting unforgettable dining experiences with freshly sourced ingredients, rich recipes,
                    and warm hospitality tailored for food lovers.
                </p>
            </div>
        </div>
    );
};

export default BistroBossBanner;