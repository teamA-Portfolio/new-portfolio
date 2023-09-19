import { BorderBox } from "../common/Box";
import styles from "@/app/styles/component/main/skills.module.scss"
import { SectionLayout } from "../common/layout";

export default function Skills() {
  return (
    <section  className={styles.skills}>
      <SectionLayout label="skills">
      <div className={styles.skillList}>
        <BorderBox boxStyle="circle"><strong>html</strong></BorderBox>
        <BorderBox boxStyle="circle"><strong>css</strong></BorderBox>
        <BorderBox boxStyle="circle"><strong>react</strong></BorderBox>
      </div>
      </SectionLayout>
    </section>
  );
}
