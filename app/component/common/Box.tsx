import styles from "@/app/styles/component/common/box.module.scss";

interface BorderBoxProps {
  children: any;
  boxStyle: "square" | "circle";
  onClick?: () => void;
}
export const BorderBox = ({ children, boxStyle, onClick }: BorderBoxProps) => {
  return (
    <div
      className={`${styles.BorderBox} ${styles[boxStyle]}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
