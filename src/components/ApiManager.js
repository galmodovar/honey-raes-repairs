



export const getAllCustomers = () => {
    return fetch(`http://localhost:8088/customers`)
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees`)
        .then(res => res.json())
}

export const getAllTickets= () => {
    return fetch(`http://localhost:8088/serviceTickets?_expand=customer&_expand=employee`)
        .then(res => res.json())
}
