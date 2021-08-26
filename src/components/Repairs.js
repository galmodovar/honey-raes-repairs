import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

export const Repairs = () => {
    return (
        <>
        <h1>Honey Rae's Repair Shop</h1>
        <h1>Customer List</h1>
        <CustomerList />
        <h1>Employee List</h1>
        <EmployeeList />
        <h1>Service Tickets</h1>
        <TicketList />
        </>
    )
}
