import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:3000";
const CitiesContext = createContext();

const initialState ={
  cities: [],
  isLoading:false,
  currentCity:{},
  error:"",
};

function reducer(state,action){
  switch(action.type){
    case 'loading':
      return{
        ...state,isLoading:true
      };
    case 'city/loaded' :
      return{
        ...state,
        isLoading:false,
        currentCity:action.payload,
      };
    case 'cities/loaded':
       return {
        ...state,
        isLoading: false,
        cities: action.payload,
        currentCity: action.payload,
       };
    case 'city/created':
      return{
        ...state,
        isLoading:false,
        cities:[...state.cities,action.payload],
        currentCity:action.payload,
      };

    case 'city/deleted':
      return{
        ...state,
        isLoading:false,
        cities: state.cities.filter((city)=>city.id!==action.payload),
        currentCity:{},
      };
    case 'rejected':
      return{
        ...state,
        isLoading:false,
        error:action.payload,
      };
    default:
    throw new Error("Action Unknown");
  }
}

function CitiesContextProvider({children}){
  const [state,dispatch] = useReducer(reducer,initialState);
  const {cities,isLoading,currentCity,error} = state;

  useEffect(function(){

  async function fetchCities(){
      dispatch({type:'loading'});
        try { 
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      dispatch({type:'cities/loaded', payload:data})
        } catch{
      dispatch({
        type:"rejected",
        payload:"There was an error getting cities data.."
      });
    }
  } 
 fetchCities();
  },[]);

async function getCity(id){
  if(Number(id)===currentCity.id) return;
  dispatch({type:'loading'});
    try { 
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({type:'city/loaded', payload : data});
    } catch{
      dispatch({
        type:"rejected",
        payload:"There was an error getting this city data.."
      });
   } }

async function createCity(newCity){
  dispatch({type:'loading'});
  try { 
    const res = await fetch(`${BASE_URL}/cities`,{
      method:"POST",
      body:JSON.stringify(newCity),
      headers:{
        "Content-Type" : "application/json",
      }
    });
    const data = await res.json();

    dispatch({type:'city/created', payload : data});
  } catch{
    dispatch({
      type:"rejected",
      payload:"There was an error creating cities data.."
    });
 } }

async function deleteCity(id){
  dispatch({type:'loading'});
  try { 
    await fetch(`${BASE_URL}/cities/${id}`,{
      method:"DELETE",
      });
      
    dispatch({type:'city/deleted', payload : id});
  } catch{
    dispatch({
      type:"rejected",
      payload:"There was an error deleting cities data.."
    });
 } }

return(
    <CitiesContext.Provider value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
        error,
    }}>
        {children}
    </CitiesContext.Provider>
);
}

function useCities(){
    const context = useContext(CitiesContext);
    if(context===undefined) throw new Error ("Wrong contect cities");
    return context;
}
export {useCities,CitiesContextProvider};