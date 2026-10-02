import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="Cover Image"
                strength={-100}
                bgImageStyle={{
                    minHeight: '100%',
                    objectFit: 'cover'
                }}
            >

                <div className="h-full md:h-[600px] flex items-center justify-center px-4 md:px-20 py-10 md:py-0">


                    <div className="bg-black/60 text-white text-center py-6 px-4 md:py-16 md:px-24 w-full max-w-sm md:max-w-4xl">


                        <h1 className="mb-2 md:mb-4 text-2xl md:text-5xl font-serif font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase">
                            {title}
                        </h1>

                        <p className="text-xs md:text-base font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    </div>

                </div>
            </Parallax>
        </div>
    );
};

export default Cover;