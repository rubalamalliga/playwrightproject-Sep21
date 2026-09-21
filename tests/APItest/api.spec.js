

import {test, expect, request} from "@playwright/test"
 
test("GET-REQ get all user", async ({})=>{

const apiRequest = await request.newContext()

const response = await apiRequest.get(process.env.API_BASE_URL + "/user")

const body = await response.json()
console.log(body)

expect(response.status()).toBe(200)

}
)

let token

test("POST-req login user" , async ({})=>{
 
    const apiRequest = await request.newContext()

const response = await apiRequest.post(process.env.API_BASE_URL + "/user/login", {
    data: {
      username: 'addisonw',
      password: 'addisonwpass',
    },

    headers:{
        'Content-Type': 'application/json'
    }
})

const body = await response.json()
console.log(body)
token = await body.accessToken
expect(response.status()).toBe(200)

}
)

test("GET-req get auth user" , async ({})=>{
 
    const apiRequest = await request.newContext()

const response = await apiRequest.get(process.env.API_BASE_URL + "/user/me", {
    
    headers:{
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token
    }
})

const body = await response.json()
console.log(body)
token = await body.accessToken
expect(response.status()).toBe(200)

}
)

test("POST-REQ create user" , async ({})=>{

    const apiRequest = await request.newContext() 

    const response = await apiRequest.post(process.env.API_BASE_URL + "/users/add" , {
        headers : {
            'Content-Type': 'application/json',
        },
        data : {
            "firstName" : "Mohammed",
            "lastName" : "Ali" ,
            "age" : 43
        }
    })

    const body = await response.json()

    console.log(body)

    expect(response.status()).toBe(201)

})





test("PUT-REQ update user" , async ({})=>{

    const apiRequest = await request.newContext() 

    const response = await apiRequest.put(process.env.API_BASE_URL + "/users/2" , {
        headers : {
            'Content-Type': 'application/json',
        },
        data : {
            "firstName" : "Ravi",
            "lastName" : "Teja" ,
            "age" : 24
        }
    })

    const body = await response.json()

    console.log(body)

    expect(response.status()).toBe(200)

})



test.only("DELETE-REQ delete user" , async ({})=>{

    const apiRequest = await request.newContext() 

    const response = await apiRequest.delete(process.env.API_BASE_URL + "/users/1")

    const body = await response.json()

    console.log(body)

    expect(response.status()).toBe(200)  //for delete request we will recieve 204 actually .

})