import React from "react";
import NavBar from "./navbar/NavBar";

export default function Home() {
    return (
        <div style={styles.main}>
            <NavBar/>
            <div style={styles.top}>1</div>
            <div style={styles.middleTop}>2</div>
            <div style={styles.middleBottom}>3</div>
            <div style={styles.bottom}>4</div>
        </div>
    );
}
const styles = {
    main: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        
    },
    header: {
        fontFamily: 'Times New Roman',
        fontSize: 50
    },
    top: {
        flex: '60%',
        backgroundColor: 'blue'
    },
    middleTop: {
        flex: '12%',
        backgroundColor: 'red'
    },
    middleBottom: {
        flex: '12%',
        backgroundColor: 'green'
    },
    bottom: {
        flex: '12%',
        backgroundColor: 'yellow'
    }
}