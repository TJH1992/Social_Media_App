import React, {useState,useEffect,useRef} from 'react'
import {Form, Button, Message, Segment, TextArea, Divider } from "semantic-ui-react"

import { HeaderMessage, FooterMessage} from '../components/Common/WelcomeMessage'

function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        bio: "",
        facebook: "",
        youtube: "",
        twitter: "",
        instagram: ""
    })

    const {name, email, password, bio} = user

    const handleChange = () => {
        const {name, value} = e.target

        setUser(prev => ({ ...prev, [name]: value }))

    }

    const [showSocialLinks, setShowSocialLinks] = useState(false)
    const [showPassword ,setShowPassword] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [formLoading, setFormLoading] = useState(false);

    const [username, setUsername] = useState('')
    const [usernameLoading, setUsernameLoading] = useState(false)
    const [usernameAvailable, setUsernameAvaiable] = useState(false)

    const handleSubmit = e => e.preventDefault()

    return (
        <>
        <HeaderMessage />
        <Form loading={formLoading} error={errorMsg !== null} onSubmit={handleSubmit}>
            <Message error header="Oops!" content={errorMsg} onDismiss={()=>setErrorMsg(null)}/>
        

        <Segment>

            <Form.Input
            required 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={name} 
            onChange={handleChange} 
            fluid icon="user" 
            iconPosition="left" 
            />

            <Form.Input
            required 
            label="Email" 
            placeholder="Email" 
            name="email" 
            value={email} 
            onChange={handleChange} 
            fluid icon="envelope" 
            iconPosition="left" 
            type="email"
            />

            <Form.Input 
            required
            label="password" 
            placeholder="password" 
            name="password" 
            value={password} 
            onChange={handleChange} 
            fluid icon={{
                name:"eye",
                circular:true,
                link:true,
                onClick:()=>setShowPasssword(!showPassword)
            }} 
            iconPosition="left" 
            type={showPassword?'text':"password"}
            />
        </Segment>


        </Form>

        <FooterMessage />
      </>
    )
}

export default Signup
