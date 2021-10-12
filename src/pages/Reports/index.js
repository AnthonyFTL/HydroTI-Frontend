import React, {useEffect} from "react";
import {useTable} from "react-table";
import PropTypes from "prop-types";
import {getReports, irrigationEntriesResetState} from "../../store/actions/irrigations";
import { connect } from "react-redux";
import IrrigationEntry from "../../model/irrigationEntry";

const Reports = ({ details, dispatch }) => {
    useEffect(() => {
        dispatch(getReports());
        return () => dispatch(irrigationEntriesResetState());
    }, []);

    if (!details) return null;
    console.log('armando pls');
    console.log(details);


// TODO: https://react-table.tanstack.com/docs/quick-start
    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Fecha de inicio de riego',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Fecha de fin de riego',
                accessor: 'col2',
            },
            {
                Header: 'Tiempo de riego',
                accessor: 'col3',
            },
        ],
        []
    )

    const tableInstance = useTable({columns, data})

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

    } = tableInstance

    return (
        <table {...getTableProps()} style={{border: 'solid 2px black'}}>
            <thead>
            {headerGroups.map(headerGroup => (
                // eslint-disable-next-line react/jsx-key
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        // eslint-disable-next-line react/jsx-key
                        <th
                            {...column.getHeaderProps()}
                            style={{
                                background: '#4CAF50',
                                color: 'white',
                                fontWeight: 'bold',
                                padding: '20px'
                            }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    // eslint-disable-next-line react/jsx-key
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <td
                                    {...cell.getCellProps()}
                                    style={{
                                        padding: '10px',
                                        border: 'solid 1px gray',
                                        background: 'white',
                                    }}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
};

Reports.propTypes = {
    details: PropTypes.instanceOf(IrrigationEntry),
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    details: state.irrigationEntries.details,
});

export default connect(mapStateToProps)(Reports);
