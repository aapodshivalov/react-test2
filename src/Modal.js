import React from 'react';
import PropTypes from 'prop-types';
import data from './data.json';
var dateFormat = require('dateformat');
class Modal extends React.Component {
  
  render() {
    const { text} = this.props;

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
    console.log(text);
    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.onClick}
            <p>description: {data.document[text-1].description}</p>
             <p>direction: {data.document[text-1].direction}</p>
             <p>displayName: {data.document[text-1].displayName}</p>
             <p>docDate: {dateFormat(data.document[text-1].docDate, "dd.mm.yyyy")}</p>
             <p>id: {data.document[text-1].id}</p>

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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;