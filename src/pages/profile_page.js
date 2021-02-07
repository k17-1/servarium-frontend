import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Container ={
    border:"1px solid grey",
    borderRadius: "35px",
    marginLeft:"10%",
    marginRight:"10%",
    backgroundColor: "white",
    padding:"20px"
}

const ProfileHeader={
    width:"100%",
    height:"300px",
    marginBottom:"5px",
    backgroundImage:`url(${"https://static-cse.canva.com/blob/194906/Swirling-Stars-and-Space-Video-Zoom-Virtual-Background-1.jpg"})`
}

const EditButton= {
    float:"right",
    backgroundColor:"white",
    opacity: "0.5",
    margin:"10px"
}

function ProfilePage() {
    return (
        <div>
            <div style={Container}>
                <div style={ProfileHeader}>
                    <IconButton style={EditButton} aria-label="delete" >
                        <EditIcon />
                    </IconButton>

                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <Grid item >
                        <AccountCircleIcon style={{fontSize: 100}}/>
                        </Grid>

                        <Grid item >
                            <div>Андрей Верста</div>
                        </Grid>

                        <Grid item >
                            <span>подписчики</span>&nbsp;
                            <span>34</span>&nbsp;&nbsp;&nbsp;
                            <span>подписки</span>&nbsp;
                            <span>24</span>
                        </Grid>
                    </Grid>
                </div>

                <span>O себе: </span><span>ровный чел</span>

                <Grid style={{marginTop:"2px"}} container spacing={3}>
                    <Grid item xm={12} md={6}>
                            <Paper style={{ padding:"5px"}}>
                                <IconButton style={{float:"right"}} aria-label="delete" >
                                    <EditIcon />
                                </IconButton>
                                <div style={{margin:"5px"}}><b>Title</b></div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque esse incidunt ipsum pariatur quidem similique voluptatibus voluptatum. Aspernatur autem consectetur deserunt dolorum, et fuga ipsam magni modi nam voluptatibus.</div>
                                <span>20/12/31</span><span style={{float:"right"}}><span>26</span><span> комментариев</span></span>
                            </Paper>
                    </Grid>
                    <Grid item xm={12} md={6}>
                        <Paper style={{ padding:"5px"}}>
                            <IconButton style={{float:"right"}} aria-label="delete" >
                                <EditIcon />
                            </IconButton>
                            <div style={{margin:"5px"}}><b>Title</b></div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque esse incidunt ipsum pariatur quidem similique voluptatibus voluptatum. Aspernatur autem consectetur deserunt dolorum, et fuga ipsam magni modi nam voluptatibus.</div>
                            <span>20/12/31</span><span style={{float:"right"}}><span>26</span><span> комментариев</span></span>
                        </Paper>
                    </Grid>
                    <Grid item xm={12} md={6}>
                        <Paper style={{ padding:"5px"}}>
                            <IconButton style={{float:"right"}} aria-label="delete" >
                                <EditIcon />
                            </IconButton>
                            <div style={{margin:"5px"}}><b>Title</b></div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque esse incidunt ipsum pariatur quidem similique voluptatibus voluptatum. Aspernatur autem consectetur deserunt dolorum, et fuga ipsam magni modi nam voluptatibus.</div>
                            <span>20/12/31</span><span style={{float:"right"}}><span>26</span><span> комментариев</span></span>
                        </Paper>
                    </Grid>

                </Grid>

            </div>
        </div>
    );
}

export default ProfilePage;