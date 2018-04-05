import React, {Component} from 'react';
// import {render} from 'react-dom';
// import Table from './components/table.jsx'
import data from './data.json'
import ReactDOM from 'react-dom';

console.log(data.document);
var dateFormat = require('dateformat');

class Table extends Component {
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
            this.props.data.document.map(row=> (
              <tr key={row.id}>
                <td>{dateFormat(row.docDate, "dd.mm.yyyy")}</td>
                <td><a id={row.id} href='' onClick={handleClick}>{row.displayName}</a></td>
              </tr>
            ))
          }

        </tbody>
      </table>

      <table>
       <thead>
          <tr>
            <th>Наименование документа</th>
            <th>Описание документа</th>
            <th>Дата документа</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tableForm">
            <td id="form1"></td>
            <td id="form2"></td>
            <td id="form3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
 }
}


function handleClick(event) {
  event.preventDefault()
  var el = event.target

  var name = data.document[el.id-1].displayName;
  var description = data.document[el.id-1].description;
  var date = dateFormat(data.document[el.id-1].docDate, "dd.mm.yyyy");

  ReactDOM.render(<p>{name}</p>, document.getElementById('form1'));
  ReactDOM.render(<p>{description}</p>, document.getElementById('form2'));
  ReactDOM.render(<p>{date}</p>, document.getElementById('form3'))

  console.log(name, description, date);
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
