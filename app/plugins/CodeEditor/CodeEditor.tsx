import * as React from 'react';
import { connect } from 'react-redux';
import { debounce } from '../../utils/helpers';
import './codeEditor.scss';

const brace = require('brace');
const AceEditor = require('react-ace').default;

require('brace/mode/javascript');
require('brace/theme/monokai');

interface CodeEditorProps {
  height: number;
  width: number;
  pluginNumber: number;
  pluginState: any;
  scale: number;
  slideNumber: number;
  updateCurrentSlide: Function;
}

const CodeEditor = ({ height, width, pluginNumber, pluginState, scale, slideNumber, updateCurrentSlide }: CodeEditorProps) => {
  const DEFAULT_FONT_SIZE = 8;

  const { fontSize, snippet, snippetEval } = pluginState;

  let updateSnippetDebounce: any;
  if (updateCurrentSlide) updateSnippetDebounce = debounce(updateCurrentSlide, 900);

  return (
    <div>
      <AceEditor 
        mode='javascript'
        theme='monokai'
        tabSize={2}
        fontSize={ fontSize ? DEFAULT_FONT_SIZE * (fontSize / 100) : DEFAULT_FONT_SIZE * 3 }
        height={`${ height }px`}
        width={`${ width }px`}
        onChange={ (snippet: string) => updateSnippetDebounce(pluginNumber, slideNumber, { snippet }) }
        value={ snippet }
      />
      <button
        className="runButton"
        onClick={() => {
          const snippetEval: any = eval(snippet);
          updateCurrentSlide(pluginNumber, slideNumber, { snippetEval })
        }}>
        run code
      </button>
      <div className="terminal">{ snippetEval }</div>
    </div>
  );
}

export default CodeEditor;
