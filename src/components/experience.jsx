"use client";

const experienceList = [
    {
        title: 'Senior DeepLearning Engineer',
        description: "Recent Promotion",
        company: 'Agile Robots AG, Munich, Germany',
        date: 'Nov `23 - Present'
    },
    {
        title: 'DeepLearning Engineer',
        description: "I developed PyTorch-based object detection and anomaly detection tools, optimized GitLab CI/CD for HPC, and implemented a two-stage Deep Learning model for animal weight estimation.",
        company: 'Agile Robots AG, Munich, Germany',
        date: 'August`21 - Nov `23'
    },
    {
        title: 'Deep Learning Master Thesis',
        description: "I developed a robust object tracking model using SHAMANN and bounding boxes, achieving accurate tracking in crowded scenes, demonstrating expertise in object tracking and deep learning, with strong practical applications.",
        company: 'Bosch, CR/ACE, Hildesheim, Germany',
        date: 'Sept `20 - March `21'
    },
    {
        title: 'Deep Learning Intern',
        description: "Redesigned vision checkout with deep learning in Python using PyTorch, optimized inference speed with ONNX, trained mobilenetv2 classifier with food data, managed documentation in Confluence, and tracked progress in Jira.",
        company: 'Auvisus GmbH, Karlsruhe, Germany',
        date: 'March `20 - August `20'
    },
    {
        title: 'Executive Production Engineer',
        description: "I managed charger installation and introduced the Acid Circulation System. Optimized structures with CAD, led QCC projects, and enhanced assembly lines.",
        company: 'Amara Raja Group, Chittoor, India',
        date: 'July `15 - August `17'
    },
];

function isEven(n) {
    return n % 2 == 0;
}

const Experience = () => {
    return (
        <div className="pb-16">
            {experienceList.map((experience, index) => (
                <div key={experience.title} className="flex justify-center h-128 md:h-64 lg:h-256 xl:h-128">
                    {isEven(index) ? (experienceFiller(experience)) : (<div className="w-1/3" />)}
                    <div className="w-1/6 flex justify-center">
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                            </div>
                        </div>
                    </div>
                    {isEven(index) ? (<div className="w-1/3" />) : (experienceFiller(experience))}
                </div>
            ))}
        </div>
    );
};


function experienceFiller(experience) {
    return <div className="w-1/3 ">
        {/* JOB TITLE */}
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
            {experience.title}
        </div>
        {/* JOB DESCRIPTION */}
        <div className="p-3 text-sm italic h-fill">
            {experience.description}
        </div>
        {/* JOB DATES */}
        <div className="p-3 text-red-400 text-sm font-semibold">
            {experience.date}
        </div>
        {/* JOB COMPANY */}
        <div className="p-1 px-3 rounded bg-gray-200 text-sm font-semibold w-fit">
            {experience.company}
        </div>
    </div>;
}

export default Experience;