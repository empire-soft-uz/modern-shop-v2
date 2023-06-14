import React from 'react'
import styles from "../../styles/cat.module.css"

interface DropDown {
    setCatSelect: Function
    catSelect: boolean
}

const CatSelect = ({catSelect, setCatSelect}: DropDown) => {
  return (
    <div className={catSelect  ? styles.dropDown : styles.dn}>
        <div className={styles.category}>
            <div className="catEch">
              <div className="select"></div>
            </div>
            <div className="catEch">
              <div className="select"></div>
            </div>
            <div className="catEch">
              <div className="select"></div>
            </div>
            <div className="catEch">
              <div className="select"></div>
            </div>
        </div>
    </div>
  )
}

export default CatSelect