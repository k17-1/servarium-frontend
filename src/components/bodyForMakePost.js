import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import './cssForTableInBodyMakePost.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#FFDEAD',
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    telo: {
        padding: "35px",
        marginTop: theme.spacing(8)
    },
    text: {
        minWidth: "600px"
    },
    textForGroups: {
        minWidth: "400px"
    },
    main: {
        backgroundColor: "#FFDEAD",
        padding: 0,
        maxWidth: '100%',
        minBlockSize: "1000px"
    },
    zagolovok: {
        maxWidth: 300,
        margin: "auto",

    },
}))
export default function Body() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }
    return (

        <React.Fragment>
            <CssBaseline/>
            <Container className={classes.main}>
                <Container maxWidth="md" className={classes.telo}>
                    <Typography component="div" style={{
                        backgroundColor: 'white',
                        height: "none",
                        borderRadius: "25px",

                    }}>
                        <div className={classes.zagolovok}>
                            <Typography variant="h4" gutterBottom>
                                Создание поста
                            </Typography>
                        </div>

                        <table className="tab">
                            <tr className="tab">
                                <td className="left">
                                    <p>Название поста </p>
                                </td>
                                <td className="left">
                                    <form className={classes.text} noValidate autoComplete="off">
                                        <TextField className={classes.text} id="outlined-basic" label="Название поста"
                                                   variant="outlined"/>
                                    </form>
                                </td>
                            </tr>
                            <tr className="tab">
                                <td className="left">
                                    <p>Сообщество</p>
                                </td>
                                <td className="">
                                    <form noValidate autoComplete="off">
                                        <TextField className={classes.textForGroups} id="outlined-basic"
                                                   label="Название сообщества" variant="outlined"/>
                                    </form>
                                </td>
                            </tr>
                            <tr className="tab">
                                <td className="left">
                                    <p>Хештеги</p>
                                </td>
                                <td>
                                    <form className={classes.text} noValidate autoComplete="on">
                                        <TextField
                                            id="filled-multiline-static"
                                            multiline
                                            rows={4}
                                            defaultValue="#"
                                            variant="filled"
                                            className={classes.text}
                                            fullWidth="true"
                                        />
                                    </form>
                                </td>
                            </tr>

                            <tr className="left">
                                <td>
                                    <p></p>
                                </td>
                                <td className="right">
                                    <Button variant="contained">Прикрепить файлы</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Текст поста:</p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aperiam
                                        assumenda atque debitis dolorem dolores, eligendi enim ex inventore quibusdam
                                        quisquam rerum, sequi tempora, totam! Culpa eligendi enim neque.</p>
                                </td>
                            </tr>
                            <tr className="left">
                                <td>
                                    <FormControlLabel control={<Checkbox name="checkedC"/>}
                                                      label="Возможность оценить пост"/>
                                </td>
                                <td>
                                    <FormControlLabel control={<Checkbox name="checkedC"/>}
                                                      label="Возможность оставлять комментарии"/>
                                </td>
                            </tr>
                            <tr>
                            <td colspan="2" align="center" className="publish">
                                <Button variant="contained" color="secondary">Опубликовать</Button>
                            </td>
                            </tr>
                        </table>
                    </Typography>
                </Container>
            </Container>
        </React.Fragment>
    );
}