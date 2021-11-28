import React from 'react';
import axios from 'axios';
import {FormControl, InputLabel, Input, Button, Typography} from '@material-ui/core';


class RecommendationForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            companyName: "",
            data: [],
            recommendedColors: []
        }

    }
    changeSelectedCategory = (e) => {
        let category = [...this.state.data]
        category[parseInt(e.currentTarget.id)].selected = !category[parseInt(e.currentTarget.id)].selected
        if(category[parseInt(e.currentTarget.id)].selected){
            category = category.map((item, index)=>{
                if(index!==parseInt(e.currentTarget.id)){
                    item.selected=false;
                }
                return item
            })
        }
        this.setState({data: category})

    }
    componentDidMount(){
        axios.get('http://127.0.0.1:5000/get_categories')
        .then( (response) => {
            const categories = response["data"]
            let data = categories.map((category) => ({category: category, selected: false}))
            this.setState({data: data});
        })
        .catch((error) => {
            console.log(error);
        });
        axios.get('http://127.0.0.1:5000/recommended_colors')
            .then( (response) => {
                let colors = response["data"].map((color) => ({color: color, selected: false}))
                this.setState({recommendedColors: colors});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onSubmit = (value) => {
        console.log(value)
    }

    render(){
        return (
            <div className={"d-flex flex-wrap"}>
                <FormControl>

                    <Typography>Company Name</Typography>
                    <Input id="my-input"
                    value={this.state.companyName} 
                    margin="normal"
                    onChange={(e)=>{this.setState({companyName: e.target.value})}}/>

                    <Typography>Company Type</Typography>
                    <ul>{this.state.data.map((item, i) => <Button
                        color="primary" size="small" variant={item.selected ? "contained": "outlined" }
                        id={i}
                        onClick={(e)=>{this.changeSelectedCategory(e)}}>{item.category}</Button>)}
                    </ul>

                    <Typography>Recommended Colors</Typography>

                    <div className={"d-flex flex-wrap justify-content-center"} style={{'width':"300px"}}>
                        {
                            this.state.recommendedColors.map((color, id)=><div
                                onClick={()=>{
                                    let recommendedColors = [...this.state.recommendedColors]
                                    recommendedColors[id].selected=true
                                    this.setState({recommendedColors: recommendedColors})
                                }}
                                className={"m-1"} style={{'background-color':color.color, height:'25px', width:'25px'}}></div>)
                        }
                    </div>
                    <Button
                    type="submit"
                    fullWidth={false}
                    variant="outlined"
                    color="primary"
                    onClick={() => this.onSubmit(this.state.companyName)}
                    >
                        Submit
                    </Button>
                </FormControl>
                <div className={"d-flex flex-wrap align-self-start"} style={{'width':"300px"}}>
                    {
                        this.state.recommendedColors.map((color, id)=> {
                            if(color.selected){
                                return <div
                                    className={"m-1"}
                                    style={{'background-color': color.color, height: '25px', width: '25px'}}>

                                </div>
                            }
                            return <React.Fragment></React.Fragment>
                        })
                    }
                </div>
            </div>
            )
    }
}

export default RecommendationForm;