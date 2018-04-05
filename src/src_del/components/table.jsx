// import React, {Component} from 'react'
var dateFormat = require('dateformat');

// class Table extends Component {
// 	render() {
		
// 	}
// }

export default function Table(props) {
	return (
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>docDate</th>
					<th>displayName</th>
				</tr>
			</thead>
			<tbody>
				{
					props.data.document.map(row => (
						<tr>
							<td>{row.rank}</td>
							<td>{dateFormat(row.docDate, "dd.mm.yyyy")}</td>
							<td><a href='#' onClick={handleClick} >{row.displayName}</a></td>
						</tr>
					))
				}

			</tbody>
		</table>
	)
}

function handleClick() {
	console.log('---', 'clicked')
}

handleClick = (e, data) => {
    // access to e.target here
    console.log(data);
}