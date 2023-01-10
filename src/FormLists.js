import './FormLists.css';
const FormList =(props)=>{
    return( 
        <div>
            <div className="container">
                <div className="name_of_user miniContainer">{props.name}</div>
                <div className="email_of_user miniContainer">{props.mail}</div>
            </div>
        </div>

    );
}

export  default FormList