import React from 'react';
import {useState} from 'react';

import DateFnsUtils from '@date-io/date-fns';
import zhLocale from "date-fns/locale/zh-TW";
import {makeStyles} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";

const useStyles = makeStyles(
    (theme) => ({
    textField: {    
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,  
    },})
)

export function View(props){
    const [time,setTime] = useState(new Date());
    let year = time.getFullYear()-1911;
    const classes = useStyles();
    return (
      <div> 
          <form className={classes.container} noValidate>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
          <KeyboardDatePicker
            value={time}
            label="阿公店開店日選擇"
            onChange={setTime}
            format={"民國"+year+"年"+"-MM月-dd號"}
            autoOk = "true"
            InputLabelProps={{shrink: true,}}
            KeyboardButtonProps={{'aria-label': 'change date',}}
          />
        </MuiPickersUtilsProvider>
        </form>
      </div>
    );
  
}

class MyDatePickers extends React.Component{    
    constructor(props){
        super(props);       
    }
    componentDidMount(){}
    componentWillUnmount(){}
    render(){
        const classes = this.props.classes;
        return(
            <View/>
            // <DatePickers/>
        );
    }
}

export default withStyles(useStyles)(MyDatePickers)