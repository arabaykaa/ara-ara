import { Center } from "@mantine/core"
import styles from "../components.module.scss"
import React from "react"

function FooterComponent() {
    return (
        <Center>
            <div className={styles.footer}>
                <div className={styles.row}>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>
                <div className={styles.row}>
                    INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
                </div>
            </div >
        </Center >
    )
}

export default FooterComponent