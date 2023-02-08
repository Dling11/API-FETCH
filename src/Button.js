const Button = ({buttonText, reqType, setReqType    }) => {
    return (
        <button
            className={buttonText === reqType ? "selected" : null} // mean if= to usrs, also d btn txt is usrs thn className="selected", else null
            type="button"
            onClick={()=> setReqType(buttonText)} // on click if the button of user is click the  user, etc. of the 3 buttons
        >
            {buttonText}        
        </button>  // The output of buttonText = ex. of this are the ButtonText... users, post and comments at form.js 
    )
}

export default Button