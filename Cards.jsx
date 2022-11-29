import { useState } from "react";
import Menu from "./CustomApi";
import MenuCards from "./MenuCards";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map ((currEle) =>{
    return currEle.category;

})
), "All"]

const Cards = () => {
 
        const [menuData, setMenudata] = useState (Menu);
        const [menuList, setMenuList] = useState (uniqueList)
        const   filterItem = (category) =>{
             if (category === "All"){
                return setMenudata(Menu)
             }
            const updatedList = Menu.filter((currEle)=> {

                return currEle.category === category;
            });
        
            setMenudata (updatedList)
        };

         

    return ( 

        <>

        <Navbar filterItem = {filterItem} menuList = {menuList}/>
        <MenuCards menuData = {menuData} />
        

        </>
     );
}
 
export default Cards;