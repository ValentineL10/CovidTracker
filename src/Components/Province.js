import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import NumberFormat from "react-number-format"

export default function Province (){
    const [provinceData, getProvince] = useState([]);
    useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
            .then(response => {getProvince(response.data.data)})
            .catch(err => {console.log(err)})
    }, []);
    console.log(provinceData)
    return(
        <div align="center">
            <table border="1" className="tabel-dasar">
                <tr>
                    <th className="table-nomor">No</th>
                    <th className="table-provinsi">Province</th>
                    <th className="table-sembuh">Sembuh</th>
                    <th className="table-perawatan">Perawatan</th>
                    <th className="table-meninggal">Meninggal</th>
                </tr>
                {provinceData.map((item, index) => {
                    return(
                        <tr>
                            <th className="table-nomor"scope="row" key={item.fid}>{index + 1}</th>
                            <th className="table-provinsi">{item.provinsi}</th>
                            <th className="table-sembuh"><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-perawatan"><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-meninggal"><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
                        </tr>
                    )
                })}
            </table>
        </div>    
    )
}