import React, {Component} from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default class PromptModalSimple extends Component {
    constructor(props){
       super(props);


       this.state = {
        book: this.props.completed_book,
        prompt_content: this.props.prompt_content
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
       
    //    this.addBook = this.addBook.bind(this);
    //    this.handleInputChange = this.handleInputChange.bind(this);
    }


    // handleInputChange(event) {
    //     this.setState({
    //         prompts_completed_book: event.target.value
    //     })

    // }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            book: event.target.value
        })
        this.props.inputBook(this.state.book)
    }
    

   render(){
       return (
          <ReactModal
          style= {this.customStyles}
          isOpen={this.props.modalIsOpen}
          onRequestClose={() => {this.props.handleModalClose()}}>
            <div>{this.state.prompt_content} : {this.state.book}</div>
            {/* <form className="form_add_book" onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="book"
                placeholder={this.state.book}
                value={this.state.book}
                onChange={this.handleInputChange}
                />

                <div>
                    <button className="btn_add_book">Save</button>
                </div>
            </form> */}
          </ReactModal>
       );
   }
}