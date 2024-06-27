import DOMPurify from 'isomorphic-dompurify';
import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { render } from "react-dom";
import 'ace-builds/src-noconflict/ace';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-tomorrow_night";
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

        const[IsDragging , setIsDragging]=useState(false);
        const[IsLeftWidth,setIsLeftWidth]=useState(80);
        const[editorLeft,setEditorLeft] = useState(650);

            const handleMouseDown= (e : any)=>{
                console.log(e);
                e.preventDefault();
                setIsDragging(true);
            }

            const handleMouseUp = (e)=>{
                console.log(e);
                if(IsDragging){
                    setIsDragging(false);
                }
            }

            const dragMouseChange = (e)=>{
                console.log('drag',IsDragging);
                
             if(IsDragging){
                const newLeftWidth = (e.clientX / window.innerWidth) * 100;
                /*  if(newLeftWidth > 10 && newLeftWidth < 90) {
                     setIsLeftWidth(newLeftWidth);
                 } */
                
                console.log('width',newLeftWidth);
                
                     setIsLeftWidth(newLeftWidth);  
             }
            }

    return (
        <div className='flex  h-[100vh] ' onMouseUp={handleMouseUp} onMouseMove={dragMouseChange}>
            <div className=' p-4'  style={{ width: `${IsLeftWidth}%` }}>
                <div className='flex border border-green-500'>
                    <div >Description</div>
                    <div>Solution</div>
                    <div>Submissions</div>
                </div>
                <div >
                    <Markdown remarkPlugins={[remarkGfm]}>{cleanMarkDown}</Markdown>
                </div>
            </div>
            <div className='border border-white w-2 cursor-col-resize' onMouseDown={handleMouseDown} ></div>
            <div className='border border-violet-800 w-[90vh]' >
                <AceEditor
                    placeholder="Write code here"
                    mode="javascript"
                    theme="tomorrow_night"
                    name="blah2"
                    width={`${editorLeft}px`}
                    height='725px'
                    /*   onLoad={this.onLoad}
                      onChange={this.onChange} */
                    fontSize={20}
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
            <div className='border border-white w-2 cursor-col-resize'   ></div>
            <div className='border border-white w-[40vh]'>
                submissions
            </div>
        </div>
    )
}

export default Editor;