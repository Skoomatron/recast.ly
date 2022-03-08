var Search = (props) => {
  let totallyNotState = '';

  const handleChange = (event) => {
    totallyNotState = event.target.value;
    return totallyNotState;
  };

  return (
    <div className="search-bar form-inline">
      <input onChange={handleChange} className="form-control" type="text" />
      <button onClick={() => props.searchSubmit(totallyNotState)} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
