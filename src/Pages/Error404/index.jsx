import React from 'react';
import { MainRoute, LoginRoute } from '../../Routes';
import GlobalStyles from "@mui/material/GlobalStyles";
import { useStyles } from './useStyles';

export const Error404 = () => {

    const styles = useStyles();

    return (
        <>
            <GlobalStyles
                styles={{
                    body: { backgroundColor: "#0414a7" }
                }}
            />
            <div className={styles.page}>
                <main className={styles.container}>
                    <h1 className={styles.title}><span class={styles.bg}>Error - 404</span></h1>
                    <p>An error has occured, to continue: </p>
                    <p>* Return to our homepage.<br />
                        * Send us an e-mail about this error and try later.</p>
                    <nav className={styles.nav}>
                        <a href={MainRoute} className={styles.link}>index</a>&nbsp;|&nbsp;<a href={LoginRoute} className={styles.link}>login</a>
                    </nav>
                </main>
            </div >
        </>
    );
}