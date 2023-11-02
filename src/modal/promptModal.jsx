import React, {Component} from "react";
import ReactModal from "react-modal";
import axios from "axios";

ReactModal.setAppElement("#root");

export default class PromptModal extends Component {
    constructor(props){
       super(props);

       const {
        prompts_id,
        prompts_challenge_id,
        prompts_content,
        prompts_completed,
        prompts_completed_book
    } = this.props.promptItem

    this.state = {
        prompts_id: prompts_id,
        prompts_challenge_id: prompts_challenge_id,
        prompts_content: prompts_content,
        prompts_completed: prompts_completed,
        prompts_completed_book: prompts_completed_book,
        book: ''
    }

       this.customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
        overlay: {
            backgroundColor: 'rgba(18, 24, 38, 0.45)'
        }
       }
       
       this.addBook = this.addBook.bind(this);
    }


    handleInputChange(event) {
        this.setState({
            prompts_completed_book: event.target.value
        })

    }
    addBook(event){
        event.preventDefault();

        axios({
            method: "put", 
            url: `https://secret-library-api.onrender.com/prompts/${this.state.prompts_id}`,
            data: {
                "prompts_id": this.state.prompts_id,
                "prompts_challenge_id": this.state.prompts_challenge_id,
                "prompts_content": this.state.prompts_content,
                "prompts_completed": this.state.prompts_completed ,
                "prompts_completed_book": this.state.prompts_completed_book}
                })
        .then (response => {
            //console.log(response)
            this.setState({
                prompts_completed_book: prompts_completed_book
            })
        }) 
        .catch(error => {
            console.log("Error on updating this prompt", error)
        })
    }

   render(){
       return (
          <ReactModal
          style= {this.customStyles}
          isOpen={this.props.modalIsOpen}
          onRequestClose={() => {this.props.handleModalClose()}}>
            <div>{this.state.prompt_content} : {this.state.completed_book}</div>
            <form className="form_add_book" onSubmit={this.addBook}>
                <input
                type="text"
                name="book"
                placeholder={this.state.completed_book}
                value={this.state.completed_book}
                onChange={this.handleInputChange}
                />

                <div>
                    <button className="btn_add_book">Save</button>
                </div>
            </form>
          </ReactModal>
       );
   }
}