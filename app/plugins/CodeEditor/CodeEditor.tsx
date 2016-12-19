import * as React from 'react';
import { DEFAULT_FONT_SIZE, DEFAULT_LANGUAGE, DEFAULT_THEME } from './constants';
import './codeEditor.scss';

const brace = require('brace');
const AceEditor = require('react-ace').default;

//languages
require('brace/mode/c_cpp');
require('brace/mode/clojure');
require('brace/mode/django');
require('brace/mode/haskell');
require('brace/mode/html');
require('brace/mode/javascript');
require('brace/mode/json');
require('brace/mode/perl');
require('brace/mode/php');
require('brace/mode/python');
require('brace/mode/ruby');
require('brace/mode/typescript');

//themes
require('brace/theme/ambiance');
require('brace/theme/chaos');
require('brace/theme/chrome');
require('brace/theme/clouds');
require('brace/theme/cobalt');
require('brace/theme/eclipse');
require('brace/theme/iplastic');
require('brace/theme/monokai');
require('brace/theme/textmate');
require('brace/theme/tomorrow');
require('brace/theme/twilight');
require('brace/theme/xcode');

interface CodeEditorProps {
  height: number;
  width: number;
  pluginNumber: number;
  pluginState: any;
  slideNumber: number;
  updateCurrentPlugin: any;
}

const CodeEditor = ({ 
  height,
  width,
  pluginNumber,
  pluginState,
  slideNumber,
  updateCurrentPlugin,
}: CodeEditorProps) => {
  const { fontSize, isOpen, snippet, snippetEval, theme } = pluginState;

  let { language } = pluginState;
  if (language === 'C++') language = 'c_cpp';

  return (
    <div id="codeeditor-container" style={{ backgroundColor:"rgba(50, 50, 50, .2)"}}>
      <div onDoubleClick={ updateCurrentPlugin ? updateCurrentPlugin.bind(this, { isOpen: true }) : () => {} }>
        {
          snippet
            ? <AceEditor
                mode={ language ? language.toLowerCase() : DEFAULT_LANGUAGE }
                theme={ theme ? theme.toLowerCase() : DEFAULT_THEME }
                height={ `${ height }px` }
                width={ `${ width }px` }
                fontSize={ fontSize ? this.DEFAULT_FONT_SIZE * (fontSize / 100) : DEFAULT_FONT_SIZE * 3 }
                showGutter={ false }
                showPrintMargin={ false }
                tabSize={ 2 }
                value={ snippet } />
            : <span
                className="pt-icon-standard pt-icon-code"
                style={{ width: '100%', fontSize: '30em', textAlign: 'center', opacity: 0.7 }} >
              </span>
        }
      </div>
    </div>
  );
}

export default CodeEditor;
