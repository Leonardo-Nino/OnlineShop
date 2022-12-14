let products =[
    {id:"1", name: "product 1", category:"first", price: "15",},
    {id:"2", name: "product 2", category:"first", price: "13"},
    {id:"3", name: "product 3", category:"first", price: "16"},
    {id:"4", name: "product 4", category:"second", price: "23"},
    {id:"5", name: "product 5", category:"second", price: "25"},
    {id:"6", name: "product 6", category:"second", price: "21"},
]


export const myFech=(id) => {
    return new Promise((resolve, reject) => {   
        setTimeout(()=>{
            resolve( id ? products.find(prod => prod.id === id): products )
        },1000 )
    })
}