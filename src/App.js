import React, {Component} from 'react';
import {render} from 'react-dom';
import data from './data.json'
import ReactDOM from 'react-dom';
import Modal from './Modal';
import Modal2 from './Modal2';

console.log(data.document);
var dateFormat = require('dateformat');

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
     isOpen: false,
     text: '1111',
     isOpen2: false,
     text2: '2222'
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange(e) {
    const { text, value } = e.target;
    this.state({ [text]: value });
  }
  handleChange2(e) {
    const { text2, value } = e.target;
    this.state({ [text2]: value });
  }
  toggleModal = (event) => {
    event.preventDefault();
    var el = event.target;
    if(this.state.isOpen) {
      this.setState({
        isOpen: !this.state.isOpen,
        text: " "
    });
    }
    else {
      this.setState({
        isOpen: !this.state.isOpen,
        text: data.document[el.id-1].id
    });
    }
  }

  toggleModal2 = (event) => {
    event.preventDefault();
    var el = event.target;
    if(this.state.isOpen2) {
      this.setState({
        isOpen2: !this.state.isOpen2,
        text2: " "
    });
    }
    else {
      this.setState({
        isOpen2: !this.state.isOpen2,
        text2: data.document[el.id-1].id
    });
    }
  }

 render() {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Дата документа</th>
            <th>Наименование документа</th>

          </tr>
        </thead>
        <tbody>
          {
            this.props.data.document.map((row, index)=> (
              <tr key={row.id}>
                <td>{dateFormat(row.docDate, "dd.mm.yyyy")}</td>
                <td>
                  <a id={row.id} href='#' onClick={this.toggleModal}>{row.displayName}</a>
                </td>
                <th><button id={row.id} onClick = {this.toggleModal2}>Редактировать</button></th>
              </tr>
            ))
          }

        </tbody>
      </table>

      <Modal text = {this.state.text}
          show={this.state.isOpen}
          onClose={this.toggleModal}
          > 

      </Modal>
      <Modal2 text2 = {this.state.text2}
              show={this.state.isOpen2}
              onClose={this.toggleModal2}> 

      </Modal2>
    </div>
  )
 }
}

export default function App() {
  return (
    <div
      className="page-container"
    >
      <Table data={data}/>
      </div>
    )
}
