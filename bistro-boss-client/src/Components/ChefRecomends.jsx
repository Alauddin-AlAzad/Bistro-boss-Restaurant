import SectionTitle from "../pages/Shared/SectionTitle";
import ChefRecomendCard from "./ChefRecomendCard";

const ChefRecomends = () => {
    return (
        <section className="md:pb-32 pb-14">
            <SectionTitle
                heading={'---Should Try---'}
                subHeading={'CHEF RECOMMENDS'}

            ></SectionTitle>
            <div className="mt-8 md:mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 justify-items-center px-2 md:px-0">
                <ChefRecomendCard />
                <ChefRecomendCard />
                <ChefRecomendCard />
            </div>
        </section>
    );
};

export default ChefRecomends;