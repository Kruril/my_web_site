
export default function AboutSection(props) {
    return (
        <div className={"flex flex-col mx-auto pt-10 px-10 max-w-3xl"}>
            <span
                className={"text-3xl text-g_beige-dark font-bold border-b-4 border-g_beige-dark text-center min-h-12 h-auto w-full block"}>{props.label}</span>
            {props.content}
        </div>
    )
}