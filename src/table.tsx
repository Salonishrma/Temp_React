import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  Symptoms: string,
  Incubation: string,
  Cost: string,
) {
  return { name, Symptoms, Incubation, Cost };
}

const rows = [
  createData('Influenza (Flu)', 'Fever ,cough, muscle aches, fatigue','1-4 day','Varies based on severity often includes medication and bed rest'),
  createData('COVID-19',' Fever, cough, shortness of breath','2-14 days','Varies widely, may include hospitalization, medications, and other medical '),
  createData('Common Cold',' Runny nose, sneezing, sore throat, mild cough.','1-3 days','Usually low, includes over-the-counter medications'),
  createData('Chickenpox','Itchy rash, fever, fatigue.','10-21 days.','Varies, may include antiviral medications and supportive care'),
  createData('Type 2 Diabetes','Increased thirst, frequent urination, fatigue, blurred vision','Develops gradually, not applicable.',' Ongoing, includes medications, lifestyle changes, and regular medical check-ups.'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ background: 'rgb(64, 181, 173)', maxHeight: 300, overflowY: 'auto' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:'red'}}>Diseases, (Quick Details)</TableCell>
            <TableCell sx={{color:'red'}} align="center">Name</TableCell>
            <TableCell sx={{color:'red'}} align="center">Symptoms</TableCell>
            <TableCell sx={{color:'red'}} align="center">Incubation Period</TableCell>
            <TableCell sx={{color:'red'}} align="center">Cost to Recover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {index % 2 === 0 ? '●' : '★'}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.Symptoms}</TableCell>
              <TableCell align="center">{row.Incubation}</TableCell>
              <TableCell align="center">{row.Cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}