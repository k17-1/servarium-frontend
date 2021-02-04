import TextField from '@material-ui/core/TextField';
import {makeStyles, styled} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
const Body = {


}
const Container ={
    border:"1px solid grey",
    borderRadius: "35px",
    marginLeft:"20%",
    marginRight:"20%",
    backgroundColor: "white",
    textAlign: "center",
}
const TextBox={
    height: "40px"
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


function Authorization () {
    const classes = useStyles();
    return (
        <div style={Body}>
            <div style={Container}>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField style={{marginTop: "20px"}}
                                   id="outlined-required"
                                   label="Имя пользователя или Email"
                                   defaultValue=""
                                   variant="outlined"
                        />
                    </div>

                    <div>
                        <TextField
                                   id="outlined-password-input"
                                   label="Пароль"
                                   type="password"
                                   autoComplete="current-password"
                                   variant="outlined"
                        />
                    </div>

                    <RegistrationButton variant="contained">Авторизоваться</RegistrationButton>

                    <MyButton variant="contained">Забыли пароль?</MyButton>

                    <div><RegistrationButton variant="contained">Зарегистрироваться</RegistrationButton></div>

                </form>
            </div>
        </div>
    );
}

export default Authorization;