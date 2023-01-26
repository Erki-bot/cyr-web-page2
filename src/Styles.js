export const styles = {
    cardHeader: {
        // width: "100%",
        textAlign: "center",
        backgroundColor: "#000c55",
        // backgroundColor : "#00135f",
        color: "white",
        borderRadius: "20px 50px",
        boxShadow: "0px 10px 10px #ccf",
        fontWeight: "bold",
        fontSize: "24px"
    },
    buttonPrimary: {
        margin: "10px",
        backgroundColor: "#00135f"
    },
    buttonSecondary: {
        margin: "10px",
        border: "none",
        // color : "#00135f",
        ":hover": {
            border: "none"
        }
    },
    cardContainer: {
        // position : "center",
        // top : "50vh",
        maxWidth: "600px",
        display: "flex",
        margin: "auto",
        // marginTop: "50px",
        // marginBottom : "50px",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "5px 0px 10px 1px #ccc",
        ":hover": {
            boxShadow: "5px 5px 10px #fcf",
        },
        borderRadius: "20px 50px"
    },
    cardText: {
        margin: "10px",
        color: "#666"

    },
    cardBody: {
        // display: "flex",
    },
    cContainer: {
        margin : "30px",
        overflow : "scroll",
        // padding : 100,
        // textAlign : "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor : "black",
        height: "100vh",

    }
}
