import React from 'react'
import styles from "../styles/navigationBar/navigationBar.module.scss"
import img_Profile from "../../public/images/navigationBar/myImg.png"
import Image from 'next/image'
interface NavigationListType {
  icon: any;
  label: string;
}

function NavigationList ({icon, label}: NavigationListType) {
  return (
    <div>
      <figure>
          <Image 
            src={icon} 
            alt="이미지"/>
          <figcaption>
            <p>{label}</p>
          </figcaption>
        </figure>
    </div>
  )
}

function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <NavigationList icon={img_Profile} label="NICKNA" />
    </div>
  )
}

export default NavigationBar