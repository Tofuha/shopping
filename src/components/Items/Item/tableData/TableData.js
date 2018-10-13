import React from 'react';
import './TableData.css';

const tableData = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th rowSpan='2'>Display</th>
          <th>Size</th>
          <td>{props.dsize}</td>
        </tr>
        <tr>
          <th>Resolution</th>
          <td>{props.dresolution}</td>
        </tr>
        <tr>
          <th rowSpan='2'>Camera</th>
          <th>Resolution</th>
          <td>{props.cresolution}</td>
        </tr>
        <tr>
          <th>Video</th>
          <td>{props.cvideo}</td>
        </tr>
        <tr>
          <th rowSpan='2'>Memory</th>
          <th>RAM</th>
          <td>{props.ram}</td>
        </tr>
        <tr>
          <th>Storage</th>
          <td>{props.storage}</td>
        </tr>
        <tr>
          <th colSpan='2'>Chipset</th>
          <td>{props.chip}</td>
        </tr>
        <tr>
          <th colSpan='2'>Battery</th>
          <td>{props.battery}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default tableData;
