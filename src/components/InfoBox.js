import React from 'react'
import {Card, CardContent, Typography, Badge} from '@mui/material'
import '../App.css';


const InfoBox = ({title, cases, total, img}) => {
    
const getStyle = {
    backgroundColor: "crimson",
}
    return (
        <div className="info-box">
            <Card className="info-box" >
                    <img className="img" src={img}/>
                <CardContent>
                    <Badge color="warning" badgeContent="Today "></Badge>
                    <Typography color="textPrimary">{title}</Typography>
                    <h2>{cases}</h2>
                    <Typography color="textWarning"> <span className="total">Total of: </span> <span className="totalNumber">{total}</span></Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
