import commonAPI from "./commonAPI"

//register

export const registerAPI = async(reqBody) => {
    return await commonAPI("POST",'/register',reqBody)
}

//login

export const loginAPI = async(reqBody) => {
    return await commonAPI("POST",'/login',reqBody)
}


// update participant
export const updateParticipantAPI = async(reqBody) => {
    return await commonAPI("PUT",`/participant/profileupdate`,reqBody)
}

// update Organizer
export const updateOrganizerAPI = async(reqBody) => {
    return await commonAPI("PUT",`/organizer/profileupdate`,reqBody)
}

// update Admin
export const updateAdminAPI = async(reqBody) => {
    return await commonAPI("PUT",`/admin/profileupdate`,reqBody)
}

// add Events
export const addEventAPI = async(reqBody) => {
    return await commonAPI("POST",'/addEvent',reqBody)
}

// get all events
export const getAllEvents = async () => {
    return await commonAPI("GET",`/getAllEvents`,{})
}

// view Event
export const viewEventAPI = async (eventID) => {
    return await commonAPI("GET", `/view/${eventID}/event`, {})
}

// add Review
export const addReviewAPI = async (reqBody) => {
     return await commonAPI("POST", `/review`, reqBody)
}

// get all user notif
export const getUserNotifAPI = async (userID) => {
    return await commonAPI("GET", `/user/${userID}/notifications`, {})
}

// get all organizer notif
export const getOrganizerNotifAPI = async (organizerID) => {
    return await commonAPI("GET", `/organizer/${organizerID}/notifications`, {})
}

// payment
export const makePaymentAPI = async(reqBody)=>{
    return await commonAPI("POST", `/payment`, reqBody)
}

// get all user tickets
export const getUserTicketsAPI = async (userID) => {
    return await commonAPI("GET", `/user/${userID}/tickets`, {})
}

// remove Tickets 
export const removeTicketAPI = async (ticketID) => {
    return await commonAPI("DELETE", `/remove/${ticketID}/ticket`, {})
}