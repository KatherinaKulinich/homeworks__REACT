import React from "react";
import '../404/404.css'

function ErrorPage() {
    return (  
        <div className="wrapper">
            <div className="error-page">
                <h1 className="error__title">
                    404
                </h1>
                <h2 className="error__text">
                    Page Not Found
                </h2>
            </div>
        </div>
    );
}

export default ErrorPage;