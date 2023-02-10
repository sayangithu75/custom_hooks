import useFetch from './useFetch';

const Parent=()=> {
  const {data:joke , loading , error , reFetch}=useFetch("https://v2.jokeapi.dev/joke/Any");
  if(loading) return <h1>Loading...</h1>
  if(error) console.log(error)
  return (
    <div className="App">
      <h1>
      {joke?.setup} : {joke?.delivery}
      </h1>
      <button onClick={reFetch}> ReFetch</button>
    </div>
  );
}

export default Parent;