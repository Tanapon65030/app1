import React from 'react'
export function Header() {
    const aStyle = {
        display: 'inline-block',
        /* กำหนดให้สีตัวอักษรเป็นสีฟ้า */
        color:'blue',
        margin: '7px',
        /* กำหนดให้ลิงก์ไม่ต้องมีเส้นข้างใต้*/
        TextDecoration:'none'
    }
    return (
        <div style={{backgroundColor: '#ccc'}}>
        <a href="www" style={aStyle}>Home</a> |&nbsp;
        <a href="www" style={aStyle}>React</a> |&nbsp;
        <a href="www" style={aStyle}>React Native</a>
        </div>
    )
}

export function Content() {
    return(
        <div style={{textAlign:'center'}}>
            <h2>Hello<br/>React & React Native</h2>
            <br/><br/><br/>
        </div>
    )
}

export const Footer = () => {
    return (
        <div style={{textAlign:'center'}}>
            &copy; {new Date().getFullYear()} All rights reserved
        </div>
    )
}
    