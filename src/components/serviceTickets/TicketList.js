import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )

    return (
        <>
        <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
        {
            tickets.map(
                (ticketObject) => {
                    return <p key={`ticket--${ticketObject.id}`}>{ticketObject.description} submitted by {ticketObject.customer.name} and worked on by {ticketObject.employee.name} </p>
                }
            )
        }
    </>
    )
}
