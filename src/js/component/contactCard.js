import React from "react";

const ContactCard = ({ fullName, address, phone, email}) => {

    return (

        <div className="container border d-flex gap-3 justify-content-center p-2">

            <div className="col-3">
                <img className="col-5 rounded-circle" 
                src="https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg"></img>
            </div>
            <div className="col-6 d-flex flex-column justify-content-between text-start" >
                <div >{fullName}</div>
                <div >{address}</div>
                <div >{phone}</div>
                <div >{email}</div>
            </div>
            <div className="col-1">
                <i className="fa-solid fa-pencil"></i>
                Edit
            </div>
            <div className="col-1">
                <i className="fa-solid fa-trash-can"></i>
                Eliminate
            </div>
        </div>
    )
}

export default ContactCard;