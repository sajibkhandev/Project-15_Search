
let arr=[
    {
        name:"Apple"
    },
    {
        name:"Apricot"
    },
    {
        name:"Avocado"
    },
    {
        name:"Banana"
    },
    {
        name:"Blackberry"
    },
    {
        name:"Blueberry"
    },
    {
        name:"Cherry"
    },
    {
        name:"Coconut"
    },
    {
        name:"Cucumber"
    },
    {
        name:"Durian"
    },
    {
        name:"Dekopon"
    },
    {
        name:"Dragonfruit"
    },
    {
        name:"Fig"
    },
    {
        name:"Feijoa"
    },
    {
        name:"Flacourtia"
    },
    {
        name:"Farkleberry"
    },
    {
        name:"Gooseberry"
    },
    {
        name:"Grape"
    },
    {
        name:"Guava"
    },
    {
        name:"Jackfruit"
    },
    {
        name:"Plum"
    },
    {
        name:"Kiwifruit"
    },
    {
        name:"Kumquat"
    },
    {
        name:"Lemon"
    },
    {
        name:"Lychee"
    },
    {
        name:"Limes"
    },
    {
        name:"Lucuma"
    },
    {
        name:"Lady Apples"
    },
    {
        name:"Mango"
    },
    {
        name:"Watermelon"
    },
    {
        name:"Mulberry"
    },
    {
        name:"Orange"
    },
    {
        name:"Olives"
    },
    {
        name:"Osteen Mango"
    },
    {
        name:"Orangelo"
    },
    {
        name:"Ogallala Strawberry"
    },
    {
        name:"Papaya"
    },
    {
        name:"Passionfruit"
    },
    {
        name:"Peach"
    },
    {
        name:"Pineapple"
    },
    {
        name:"Quince"
    },
    {
        name:"Raspberry"
    },
    {
        name:"Soursop"
    },
    {
        name:"Star fruit"
    },
    {
        name:"Strawberry"
    },
    {
        name:"Tamarind"
    },
    {
        name:"Yuzu"
    },
    {
        name:"Elderberry"
    },
    {
        name:"Eggplant"
    },
    {
        name:"Emu Apple"
    },
    {
        name:"Eggplant"
    },
    {
        name:"Redcurrant"
    },
    {
        name:"Rambutan"
    },
    {
        name:"Rose Hip"
    },
    {
        name:"Red Mulberry"
    },
    {
        name:"Yellow Guava"
    },
    {
        name:"Yumberry"
    },
    {
        name:"Yuzu"
    },
    {
        name:"Yemenite Citron"
    },
    {
        name:"Ugli Fruit"
    },
    {
        name:"Ugni Berry"
    },
    {
        name:"Uva Rara Grape"
    },
    {
        name:"Ice Apple"
    },
    {
        name:"Ilama Fruit"
    },
    {
        name:"Indian Jujube Fruit"
    },
    {
        name:"Huito"
    },
    {
        name:"Hackberry"
    },
    {
        name:"Honeydew"
    },
    {
        name:"Hazelnut"
    },
    {
        name:"Honeyberry"
    },
    {
        name:"Hardy Kiwi Fruit"
    },
    {
        name:"Jujube "
    },
    {
        name:"Jocote"
    },
    {
        name:"Juniper Berry Fruit"
    },
    {
        name:"tarak"
    },
    {
        name:"Quenepa"
    },
    {
        name:"Quince"
    },
    {
        name:"Xonocostle"
    },
    {
        name:"Vine Grapes"
    },
    {
        name:"Victoria Plum"
    },
    {
        name:"Vanilla Fruit"
    },
    {
        name:"Neem Fruit"
    },
    {
        name:"Nungu"
    },
    {
        name:"Nutmeg"
    },
    {
        name:"Nonda Plum Fruit"
    },
]
let input=document.querySelector(".input")
let ulcostomaze=document.querySelector(".ulcostomaze")
let dltIcone=document.querySelector(".dltIcone")
let editIcon=document.querySelector(".editIcon")


input.oninput=function(){
    
    ulcostomaze.innerHTML=""
    arr.map(item=>{
        let text=""
        let color=""
        let discolor=""
        for(let i=0;i<input.value.length;i++){
            text+=item.name.toLowerCase().split("")[i]

        }
        if(text==input.value){
            for(let i=0;i<input.value.length;i++){
                color+=item.name.split("")[i]
                
            }
            let newArr=item.name.split("")
            item.name.split("").splice(0,input.value.length).map(item2=>{
                newArr.shift()
                discolor=newArr.join("")
            })
            
            ulcostomaze.innerHTML+=`<li><span>${color}</span>${discolor}<i class="fa-solid fa-pen-to-square editIcon"></i><i class="fa-solid fa-trash dltIcone"></i></li>`
            
            console.log(color,discolor);
        }
    })
}



// arr.map(item=>{
//     ulcostomaze.innerHTML+=`<li>${item.name}<i class="fa-solid fa-pen-to-square editIcon"></i><i class="fa-solid fa-trash dltIcone"></i></li>`
    
// })

