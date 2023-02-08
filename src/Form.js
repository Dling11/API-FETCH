import Button from './Button';

const Form = ({reqType, setReqType}) => {
    return (
        /*important to know that, the page will not reload.. If we enter or submit something => preventDefault()*/

        <form onSubmit={(e)=> e.preventDefault()}>  
            <Button 
                buttonText="users"
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button c
                buttonText="posts"
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button 
                buttonText="comments"
                reqType={reqType}
                setReqType={setReqType}
            />
        </form>
    )
}


export default Form