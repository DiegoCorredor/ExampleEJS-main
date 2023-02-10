const route = require('express').Router()

const dishes = new Map()

dishes.set('1010',{id:'1010',name:'Tomahawk',calories:800,isVegetarian:false,value:78000})
dishes.set('2020',{id:'2020',name:'Pasta',calories:200,isVegetarian:true,value:15000})

route.get('/',(req,res)=>{
    res.render('index',{title:"Pagina de Inicio",'dishes':dishes})
})

route.get('/newdish',(req,res)=>{
    res.render('insert',{title:"Insertar Plato"})
})

route.post('/',(req,res)=>{
    const {id,name,calories,isVegetarian,value} = req.body

    //console.log(`${id} ${name} ${calories} ${isVegetarian} ${value}`)
    dishes.set(`${id}`,{id:`${id}`,name:`${name}`,calories:`${calories}`,isVegetarian:`${isVegetarian}`,value:`${value}`})

    res.redirect('/')
})
module.exports = route;