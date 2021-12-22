import React from 'react'
import {
    Link
  } from "react-router-dom";
import '../index.css'
function Table() {
    return (
        <>
            
            <h1>TABLE</h1>
            
                <table class="table">
                    <thead>
                        
                            <th>Id</th>
                            <th>Year</th>
                            <th>Medals</th>
                       
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>1</td>
                            <td>2004</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            
                            <td>2</td>
                            <td>2008</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            
                            <td>3</td>
                            <td>2012</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            
                            <td>4</td>
                            <td>2016</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            
                            <td>5</td>
                            <td>2020</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </table> 
                <button className='first'> <Link to='/'>Table</Link></button>
    
               <button className='second' ><Link to='chart'>Chart</Link></button>
  

                     
            </>

    )
}

export default Table
