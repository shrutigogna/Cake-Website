import './menucard.css';

const MenuCards = ({menuData}) => {





    return ( 
         <>
         {menuData.map ((currEle) =>{

            const {id,name, category, image, description,price} = currEle
            return (
                
            <div className="card" key={id}>
            <h3 className="number">{id}.</h3>
            
            <h1 className="name">{name}</h1>
            <br></br>
              
                 
            <p className="desc">{description}</p>
           
             
             <p className="price">Price - CAD ${price}</p>
             <img src={image}></img>
         </div>
         
            )
         })}
        
        </>
        
     );
}
 
export default MenuCards;