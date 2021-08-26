import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets")
                .then(res => res.json())
                .then((data) => {
                    setTickets(data)
                })
        },
        []
    )

    return (
        <>
        {
            tickets.map(
                (ticketObject) => {
                    return <p key={`ticket--${ticketObject.id}`}>{ticketObject.description}</p>
                }
            )
        }
    </>
    )
}
