import React from "react"
import {Card, FloatingLabel, Form, FormControl, InputGroup, Table} from "react-bootstrap";
import {Button, Input, List, ListItem, TextField, Typography} from "@mui/material";
import {styles} from "../../Styles";
const formFields = [
    {label : "Nom", placeholder : "Nom"},
    {label : "Prénom", placeholder : "Prénom" },
    {label : "Email", placeholder : "Email"},
    {label : "Sexe", placeholder : "Sexe"},
    {label : "Mot de passe", placeholder : "Mot de passe" },
    {label : "Confirmez", placeholder : "Répétez le mot de passe"},
]
const SignIn = (props) => {
    return (
        <div
            style={styles.cContainer}>
        <Card
            responsive
            style={styles.cardContainer}>
            <Card.Header style={styles.cardHeader}>Veillez renseigner les informations qui suivent</Card.Header>
            <Card.Body style={styles.cardBody}>
                    {formFields.map((it)=>
                        <FloatingLabel className={"mb-3"} label={it.label}>
                            <Form.Control placeholder={it.placeholder}/>
                        </FloatingLabel>)}
            </Card.Body>
            <Button sx={styles.buttonPrimary} variant={"contained"}>Soumettre</Button>
            <Typography sx={styles.cardText}>Avez-vous déjà un compte?</Typography>
            <Button sx={styles.buttonSecondary} variant={"outlined"}
                    onClick={() => props.setLogin(true)}
            >Connectez-vous</Button>
        </Card>
             </div>
    )
}
export default SignIn
