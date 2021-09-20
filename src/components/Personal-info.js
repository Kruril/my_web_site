import Icon from "@mdi/react";

export default function PersonalInfo(props) {
    return (
        <div className={"flex items-center"}>
            <Icon path={props.icon} size={1} rotate={props.rotate? props.rotate : 0} className={"mr-2"}/>
            <div>
                {props.text}
            </div>
        </div>
    )
}