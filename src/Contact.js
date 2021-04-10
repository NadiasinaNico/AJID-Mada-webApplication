const Contact = () => {
    return (
        <div className="create">
        <h1>Contacter les Formateurs</h1>
        <form >
            <label> Email:
                <input  
                type="text" 
                required
                 />   
            </label>
            <label>Tel: 0342341132</label>
            <label>Message</label>
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
export default Contact;