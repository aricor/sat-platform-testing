import React from "react";
import {Button } from "reactstrap"; 
import "./progressNum.css"

const ProgressNum = props => {
        const section = props.sections[props.currentSection];
        return (
            section.questions.map((question) => {
                const buttonColor = question.selectedChoice != '' ? 'btn-dark' : 'btn-secondary';
                return (
                    <div class="d-flex justify-content-center">
                        <div className="btn-toolbar">
                            <div className="mr-2">
                                <div className="mt-2">
                                    <div className="mb-2"> 
                                        <button class={`btn ${buttonColor}`}>
                                            {question.id}
                                        </button>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                );
            })
        )
}
export default ProgressNum; 