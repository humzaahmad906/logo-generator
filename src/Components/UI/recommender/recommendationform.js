import React from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';


class RecommendationForm extends React.Component{
    constructor(){
        super()
        this.state = {
            companyName: "",
            data: {}
        }
    }
    componentDidMount =() => {
        axios.get('http://127.0.0.1:5000/get_categories')
        .then( (response) => {
            this.setState({data: response["data"]});
            this.render_div = Object.entries(this.state.data).map(([key, list])=>(
                <div>
                    <div>{key}</div><ul>{list.map(item => <Button color="primary" size="small" variant="outlined">{item}</Button>)}</ul>
                </div>
            ))
        })
        .catch((error) => {
            console.log(error);
        });
    }
    onSubmit = (value) => {
        console.log(value)
    }
    render(){
        // .map(item => <span>{item}</span>)
        // <Button variant="contained" disabled>
        //     Disabled
        // </Button>
        return (
            <div>
                <FormControl>
                    <InputLabel>Company Name</InputLabel>
                    <Input id="my-input"
                    value={this.state.companyName} 
                    margin="normal"
                    onChange={(e)=>{this.setState({companyName: e.target.value})}}/>
                    <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={() => this.onSubmit(this.state.companyName)}
                    >
                        Submit
                    </Button>
                </FormControl>
                {this.render_div}
            </div>
            )
    }
}

// export default function RecommendationForm(props){
//     const [companyName, setCompanyName] = useState("")
//     return (
//     <FormControl>
//         <InputLabel>Company Name</InputLabel>
//         <Input id="my-input"
//         value={companyName} 
//         margin="normal"
//         onChange={(e)=>{setCompanyName(e.target.value)}}/>
//         <Button
//         type="submit"
//         fullWidth
//         variant="outlined"
//         color="primary"
//         onClick={() => onSubmit(companyName)}
//         >
//             Submit
//         </Button>
//     </FormControl>)
// }
export default RecommendationForm;