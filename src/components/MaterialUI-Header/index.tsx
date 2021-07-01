import React from 'react'
import { Box, Container, Grid, Paper, TextField } from '@material-ui/core'
import './styles.css'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    underline: {
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    }
  });
  
interface Props {
    
}

export const MaterialUIHeader = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <Paper style={{paddingBottom:'30px'}} square>
                <Container>
                    <Box display="flex" justifyContent="flex-end" mt={1}>
                        <Box>
                        中  |  ENG
                        </Box>
                        <Box ml={1} className="header-s1-social">
                            <img src="/assets/40x40_IG.png" alt="Line Logo" width="20px" height="20px" style={{margin:'0 5px'}} />
                            <img src="/assets/40x40_FB.png" alt="Line Logo" width="20px" height="20px" style={{margin:'0 5px'}}/>
                            <img src="/assets/40x40_LINE.png" alt="Line Logo" width="20px" height="20px" style={{margin:'0 5px'}}/>
                        </Box>
                    </Box>
                    
                        <Grid container >
                            <Grid item xs={12} md={3} lg={2}>
                                <Box display="flex" width="100%" alignItems="center" justifyContent="center">
                                    <img src="/assets/Buymee_logo.png" alt="Line Logo" height="48px"/>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={3} lg={5} justify="center">
                            <Box display="flex" width="100%" alignItems="center" justifyContent="center">
                                <Paper style={{padding:'10px',width:'100%',maxWidth:'630px'}}>
                                    <Grid container alignItems="center" justify="space-between" style={{height:'100%'}}>
                                        <Grid item xs={11}>
                                            <TextField InputProps={{classes}} placeholder="Search Product" style={{width:"100%"}}/>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <img src='/assets/search.svg' alt="Search" width='24px' style={{marginTop:'2px'}}/>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={5}>
                            <Box display="flex" width="100%" justifyContent="space-around" alignItems="center" className="header-s2-tabs" height="100%">
                                <Box paddingX={2} paddingTop={0.5} paddingBottom={0.7} textAlign="center" component="div" className="header-s2-active-tab">
                                    Register
                                </Box>
                                <Box paddingX={2} paddingTop={0.5} paddingBottom={0.7} textAlign="center" component="div">
                                    Sign In
                                </Box>
                                <Box paddingX={2} paddingTop={0.5} paddingBottom={0.7} textAlign="center" component="div">
                                    <img src='/assets/orders.svg' alt="Search" className="header-s2-tabs-svg"/>
                                    Orders
                                </Box>
                                <Box paddingX={2} paddingTop={0.5} paddingBottom={0.7} textAlign="center" component="div">
                                    <img src='/assets/cart.svg' alt="Search" className="header-s2-tabs-svg"/>
                                    Cart
                                </Box>
                            </Box>
                            </Grid>
                        </Grid>
                    
                </Container>
            </Paper>
        </>
    )
}
