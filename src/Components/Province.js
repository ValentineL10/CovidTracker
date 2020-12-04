import React, {useEffect, useState} from "react";
 import axios from "axios"
 import '../App.css'



 const Province = () => {
     const [kasusPosi, setkasusPosi] = useState([]);
     const [kasusMeni, setkasusMeni] = useState([]);
     const [kasusSemb, setkasusSemb] = useState([]);
     useEffect(() => {
         axios 
         .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
         .then((response) =>

         {
             setkasusPosi(response.data.kasusPosi);
             setkasusMeni(response.data.kasusMeni);
             setkasusSemb(response.data.kasusSemb);
         })
     }, []);

     return( 
         <div>
             <font color="darkgrey"><b>Jumlah kasus seluruh dunia</b></font>
            <div className = "boxprovince">
             <h1 className ="boxkasusPosi">Positif {kasusPosi}</h1>
             <h1 className ="boxkasusMeni">Meninggal {kasusMeni}</h1>
             <h1 className ="boxkasusSemb">Sembuh {kasusSemb}</h1>
            </div>
         </div>
     )
 }
 export default Province;