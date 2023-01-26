import React from "react"
import {Card, FloatingLabel, Form, FormControl, Table} from "react-bootstrap";
import {Button, Input, TextField, Typography} from "@mui/material";
import {styles} from "../../Styles";
const formFields = [
    {label : "Nom", placeholder : "Nom"},
    {label : "Prénom", placeholder : "Prénom" },
]
const Login = (props) => {
    return(
        <div
            style={styles.cContainer}>
            <Card
                style={styles.cardContainer}>
                <Card.Header style = {styles.cardHeader}><span className={"f-text"}>Veillez vous connecter</span></Card.Header>
                <Card.Body>
                    {formFields.map((it)=>
                        <FloatingLabel className={"mb-3"} label={it.label}>
                            <Form.Control placeholder={it.placeholder}/>
                        </FloatingLabel>)}
                </Card.Body>
                <Button sx = {styles.buttonPrimary} variant={"contained"}><span className={"f-text"}>Se connecter</span></Button>
                <Typography sx = {styles.cardText}  >Vous n'avaez pas de compte?</Typography>
                <Button sx = {styles.buttonSecondary}  variant={"outlined"}
                        onClick={()=> props.setLogin(false)}
                >Inscrivez-vous</Button>
            </Card>
        </div>
    )
}
export default Login
