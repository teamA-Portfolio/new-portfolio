import styles from "@/app/styles/component/common/layout.module.scss"
import { BorderBox } from "./Box"

interface SectionLayoutProps {
    label:string;
    children:React.ReactNode|string
}

export const SectionLayout = ({label,children}:SectionLayoutProps) => {
    return <div className={styles.SectionLayout}>
        <h4>{label}</h4>
        <BorderBox boxStyle="square">
            {children}
        </BorderBox>
    </div>
}