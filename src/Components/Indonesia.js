import React, {useEffect, useState} from "react";
 import axios from "axios"
 import '../App.css'

 const Indonesia = () => {
     const [perawatan, setPerawatan] = useState([]);
     const [meninggal, setMeninggal] = useState([]);
     const [sembuh, setSembuh] = useState([]);
     useEffect(() => {
         axios 
         .get("https://indonesia-covid-19.mathdro.id/api")
         .then((response) =>

         {
             setPerawatan(response.data.perawatan);
             setMeninggal(response.data.meninggal);
             setSembuh(response.data.sembuh);
         })
     }, []);


     return( 
     
        
        <div>
             <font color="grey"><b>Jumlah kasus seluruh dunia</b></font>
            <div className = "box">
             <h1 className ="boxPerawatan"> Positif {perawatan}</h1>
             <h1 className ="boxMeninggal">Meninggal {meninggal}</h1>
             <h1 className ="boxSembuh">Sembuh {sembuh}</h1>
            </div>
         </div>
     )
 }
 export default Indonesia;