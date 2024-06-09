import Image from "next/image";
import { storeGenere } from "@/app/wishlist/store";
import styles from '@/app/Styles/book.module.css';
export default function book(props:any) {
    return (
        <div className={styles.book}>
            <img src={props.args[0]} className={styles.image}></img>
            <div>
                <h6>{props.args[1]}</h6>
                <p>{props.args[2]}</p>
                <button onClick={()=>storeGenere(props.args[3])}> Wishlist </button>
            </div>
        </div>
    );
}