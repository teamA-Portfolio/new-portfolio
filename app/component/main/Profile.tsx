import styles from "@/app/styles/component/main/profile.module.scss";
import { BorderBox } from "../common/Box";

export default function Profile() {
  return (
    <section className={styles.profile}>
      <div>
        <div>
          <img src={"/images/navigationBar/profile.png"} alt="profile_Photo"/>
        </div>
        <BorderBox boxStyle="square">연락처</BorderBox>
      </div>
      <BorderBox boxStyle="square">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, mollitia nostrum! Eum quaerat ipsum, obcaecati facere delectus quis enim asperiores natus? Eius, blanditiis illum libero optio earum magnam nemo at fugit alias hic. Dolorum error, eius minus ipsa quam, distinctio beatae eos odio quis facere earum in fuga tenetur ad!
      </BorderBox>
    </section>
  );
}
