const Login = () => {
    return (
        <div className="create">
        <h1>Connectez -vous </h1>
        <form >
            <label> Email:
                <input  
                type="text" 
                required
                 />   
            </label>
            <label>Password</label>
            <input  
                type="password" 
                required
                 />  
           
            <button>Envoyer</button>
            <button>Annuler</button>
        </form>
    </div>

    )
}
export default Login;