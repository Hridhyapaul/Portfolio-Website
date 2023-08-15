
const SectionTitle = ({ title, subtitle }) => {
    return (
        <div>
            <h4 className="lg:text-lg text-base uppercase font-semibold text-designColor font-body tracking-wider">{subtitle}</h4>
            <h2 className="lg:text-4xl text-2xl font-bold text-lightText font-body mt-3">{title}</h2>
        </div>
    );
};

export default SectionTitle;