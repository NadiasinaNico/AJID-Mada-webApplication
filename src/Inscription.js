const Inscription = () => {
    return (
        <div className="create">
        <h1>Inscrire</h1>
        <form >
            <label> Email:
                <input  
                type="text" 
                required
                 />   
            </label>
            <label> Classe:
                <input  
                type="text" 
                required
                 />   
            </label>
            <label>Massage</label>
            <textarea  
            required
           >
            </textarea>
            <label>Raison</label>
            <select>
                <option value="nadiasina">Nadiasina</option>
                <option value="nico">Nico</option>
            </select>
            <button>Envoyer</button>
        </form>
    </div>

    )
}
export default Inscription;