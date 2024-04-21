import React from 'react'

const Company = () => {
    return (
        <div>company-page</div>
    )
}

export default Company

export function getServerData() {
    console.log("Server side rendering of company page");
    return {
        props: {},
    }
}