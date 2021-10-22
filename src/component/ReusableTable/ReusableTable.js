import React, {Component} from 'react'

export class ReusableTable extends Component {
    state = {
        selectedRow:null,
        selectedColumn:null,
        tableBody: this.props.tableRow,
        tableRowDummy:this.props.tableRow
    }
    editThis = (row, cell) => {
        console.log(row, cell)
        this.setState({
            selectedRow: row,
            selectedColumn: cell
        })
    } 

    changeRow = (e, rowI, cellI) => {
        let list =[[]]
        this.state.tableBody.map((row,rowId) =>
            {
                if(rowId == rowI) {
                    row.map((cell,cellId) => {
                        if(cellId == cellI) {
                            list[rowId][cellId] = e.value
                        }else{ 
                            list[rowId][cellId] = cell
                        }
                    })
                    
                }else {
                    list.push(row)
                }
            }
        )
            this.setState({
            tableBody:list 
        })
    }

    saveData = () => {
        this.setState({selectedRow:null,selectedColumn:null})
    }


    render() {
        return (
            <table>
                <thead>
                    <tr> {
                        this.props.tableHead.map(head => <th>
                            <div> {head} </div>
                        </th>)
                    } </tr>
                </thead>
                <tbody> {
                    this.state.tableBody.map((rows,rowId) => {
                        return <tr> {
                            rows.map((cell,cellId) => {
                                return (
                                    this.state.selectedRow === rowId && this.state.selectedColumn === cellId ? <>
                                    <input datatype='text'  value={cell} onChange={e => this.changeRow(e.target,rowId,cellId)} /> <button onClick={this.saveData}>Save</button> 
                                    </>: <td onDoubleClick={() => this.editThis(rowId,cellId)}>{cell} </td>
                                )
                        })
                        } </tr>
                })
                }
                </tbody>
            </table>
        )
    }
}
