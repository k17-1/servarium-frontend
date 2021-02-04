import TextField from '@material-ui/core/TextField';
import {makeStyles, styled} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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


function Registration() {
    const classes = useStyles();
    return (
        <div>
            <div style={Container}>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                <TextField style={{marginTop: "20px"}}
                    id="outlined-required"
                    label="Имя пользователя"
                    variant="outlined"
                />
                    </div>

                    <div>
                        <TextField style={{marginBottom: "30px"}}
                            id="outlined-required"
                            label="E-mail"
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

                 <div>
                    <TextField style={{marginBottom: "0"}}
                               id="outlined-password-input"
                               label="Повторите пароль"
                               type="password"
                               autoComplete="current-password"
                               variant="outlined"
                    />
                    </div>

                    <div style={{paddingLeft:"30px"}}>
                        <div style={{display: "inline-block",width: "30%"}}>
                            <AccountCircleIcon style={{fontSize: 100,}}/>
                        </div>

                        <div style={{display: "inline-block",width: "60%",marginBottom:"20px",}}>
                        <h3 >Выберите аватар <br/>  профиля:</h3>
                            <Button style={{textTransform:"none"}} variant="contained">Загрузить файл</Button>
                        </div>
                    </div>

                    <RegistrationButton variant="contained">Зарегистрироваться</RegistrationButton>

                    <MyButton variant="contained">Уже зарегистрированы?</MyButton>

                    <RegistrationButton variant="contained">Авторизоваться</RegistrationButton>

                </form>
            </div>
        </div>
    );
}

export default Registration;