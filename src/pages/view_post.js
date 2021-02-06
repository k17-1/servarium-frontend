import BookmarksIcon from '@material-ui/icons/Bookmarks';
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from '@material-ui/icons/Share';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Container ={
    border:"1px solid grey",
    borderRadius: "35px",
    marginLeft:"20%",
    marginRight:"20%",
    backgroundColor: "white",
    padding:"20px"
}

const PostHeaderElement={
    display: "inline-block",
    width: 'auto',
    marginTop:"10px"
}

const PostHeaderMenu={
    display: "inline-block",
    width: 'auto',
    float: "right",
}



function ViewPost() {
    return (
        <div style={Container}>
            <div>
                <div style={PostHeaderElement}>
                    <span>User name</span> <span>- </span>
                    <span>Сообщество</span> <span style={{fontSize:"8pt"}}>20/12/20</span>
                </div>

                <div style={PostHeaderMenu}>
                   {/* <IconButton aria-label="delete" >
                        <BookmarksIcon />
                    </IconButton>

                    <IconButton aria-label="delete">
                        <ShareIcon />
                    </IconButton>*/}

                    <IconButton aria-label="delete">
                        <FormatListBulletedIcon />
                    </IconButton>
                </div>
            </div>

            <h3 style={{margin:"10px",marginLeft:"20px"}}>Post Title</h3>

            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet esse, inventore nisi nulla qui repellendus. Ab, aliquid consequatur eligendi eum expedita laborum libero minima minus molestias quasi suscipit vel voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur assumenda dignissimos, ducimus ea expedita fuga illo ipsam itaque, neque nihil obcaecati odit possimus quasi qui sint tempore tenetur ullam.</span>
            <hr style={{marginTop:"20px"}}/>



                <Grid container direction="row"
                      alignItems="center">
                    <Grid item style={{marginRight:"10px"}}>
                        <IconButton aria-label="delete" >
                            <ThumbUpIcon />&nbsp;<div>112</div>
                        </IconButton>
                    </Grid>


                    <Grid item style={{marginRight:"30px"}}>
                        <IconButton aria-label="delete" >
                            <ThumbDownIcon />&nbsp;<div >42</div>
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <IconButton aria-label="delete" >
                            <ShareIcon />&nbsp;Поделиться
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <IconButton aria-label="delete" >
                            <BookmarksIcon />&nbsp;Сохранить
                        </IconButton>
                    </Grid>


                </Grid>

                <span>5743</span> <span>комментариев</span>
                <TextField style={{width: '100%',marginBottom:"10px"}} id="input-with-icon-grid" label="Комментарий" />

                <Grid container
                      direction="column"
                      justify="flex-start"
                      alignItems="center">

            <Grid item container direction="row"
                  alignItems="center">

                <Grid item>
                    <AccountCircleIcon style={{fontSize: 70}}/>
                </Grid>
                <Grid item>
                    <div>Имя</div>
                    <div>Комментарий</div>
                </Grid>
            </Grid>

                    <Grid item container direction="row"
                          alignItems="center">
                        <Grid item>
                            <AccountCircleIcon style={{fontSize: 70}}/>
                        </Grid>
                        <Grid item>
                            <div>Имя</div>
                            <div>Комментарий</div>
                        </Grid>
                    </Grid>

                    <Grid item container direction="row"
                          alignItems="center">
                        <Grid item>
                            <AccountCircleIcon style={{fontSize: 70}}/>
                        </Grid>
                        <Grid item>
                            <div>Имя</div>
                            <div>Комментарий</div>
                        </Grid>
                    </Grid>

                </Grid>
        </div>
    );
}

export default ViewPost;