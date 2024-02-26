import Input from "./inputs/Input"
import Button from "./buttons/Button"
import './RegisterForm.css'
import { useState } from "react"

function RegisterForm() {

    // const [lastname, setLastname] = useState('')
    // const [firstname, setFirstname] = useState('')
    const [errors, setErrors] = useState({
        firstname: null,
        lastname: null,
        username: null,
        email: null,
        password: null
})

    const [formData, setFormData] = useState({
        firstname: 'Luffy',
        lastname: 'Monkey D.',
        username: 'Mugiwara',
        email: 'hitohitonomi@gmail.com',
        password: 'gumgum'
    })

    const handleChange = (e) => { 
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let _errors = validateRegisterForm(formData)
        alert(`Nom: ${formData.lastname} Prenom: ${formData.firstname}`)
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <Input
            label="Nom : "
            placehorlder="Entrez votre nom"
            value={formData.lastname}
            onChange={handleChange}
            name="lastname"
            />
            <Input
            label="Prenom : "
            placehorlder="Entrez votre prénom"
            value={formData.firstname}
            onChange={handleChange}
            name="firstname"
            />
             <Input
            label="Nom d'utilisateur : "
            placehorlder="Entrez votre nom d'utilisateur"
            value={formData.username}
            onChange={handleChange}
            name="username"
            />
             <Input
            label="Email : "
            placehorlder="Entrez votre email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            />
            <Input
            label="Mot de passe : "
            placehorlder="Entrez votre mot de putain de passe"
            value={formData.password}
            onChange={handleChange}
            name="password"
            />
            
            <Button 
            type="submit"
            >
                {"Se connecter"}
            </Button>
            </form>
    )
}

export default RegisterForm;

