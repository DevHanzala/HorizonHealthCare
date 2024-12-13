"use server"

import { revalidatePath } from "next/cache";

export async function addRequest(data){
let add=await fetch(`${process.env.BASE_URL}api/requests`,{
    method:'POST',
    body:JSON.stringify(data)
});
add=add.json()
return add
}

export async function getRequest(status) {
    try {
        const response = await fetch(`${process.env.BASE_URL}api/requests?status=${status? status : ""}`);
        if (!response.ok) {
            throw new Error(`Error fetching requests: ${response.status}`);
        }
        const requests = await response.json();
        console.log("Fetched Requests:", requests);
        return requests;
    } catch (error) {
        console.error("Error in getRequest:", error);
        return { error: true, msg: error.message, request: [] };
    }
}
 
export async function getSingleRequest(id) {
    let request = await fetch(`${process.env.BASE_URL}api/requests/${id}`);
    request = request.json();
  
    return request;
  }

export async function updateRequest(id,status) {
        let requests = await fetch(`${process.env.BASE_URL}api/requests`,{
            method:'PUT',
            body:JSON.stringify({
           id,
           status,
            })
        });
        requests=requests.json()
        revalidatePath('/admin/request')
        return requests
}
