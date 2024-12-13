import { useState } from 'react'
import SearchControls from './components/SearchControls'
import TextArea from './components/TextArea'
import { findOccurrences, performReplace } from './utils/textUtils'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [findText, setFindText] = useState('')
  const [replaceText, setReplaceText] = useState('')
  const [caseSensitive, setCaseSensitive] = useState(false)
  const [matchCount, setMatchCount] = useState(null)

  const handleFind = () => {
    const count = findOccurrences(text, findText, caseSensitive)
    setMatchCount(count)
  }

  const handleReplace = () => {
    const newText = performReplace(text, findText, replaceText, caseSensitive)
    setText(newText)
    setMatchCount(0)
  }

  return (
    <div className="container">
      <h1>Find and Replace Tool</h1>
      
      <SearchControls
        findText={findText}
        setFindText={setFindText}
        replaceText={replaceText}
        setReplaceText={setReplaceText}
        caseSensitive={caseSensitive}
        setCaseSensitive={setCaseSensitive}
        onFind={handleFind}
        onReplace={handleReplace}
        matchCount={matchCount}
      />

      <TextArea text={text} setText={setText} />
    </div>
  )
}

export default App