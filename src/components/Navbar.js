import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

class Navbar extends React.Component {

    render() {
        return (
            <div className='Navbar'>
                <AppBar position='fixed'>
                    <Toolbar>
                        <Typography variant='title' color='inherit'>
                            Lojinha
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;