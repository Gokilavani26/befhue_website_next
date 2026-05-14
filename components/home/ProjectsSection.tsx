"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData as projects, type Project } from "@/data/projectVideoData";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({
    project,
}: ProjectCardProps) => {
    return (
        <div
            className={`relative flex-shrink-0 w-72 ${project.height} mx-3 rounded-2xl overflow-hidden bg-zinc-900 group transition-transform duration-500 hover:scale-105 cursor-pointer`}
        >
            {project.type === "video" ? (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-all duration-700"
                >
                    <source
                        src={project.url}
                        type="video/mp4"
                    />
                </video>
            ) : (
                <div className="relative w-full h-full">
                    <Image
                        src={project.url}
                        alt="Project"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        sizes="288px"
                    />
                </div>
            )}

            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        </div>
    );
};

const ProjectsSection = () => {
    // Duplicate projects for infinite loop
    const duplicatedProjects = [
        ...projects,
        ...projects,
    ];

    const reversedProjects = [
        ...duplicatedProjects,
    ].reverse();

    const router = useRouter();
    return (
        <div
            id="projects"
            className="bg-black text-white min-h-screen py-20 font-sans overflow-hidden"
        >
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-16 px-6">
                <h5 className="text-5xl md:text-6xl font-denton mb-6 italic tracking-tight">
                    Our Projects
                </h5>

                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    From branding to motion,
                    advertising to UI/UX, our projects
                    turn bold ideas into impactful
                    experiences.
                </p>
            </div>

            {/* First Carousel */}
            <div className="relative flex items-center">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedProjects.map(
                        (project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                            />
                        )
                    )}
                </motion.div>
            </div>

            {/* Second Carousel */}
            <div className="relative flex items-center mt-6">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: ["-50%", "0%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                >
                    {reversedProjects.map(
                        (project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                            />
                        )
                    )}
                </motion.div>
            </div>

            {/* Button */}

            <div className="mt-20 flex justify-center px-6">
                <motion.button
                    onClick={() => router.push("/portfolio")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#ff002b] text-white px-10 py-4 rounded-full font-denton text-lg md:text-xl font-bold italic tracking-wider shadow-[0_0_20px_rgba(255,0,43,0.3)] hover:shadow-[0_0_30px_rgba(255,0,43,0.5)] transition-all duration-300"
                >
                    VIEW OUR PORTFOLIO
                </motion.button>
            </div>
        </div>
    );
};

export default ProjectsSection; 