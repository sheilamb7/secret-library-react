import React, {Component} from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default class PromptModal extends Component {
    constructor(props){
       super(props);

       this.state = {
        isOpen: this.props.modalIsOpen
       }

       this.customStyles = {
        content: {
            top: "50%",
            left: "50%"
        },
        overlay: {
            backgroundColor: `rgba(${color6}, 0.75)`
        }
       }
    }
   render(){
       return (
          <ReactModal
          style= {this.customStyles}
          onRequestClose={() => {this.props.handleModalClose()}}
          isOpen={this.props.modalIsOpen}>
            <div>Aquí va el form: nsert book for x prompt</div>
          </ReactModal>
       );
   }
}