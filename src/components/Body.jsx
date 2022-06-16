import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, styled } from '@mui/system'
import { Button, FormControl, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
const classes = {
    input : 'input',
    list : 'list',
    button: 'button',

}
const StyledDiv = styled(Box)({
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [`& .${classes.input}`] : {
        width: '400px',
        height: '30px',
    },
    [`& .${classes.list}`] : {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '30px',
        margin: '20px',
        padding:'10px'
       
    },
    [`& .${classes.button}`] : {
        backgroundColor: '#0771eb',
        color: 'white',
        border: 'none',
        width: '150px',
        height: '30px',
    },
    [`& .${classes.listItem}`] : {
        display: 'flex',
        backgroundColor: 'green',
        width: '250px',
        margin: '20px',
        justifyContent: 'space-between',
        height: '30px',

    }
})
const Body = () => {
    const dispatch = useDispatch();
    const {withdrawmoney,depositmoney} = bindActionCreators( actionCreators,dispatch)
    const amount = useSelector(state => state.amount)
    
  return (
    <StyledDiv>
        <Formik
            initialValues={{item:''}}
            validate={values=> {
                const errors = {};
                if (!values.item) { errors.item = 'Required' }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                //here add the submit changes
                setTimeout(() => {
                    withdrawmoney(values.item);
                    console.log({values})
                    setSubmitting(false);
                  }, 400);

            }}>
                <Form>
                    <label style={{ display: "flex", marginBottom: "5px" }}>Enter the State:</label>
                    <Field name='item' className={classes.input}/>
                    <ErrorMessage name='item'/>
                    <Button variant='contained' type='submit'>
                        Add
                    </Button>
                </Form>
            </Formik>
        {console.log({amount})}
        { amount.map((num,index) => (
            <div key={index} className={classes.list}>
                <div className={classes.listItem}>
                    <span style={{fontSize: '28px', marginRight: '20px'}}>{num}</span>
                    <Button variant='contained' onClick={()=>{depositmoney(num)}}>Remove</Button>
                </div>
            </div>
        ))} 
      
        
      
    </StyledDiv>
  )
}

export default Body




