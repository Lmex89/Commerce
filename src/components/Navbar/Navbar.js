import React from 'react'
import { Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles'
import AppBar from '@material-ui/core/AppBar';


import logo from '../../logo192.png'

const Navbar = ({ totalItems}) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='fixed' className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={ logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Ventas en Linea
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Mostrar tus elementos del carrito" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>

                    </div>
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Navbar;
