import PropTypes from 'prop-types';

function SearchControls({ 
  findText, 
  setFindText, 
  replaceText, 
  setReplaceText, 
  caseSensitive, 
  setCaseSensitive,
  onFind,
  onReplace,
  matchCount 
}) {
  return (
    <div className="search-controls">
      <div className="input-group">
        <div className="find-group">
          <input
            type="text"
            placeholder="Find text..."
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
          />
          <button onClick={onFind} className="find-btn">
            Find
          </button>
          {matchCount !== null && (
            <span className="match-count">
              {matchCount} {matchCount === 1 ? 'match' : 'matches'} found
            </span>
          )}
        </div>
        <div className="replace-group">
          <input
            type="text"
            placeholder="Replace with..."
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
          />
          <button onClick={onReplace} className="replace-btn">
            Replace All
          </button>
        </div>
      </div>
      
      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
          />
          Case sensitive
        </label>
      </div>
    </div>
  );
}

SearchControls.propTypes = {
  findText: PropTypes.string.isRequired,
  setFindText: PropTypes.func.isRequired,
  replaceText: PropTypes.string.isRequired,
  setReplaceText: PropTypes.func.isRequired,
  caseSensitive: PropTypes.bool.isRequired,
  setCaseSensitive: PropTypes.func.isRequired,
  onFind: PropTypes.func.isRequired,
  onReplace: PropTypes.func.isRequired,
  matchCount: PropTypes.number
};

export default SearchControls;