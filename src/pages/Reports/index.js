import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {getReports, irrigationEntriesResetState} from "../../store/actions/irrigations";
import {connect} from "react-redux";
import IrrigationEntry from "../../model/irrigationEntry";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';

const Reports = ({details, dispatch}) => {

    // var data = generateSampleData();
    // const columns = generateSampleColumns();

    // const tableInstance = useTable({details, columns});

    console.log(details);

    useEffect(() => {
        console.log('use effect') //4
        dispatch(getReports());

        return () => dispatch(irrigationEntriesResetState());
    }, []);


    if (!details) return null;

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Fecha de inicio de riego</th>
                <th>Fecha de fin de riego</th>
                <th>Tiempo de riego (segundos)</th>
            </tr>
            </thead>
            <tbody>
            {
                details.map((object, i) => {
                    console.log(i);
                    return (
                        <tr key={i}>
                            <td align={"center"}>{object.startDate}</td>
                            <td align={"center"}>{object.endDate}</td>
                            <td align={"center"}>{object.irrigationDuration}</td>
                        </tr>)
                })
            }
            {/*{details.map(d => (*/}
            {/*    <tr key={d[0]}>*/}
            {/*        <td>{d[0]}</td>*/}
            {/*        <td>{d[1]}</td>*/}
            {/*        <td>{d[2]}</td>*/}
            {/*        <td>{d[3]}</td>*/}
            {/*    </tr>*/}
            {/*)}*/}
            </tbody>
        </Table>
    )
};

Reports.propTypes = {
    details: PropTypes.instanceOf(IrrigationEntry),
    dispatch: PropTypes.func.isRequired,
};

// function generateSampleData(){
//     return React.useMemo(
//         () => [
//             {
//                 col1: 'Hello',
//                 col2: 'World',
//             },
//             {
//                 col1: 'react-table',
//                 col2: 'rocks',
//             },
//             {
//                 col1: 'whatever',
//                 col2: 'you want',
//             },
//         ],
//         []
//     )
// }
//
// function generateSampleData2(){
//     return React.useMemo(
//         () => [
//             {
//                 col1: 'Hello',
//                 col2: 'World',
//             },
//         ],
//         []
//     )
// }

// function generateSampleColumns() {
//     return React.useMemo(
//         () => [
//             {
//                 Header: 'Fecha de inicio de riego',
//                 accessor: 'col1', // accessor is the "key" in the data
//             },
//             {
//                 Header: 'Fecha de fin de riego',
//                 accessor: 'col2',
//             },
//             {
//                 Header: 'Tiempo de riego (segundos)',
//                 accessor: 'col3',
//             },
//         ],
//         []
//     );
// }

const mapStateToProps = (state) => ({
    details: state.irrigationEntries.details,
});

export default connect(mapStateToProps)(Reports);
