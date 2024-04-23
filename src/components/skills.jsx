"use client";

const skillList = [
    "python",
    "jupyter notebook",
    "pytorch",
    "tensorflow",
    "tensorflow js",
    "docker",
    "jax",
    "git",
    "javascript",
    "rust",
    "dart",
    "vscode",
    "ml ops",
    "w and b",
    "LLMs",
    "VLMs",
    "VLAMs",
    "tensorrt",
    "onnx",
    "hugging face",
    "fast API",
    "flask ",
    "pytorch lightning",
    "flutter",
    "flet",
    "c++",
]

const Skills = () => {
    return (
        <div className="flex gap-4 flex-wrap">
            {skillList.map(skill => (
                <div key={skill} className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">{skill}</div>
            ))}
        </div>
    )
}

export default Skills;