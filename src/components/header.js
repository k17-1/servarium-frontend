import Brightness6Icon from '@material-ui/icons/Brightness6';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const header = {
    backgroundColor: "#fff4be",
}

const HeaderButton = styled(Button)({
    borderRadius: "35px",
    backgroundColor: "#ffca34",
});

function Header() {
    return (
        <div style={header}>
            <div>
                <IconButton >
                    <Brightness6Icon/>
                </IconButton>
                <IconButton >
                    <HomeIcon/>
                </IconButton>
            </div>

            <div>
                <HeaderButton variant="contained">SEARCH</HeaderButton>
            </div>
        </div>
    )
}

export default Header;