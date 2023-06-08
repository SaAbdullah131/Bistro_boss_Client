

const SectionTitle = ({heading,subHeading}) => {

    return (
            <div className=" mx-auto text-center w-4/12">
                <p className="text-yellow-600 mb-2">---{subHeading}---</p>
                <h3 className="text-4xl uppercase border-y-4 py-3 my-2">{heading}</h3>
            </div>
        )
}

export default SectionTitle;