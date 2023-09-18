import styles from "@/app/styles/common/box.module.scss";

interface BorderBoxProps {
  children: any;
  boxStyle: "square" | "circle";
}
export const BorderBox = ({ children, boxStyle }: BorderBoxProps) => {
  return (
    <div className={`${styles.BorderBox} ${styles[boxStyle]}`}>{children}</div>
  );
};
