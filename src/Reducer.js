
//thi sinital state send empty basket to index.js in AppProvider as props
export const initialState={
    basket:[
        {
        id:"thapaserialnoa",
        name:"iphone x",
        company:"apple",
        price:"6000000",
        image:"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ],user:null

};
const reducer=(state,action)=>{
           switch(action.type){
               case'ADD_TO_BASKET':
                   //logic to adding in basket
                   return{
                    ...state,
                    basket:[...state.basket,action.item],

                   } ;
                  
                case 'REMOVE_FROM_BASKET':
                       //logic for removing firm basket
                       let newBasket=[...state.basket];
                       const index=state.basket.findIndex( (BasketItem)=>
                                     BasketItem.id===action.id);
                       if(index>=0){
                           //item exit in basket, remove it
                           newBasket.splice(index,1);
                       }
                       else{
                           console.warn(`can't remove product (id: ${action.id}) as its not present` )
                       }
                    return {...state, basket:newBasket};
                    
                default:
                    return state;
           }
}
export default reducer;