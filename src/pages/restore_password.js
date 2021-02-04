import TextField from '@material-ui/core/TextField';
import {makeStyles, styled} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Container ={
    border:"1px solid grey",
    borderRadius: "35px",
    marginLeft:"20%",
    marginRight:"20%",
    backgroundColor: "white",
    textAlign: "center",
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "70%",
        marginBottom: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        '& .MuiTextField-root': {
            margin: "10px",
            width: '80%',
        },
    },
}));

const RegistrationButton = styled(Button)({
    borderRadius: "35px",
    backgroundColor: "#ffca34",
    textTransform:"none",
    margin: "10px",
});

const MyButton = styled(Button)({
    borderRadius: "35px",
    backgroundColor: "white",
    textTransform:"none",
    margin: "10px",
});


function RestorePassword() {
    const classes = useStyles();
    return (
        <div>
            <div style={Container}>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField style={{marginTop: "20px"}}
                                   id="outlined-required"
                                   label="Email"
                                   variant="outlined"
                        />
                    </div>

                    <div>
                        <TextField
                            id="outlined-password-input"
                            label="Код"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                    </div>

                    <RegistrationButton variant="contained">Получить код</RegistrationButton>

                    <MyButton variant="contained">Восстановить пароль</MyButton>

                </form>
            </div>
        </div>
    );
}

export default RestorePassword;