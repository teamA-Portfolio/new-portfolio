import Image from "next/image";
import styles from "@/app/styles/main/profile.module.scss";
import { BorderBox } from "../common/Box";

export default function Profile() {
  return (
    <section className={styles.profile}>
      <div>
        <div>
          <Image
            src={"/images/navigationBar/profile.png"}
            fill
            alt="profile_Photo"
          />
        </div>
        <BorderBox boxStyle="square">연락처</BorderBox>
      </div>
      <BorderBox boxStyle="square">자기소개</BorderBox>
    </section>
  );
}
