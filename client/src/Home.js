import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import {Box,TextField,Button, Card} from '@mui/material'

const Home = () => {
    const [question,setQuestion] = useState('')

    const postQuestion = () => {
        fetch('/postQuestion',{
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "question" : question
            }).then(data=>{
                console.log(data)
                
            })
        })
    }
    return(
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <Card sx={{margin:4}}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="outlined-basic" label="Post a Question" variant="outlined" value={question} onChange={(e) => setQuestion(e.target.value)} />
                            <Button variant="contained" onClick={() => {postQuestion()}}>Submit</Button>
                        </Box>
                    </Card>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        </React.Fragment>
    )
}

export default Home