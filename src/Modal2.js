import React from 'react';
import PropTypes from 'prop-types';
import data from './data.json';

class Modal2 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value: '',
        value1: '',
        value2: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleChange1(event) {
      this.setState({value1: event.target.value});
    }

    handleChange2(event) {
      this.setState({value2: event.target.value});
    }

    handleSubmit(event) {
      alert('Данные, введенные на форме \n' + 'Наименование: ' + this.state.value + '\n'
       + 'Описание: ' + this.state.value1 + '\n' + 'Дата документа: ' + this.state.value2);
      // event.preventDefault();
      this.setState({value: '', value1: '', value2: ''});
    }

  render() {
    const { text2} = this.props;
    if(!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Наименование 
              <input type="text" defaultValue={data.document[text2-1].displayName} value={this.props.value} onChange={this.handleChange}></input>
              <br></br>
              Описание 
              <input type="text" defaultValue={data.document[text2-1].description} value={this.props.value1} onChange={this.handleChange1}></input>
              <br></br>
              Дата документа
              <input type="text" defaultValue={this.state.default || data.document[text2-1].docDate} value={this.props.value2} onChange={this.handleChange2}></input>
             </label>
             <br></br>
              <input type="submit" value="Редактировать" />
          </form>

          <div className="footer">
          
            <button onClick={this.props.onClose}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal2.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal2;