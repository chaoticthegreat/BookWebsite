import Image from "next/image";
export default function book(props:any) {
    return (
        <div>
            <img src={props.args[0]}></img>
            <div>
                <h6>{props.args[1]}</h6>
                <p>{props.args[2]}</p>
            </div>
        </div>
    );
}