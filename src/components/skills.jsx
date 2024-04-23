"use client";
import { FaPython } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaRust } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiWeightsandbiases } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { SiOnnx } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { PiLightning } from "react-icons/pi";
import { RiFlutterFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { ImStarEmpty } from "react-icons/im";


const skillList = [
    { name: "python", icon: FaPython },
    { name: "jupyter notebook", icon: SiJupyter },
    { name: "pytorch", icon: SiPytorch },
    { name: "tensorflow", icon: SiTensorflow },
    { name: "tensorflow js", icon: SiTensorflow },
    { name: "docker", icon: FaDocker },
    { name: "jax", icon: ImStarEmpty },
    { name: "git", icon: FaGitAlt },
    { name: "javascript", icon: IoLogoJavascript },
    { name: "rust", icon: FaRust },
    { name: "dart", icon: SiDart },
    { name: "vscode", icon: TbBrandVscode },
    { name: "ml ops", icon: ImStarEmpty },
    { name: "w and b", icon: SiWeightsandbiases },
    { name: "LLMs", icon: RiOpenaiFill },
    { name: "VLMs", icon: ImStarEmpty },
    { name: "VLAMs", icon: ImStarEmpty },
    { name: "tensorrt", icon: ImStarEmpty },
    { name: "onnx", icon: SiOnnx },
    { name: "hugging face", icon: ImStarEmpty },
    { name: "fast API", icon: SiFastapi },
    { name: "flask ", icon: SiFlask },
    { name: "pytorch lightning", icon: PiLightning },
    { name: "flutter", icon: RiFlutterFill },
    { name: "flet", icon: ImStarEmpty },
    { name: "c++", icon: SiCplusplus },
]

const Skills = () => {
    return (
        <div className="flex gap-4 flex-wrap">
            {skillList.map(skill => (
                <div key={skill.name} className="rounded p-2 flex text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    <div className="items-center justify-center pr-1 pt-1"><skill.icon /></div>
                    <div>{skill.name}</div>
                </div>
            ))}
        </div>
    )
}

export default Skills;