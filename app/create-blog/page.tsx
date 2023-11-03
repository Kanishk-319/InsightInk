'use client'
import AddIcon from '@mui/icons-material/Add';
import {useRef,useState,useEffect} from 'react'
const page: React.FC = () => {
    const textAreaRef = useRef()
    const titleRef = useRef()
    const [title,setTitle] = useState<string>("")
    const [content,setContent] = useState<string>("")
    const handleChange =(e: React.ChangeEvent<HTMLTextAreaElement>):void=>{
        setContent(e.target.value)
    }
    useEffect(()=>{
            if(title==''){
                titleRef.current.style.height = "max"
            }
                titleRef.current.style.height = titleRef.current.scrollHeight + "px"
            
            
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight+ "px"
    },[content, title])
    return (
        <div className='flex w-screen justify-center'>
            <div className="flex gap-4  items-center md:w-1/2 w-full">
                {/* <AddIcon className='text-gray-500 ' /> */}
                <div className="flex flex-col  w-full h-max mt-10">
                    <textarea ref={titleRef} onChange={handleChange}  placeholder="Text..." className="md:text-[3rem]  resize-none h-max outline-none sm:text-[2.5rem] text-[2rem]" />
                    <textarea ref={textAreaRef}   contentue={content} onChange={handleChange}   placeholder="Tell your story..." className="sm:p-0 flex flex-wrap w-full outline-none  sm:text-[1.2rem] resize-none text-[1.2rem] " />
                </div>
            </div>
        </div>


    )
}

export default page