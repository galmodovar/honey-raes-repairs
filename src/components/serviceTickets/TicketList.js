import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])

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
