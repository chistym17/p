/* eslint-disable react/prop-types */

const SkillCard = ({ name, image }) => {
    return (
        <div className="flex flex-col justify-center items-center">

            <div>

                <img src={image} alt={name} className="w-14 h-14  " />


            </div>
            <div className="py-2">
                <div className="font-bold text-xl mb-2 text-center">{name}</div>
            </div>
        </div>
    );
};

export default SkillCard;

