/*React imports */
import React , { useState } from 'react'; 
/*Npm imports */
import remarkGfm from 'remark-gfm';
/*Ace imports */
import '../Imports/AceBuildImports'
import  AceEditor from "react-ace";
/*Constants import */
import languages from '../Constants/Languages';
import themes from '../Constants/Themes'
import sizes from '../Constants/Sizes'
import Markdown from 'react-markdown';

interface editorProps {
    cleanMarkDown : string;
}

type languageStyle = {
    name : string
    Value : string
}

type themeStyle = {
    name : string
    Value : string
}

type sizeStyle = {
    name : number
    Value : number
}

function Editor({cleanMarkDown } : editorProps) {

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



    const handleMouseDown = (e :  React.MouseEvent<HTMLDivElement>) => {
        console.log(e);
        e.preventDefault();
        setIsDragging(true);
    }

    const handleMouseUp = () => {
        if (IsDragging) {
            setIsDragging(false);
        }

        if (DraggingVertical) {
            setDraggingVertical(false);
        }
    }

    const handleMouseUpDown = (e :  React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDraggingVertical(true);
    }

    const dragMouseChange = (e : React.MouseEvent) => {

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

    const handleThemeChange = (e :  React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setTheme(e.target.value);
    }

    const handleLanguage = (e :  React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setLanguage(e.target.value);
    }

    const handleSize = (e :  React.ChangeEvent<HTMLSelectElement>) => {
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
                                languages.map((lang : languageStyle) => {
                                    return <option value={lang.Value} > {lang.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <select className="select select-info w-36 rounded-lg select-sm " onChange={handleThemeChange} >
                            {
                                themes.map((theme : themeStyle) => {
                                    return <option value={theme.Value} > {theme.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <select className="select select-info w-32 rounded-lg select-sm " onChange={handleSize}>
                            {
                                sizes.map((size : sizeStyle) => {
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