import React, { Component } from "react";
import { Bar } from "./popoverUI";
import Popover from "react-text-selection-popover";

export default class Highlight extends Component {
    constructor(props) {
        super(props);
        this.refParagraph = React.createRef();
        this.saveSelection = this.saveSelection.bind(this);
      }


   
      saveSelection = () => {
        var range, sel;
        if (window.getSelection) {
            // Non-IE case
            sel = window.getSelection();
            if (sel.getRangeAt) {
                range = sel.getRangeAt(0);
            }
            document.designMode = "on";
            if (range) {
                sel.removeAllRanges();
                sel.addRange(range);
            }
            document.execCommand("underline", false, null);
            document.designMode = "off";
        } else if (document.selection && document.selection.createRange &&
                document.selection.type != "None") {
            // IE case
            range = document.selection.createRange();
            range.execCommand("underline", false, null);

        }
      }
      render() {
        return (
        <div>

        <p className="highlight numbered-p" ref={this.refParagraph} >
                   {this.props.displayP()}
        </p>
        <Popover selectionRef={this.refParagraph} >
        <Bar bg="yellow">
          <div onClick ={ this.saveSelection} >
          <p>
          Highlight
          </p>
          </div>
        </Bar>
        </Popover>

        </div>
        )
      }
    
}
