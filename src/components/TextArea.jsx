import PropTypes from 'prop-types';

function TextArea({ text, setText }) {
  return (
    <textarea
      className="text-area"
      placeholder="Enter or paste your text here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

TextArea.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired
};

export default TextArea;