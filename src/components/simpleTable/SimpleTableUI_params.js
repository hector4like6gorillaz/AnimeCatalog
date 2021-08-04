import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

/*
Recuerda que para utilizarlo debes ingresar en params 
const datos_Table_example = [
  "Pedro Zapata 34 Abogado 6000.00 M Humano",
  "Juan Perez 21 Contador 10000.00 M Humano",
  "Marcos Corrales 26 Ingeniero 15000.00 M Humano",
  "Maria Dimas 18 Estudiante 4000.00 F Humano",
  "Pablo Valencia 29 Profesor 15000.00 M Humano",
  "Carlos Oro 32 Deportista 78000.00 M Humano",
  "Julian Casas 27 Zapatero 5000.00 M Humano",
];

<SimpleTableUI_params
          columnNames={["Nombre", "Apellido", "Edad", "Profesion", "Salario $", "Sexo", "Raza"]}
          rowDates={datos_Table_example} //que deben coincidir con las columnas separado con espacios
          height={400}
          space={"_"}
        />
*/

export const SimpleTableUI_params = (props) => {
    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: props.height,
        },
    });

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [rows, setrows] = useState([]);
    const [columns, setColumns] = useState([]);

    const handleChangePage = (event, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        columnas(props.columnNames);
        GetRows(props.rowDates);
    }, []);

    function GetRows(dates) {
        function createData(s) {
            var x = {};
            for (var i = 0; i < s.length; i++)
                Object.defineProperty(x, `dato${i}`, { value: `${s[i]}`, writable: true, enumerable: true, configurable: true });
            return x;
        }
        const rows = list_rows => list_rows.map(item => setrows(prev => [...prev, (createData(item.split(" ")))]))
        rows(dates);
    }
    function columnas(a) {
        var obj = [];
        for (let i = 0; i < a.length; i++) {
            obj.push({
                id: `dato${i}`,
                label: `${a[i]}`,
                minWidth: 170,
                align: `center`,
            });
        }
        setColumns(obj);
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell
                                    key={`${column.id}${index}`}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={`${column.id}`} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value.replaceAll(props.space, " ")}

                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
