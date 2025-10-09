import React, { Component } from "react";

class ErrorBoundaries extends Component{


    constructor(props){

        super(props)
        this.state={hasError:false}

    }


    static getDerivedStateFromError(error){

        return {hasError:true}
    }


    componentDidCatch(error,errorInfo){

        console.log("Error from component:",error)
        console.log("Error Information in Component:",errorInfo)

    }


    render(){

        if(this.state.hasError){

            return(

                <div>
                    <h1>404 Error accure</h1>
                    <h1> errorfrom server </h1>
                </div>
            )
        }

        return this.props.children

    }
}


export default ErrorBoundaries;