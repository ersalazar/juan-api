export default interface UpdateCustomer {
    id: number,
    data: {
        firstName?: string,
        lastName?: string,
        email?: string,
        phone?: string,
        address?: string,
    }
   
}