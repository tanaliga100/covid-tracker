import { Badge} from '@mui/material'
import React from 'react'

const TableData = ({countries}) => {
    return (
        
        <div className="table">
        {countries && countries.map(country => (
            <tr>
                <td>{country.country}</td>
                <td><strong>{country.cases}</strong></td>
            </tr>
        ))}
        </div>

    )
}

export default TableData



