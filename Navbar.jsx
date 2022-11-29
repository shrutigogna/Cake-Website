import './navbar.css'
const Navbar = ({filterItem, menuList}) => {
    return ( 
        <>

      
        <div className="navbar">
            <h1>Welcome To Bake_N_Cake_By_Preet</h1>
             <h1>Choose the size of Cakes</h1>
            {
                menuList.map ((currEle)=>{
                    return <button className='btn' onClick={() => filterItem (currEle)} >{currEle}</button>
                })
            }
                
                
            </div></>
     );
}
 
export default Navbar;