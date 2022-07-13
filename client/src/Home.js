import React,{useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import {Box,TextField,Button, Card,CircularProgress,CardContent,Typography} from '@mui/material'


const Home = () => {
    const [newQuestion,setNewQuestion] = useState('')
    const [questions,setQuestions] = useState([])
    const [loading,setLoading] = useState(false)
    
    const postQuestion = () => {
        setLoading(true)
        fetch('http://localhost:3001/postQuestion',{
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "question" : newQuestion
            })
        }).then(data => {
            setLoading(false)
            window.location.reload()
        }
        )
    }

    const getQuestion = () => {
        fetch('http://localhost:3001/questions').then(res => res.json())
        .then(data => {
            setQuestions(data.questions)
        })
    }

    useEffect(() => {
        getQuestion()
    },[])

    return(
        <React.Fragment>
            <div className="App">

                { loading === true ? 
                    <Box style={{textAlign:'center',padding:2}}>
                        <CircularProgress /> 
                        <p>Loading</p>
                    </Box> : null 
                }

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
                            <TextField id="outlined-basic" label="Post a Question" variant="outlined" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
                            <Button variant="contained" onClick={() => {postQuestion()}}>Submit</Button>
                        </Box>
                    </Card>
                    <img src={logo} className="App-logo" alt="logo" />

                    {
                        questions.map((question,idx) => 
                        <div style={{
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-around',
                            padding:10,
                        }}>
                            <Card sx={{ width:'100%' }} key={idx} >
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">{question.question}</Typography>
                            </CardContent>
                            
                        </Card>
                        </div>
                        )
                    }
                </header>
            </div>
        </React.Fragment>
    )
}

export default Home