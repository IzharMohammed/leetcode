import { useState } from 'react';

import DOMPurify from 'isomorphic-dompurify';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { render } from "react-dom";

import 'ace-builds/src-noconflict/ace';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-typescript";

import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";

import "ace-builds/src-noconflict/ext-language_tools"

function Editor() {
    const markdown = `
 ## Problem Description
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



![Linked List Addition](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)
## Example

Let's say we have two linked lists:-
- 'l1': 2 -> 4 -> 3 (represents the number 342),
- 'l2': 5 -> 6 -> 4 (represents the number 465)

Adding these numbers should give us:
- Result: 7 -> 0 -> 8 (represents the number 807)
`
    const cleanMarkDown = DOMPurify.sanitize(markdown);

    const [IsDragging, setIsDragging] = useState(false);
    const [DraggingVertical, setDraggingVertical] = useState(false);
    const [IsLeftWidth, setIsLeftWidth] = useState(50);
    const [rightWidth, setRightWidth] = useState(50);
    const [upHeight, setUpHeight] = useState(70);
    const [downHeight, setDownHeight] = useState(30);
    const [editorLeft, setEditorLeft] = useState(650);

    const [language, setLanguage] = useState('javascript');
    const [themeName, setTheme] = useState('twilight');
    const [fontSize, setFontSize] = useState(20);

    const languages = [
        { name: 'javaScript', Value: 'javascript' },
        { name: 'java', Value: 'java' },
        { name: 'python', Value: 'python' },
        { name: 'ruby', Value: 'ruby' },
        { name: 'golang', Value: 'golang' },
        { name: 'typescript', Value: 'typescript' },
    ]

    const themes = [
        { name: 'tomorrow_night', Value: 'tomorrow_night' },
        { name: 'monokai', Value: 'monokai' },
        { name: 'twilight', Value: 'twilight' },
        { name: 'xcode', Value: 'xcode' },
        { name: 'terminal', Value: 'terminal' },
        { name: 'solarized_dark', Value: 'solarized_dark' },
        { name: 'solarized_light', Value: 'solarized_light' },
    ]

    const sizes = [
        { name: 14, Value: 14 },
        { name: 16, Value: 16 },
        { name: 18, Value: 18 },
        { name: 20, Value: 20 },
        { name: 24, Value: 24 },
        { name: 28, Value: 28 },
        { name: 32, Value: 32 },
        { name: 40, Value: 40 },
    ]


    const handleMouseDown = (e: any) => {
        console.log(e);
        e.preventDefault();
        setIsDragging(true);
    }

    const handleMouseUp = (e: any) => {
        if (IsDragging) {
            setIsDragging(false);
        }

        if (DraggingVertical) {
            setDraggingVertical(false);
        }
    }

    const handleMouseUpDown = (e: any) => {
        e.preventDefault();
        setDraggingVertical(true);
    }

    const dragMouseChange = (e) => {

        if (IsDragging) {
            const newLeftWidth = (e.clientX / window.innerWidth) * 100;

            console.log('width', newLeftWidth);
            const newRightWidth = 100 - newLeftWidth;
            setRightWidth(newRightWidth);
            setIsLeftWidth(newLeftWidth);
        }

        if (DraggingVertical) {
            const newUpHeight = (e.clientY / window.innerHeight) * 100;

            console.log('width', newUpHeight);
            const newDownHeight = 100 - newUpHeight;
            console.log('up', newUpHeight);
            console.log('down', newDownHeight);


            setUpHeight(newUpHeight);
            setDownHeight(newDownHeight);
        }
    }

    const handleThemeChange = (e) => {
        e.preventDefault();
        setTheme(e.target.value);
    }

    const handleLanguage = (e) => {
        e.preventDefault();
        setLanguage(e.target.value);
    }

    const handleSize = (e) => {
        e.preventDefault();
        setFontSize(parseInt(e.target.value, 10))
    }

    return (
        <div className='flex  h-[100vh] ' onMouseUp={handleMouseUp} onMouseMove={dragMouseChange}>
            <div className=' p-4' style={{ width: `${IsLeftWidth}%` }}>
                <div className='flex gap-2'>
                    <div className='btn btn-ghost'>Description</div>
                    <div className='btn btn-ghost'>Solution</div>
                    <div className='btn btn-ghost'>Submissions</div>
                </div>
                <div >
                    <Markdown remarkPlugins={[remarkGfm]}>{cleanMarkDown}</Markdown>
                </div>
            </div>
            <div className='border border-white w-2 cursor-col-resize' onMouseDown={handleMouseDown} ></div>

            <div className=' border border-white flex flex-col' style={{ width: `${rightWidth}%` }}>

                < div className='flex flex-row-reverse gap-4 my-1'>

                    <div>
                        <select className="select select-info w-32 rounded-lg select-sm " onChange={handleLanguage}>
                            {
                                languages.map(lang => {
                                    return <option value={lang.Value} > {lang.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <select className="select select-info w-36 rounded-lg select-sm " onChange={handleThemeChange} >
                            {
                                themes.map(theme => {
                                    return <option value={theme.Value} > {theme.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <select className="select select-info w-32 rounded-lg select-sm " onChange={handleSize}>
                            {
                                sizes.map(size => {
                                    return <option value={size.Value} > {size.name}</option>
                                })
                            }
                        </select>
                    </div>


                </div>

                <div style={{ height: `${upHeight}%` }} >
                    <AceEditor
                        placeholder="Write code here"
                        mode={language}
                        theme={themeName}
                        name="blah2"
                        width='100%'
                        height='100%'
                        fontSize={fontSize}
                        lineHeight={24}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={false}
                        focus={true}
                        // cursorStart={1}
                        value={`function function_name(argument) {
  //body...
}`}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 2,
                        }} />
                </div>
                <div className='border border-white w-full h-4 cursor-row-resize' onMouseDown={handleMouseUpDown} ></div>
                <div className='border border-violet-900 w-full m-0' style={{ height: `${downHeight}%` }}>
                    submissions
                </div>
            </div>
        </div >
    )
}

export default Editor;