import { ScrollTopProps } from "../page"
import styles from "@/app/styles/component/appStyler.module.scss"
import { BorderBox } from "./common/Box"
import { useState } from "react"


export default function AppStyler({ scrollTop }: ScrollTopProps) {
    const fontSize = ["S", "M", "L"]
    const [currentFontSizeIndex, setCurrentFontSizeIndex] = useState<number>(0)

    const appFontChange = (idx: number) => {        
        const currentFontSize = fontSize[idx];

        fontSize.map((font)=>{
            document.querySelector('body')?.classList.remove(font)
        })
        document.querySelector('body')?.classList.add(currentFontSize)

        setCurrentFontSizeIndex(idx)
    }
    

    return (
        <div className={`${styles.appStyler} ${scrollTop && styles.scrollTop}`}>
            <BorderBox boxStyle="square">
                <strong>
                    Font-Size
                </strong>
                <div>
                    {["S", "M", "L"].map((font,idx) => {
                        return (
                            <button key={`fontStyle_${font}`}
                                className={idx === currentFontSizeIndex ? styles.active : ""}
                                onClick={() => {
                                    appFontChange(idx);
                                }}>
                                {font}
                            </button>
                        );
                    })}
                </div>
            </BorderBox>
        </div>
    );
}
