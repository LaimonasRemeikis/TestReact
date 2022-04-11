function Jokes ({joke}) {
    
  return (
      <div className="joke">
          <div style={{
              fontWeight: `500`,
          }}>{joke.joke}{joke.setup}</div>

          <div style={{
          }}>{joke.delivery}</div>
      </div>
  )
}
export default Jokes;
