
export const initialState={

    basket:[],
    user:null,
}
export const getBasketTotal=(basket)=>basket?.reduce((amount,item)=> item.price+amount,0)

const reducer = (state,action)=>{
    
    switch(action.type){
        case "ADD_TO_BASKET":{
            return{
                ...state,
                basket:[...state.basket, action.item]
            }
            
        };
        case"REMOVE_BASKET_ITEM":{
            const index=state.basket.findIndex(basketitem=>basketitem.id!==action.id);
            let newBasket=[...state.basket];
            if(index>=0){
                newBasket.splice(index,1)

            }else{
                console.warn(`there are no items in the basket to be deleted (${action.id} doesnot exist)`)
            }
            return{
                ...state,
                basket:newBasket,
            }
        }
        case "SET_USER":{
            return{
                ...state,
                user:action.user
            } 
        }
            
 
}}
 export default reducer;