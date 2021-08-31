import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getAllTickets } from "../ApiManager"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
                getAllTickets()
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
            .then(res => res.json())
            .then((data) => {
                updateTickets(data)
            })
            }
        )
    }
    

        
    

    return (
        <>
        <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
        {
            tickets.map(
                (ticketObject) => {
                    return <p key={`ticket--${ticketObject.id}`} className={ticketObject.emergency ? "emergency" : "ticket"} >
                            {ticketObject.emergency ? "🚑  " : ""} <Link to={`/tickets/${ticketObject.id}`}> {ticketObject.description} </Link> submitted by {ticketObject.customer.name} and 
                            worked on by {ticketObject.employee.name} <button onClick={() => {deleteTicket(ticketObject.id)}}>Delete</button>

                            </p>


                }
            )
        }
    </>
    )
}
