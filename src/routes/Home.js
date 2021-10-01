import React from "react";
import Projects from "../components/projects";

export default function Home() {
    return (
        <div className={"flex flex-col block mx-auto p-10 max-w-3xl"}>
            <Projects />
        </div>
    );

}
