import React, {Component} from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default class PromptModal extends Component {
    constructor(props){
       super(props);

       this.state = {
        completed_book: this.props.completed_book,
        prompt_content: this.props.prompt_content
       }

       this.customStyles = {
        content: {
            top: "50%",
            left: "50%"
        },
        overlay: {
            backgroundColor: 'rgba(18, 24, 38, 0.45)'
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
            <div>{this.state.prompt_content} : {this.state.completed_book}</div>
          </ReactModal>
       );
   }
}