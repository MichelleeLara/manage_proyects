import { useChat } from 'ai/react';

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit} = useChat()
    return (
        <>
        
        <form onSubmit={handleSubmit} className='border_chat md:w-2/3'>
            {/* <div className="flex gap-3 justify-start px-5 py-6">
                <div className="bg-[#4f4bccbb] h-fit p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github-copilot" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 18v-5.5c0 -.667 .167 -1.333 .5 -2"></path>
                        <path d="M12 7.5c0 -1 -.01 -4.07 -4 -3.5c-3.5 .5 -4 2.5 -4 3.5c0 1.5 0 4 3 4c4 0 5 -2.5 5 -4z"></path>
                        <path d="M4 12c-1.333 .667 -2 1.333 -2 2c0 1 0 3 1.5 4c3 2 6.5 3 8.5 3s5.499 -1 8.5 -3c1.5 -1 1.5 -3 1.5 -4c0 -.667 -.667 -1.333 -2 -2"></path>
                        <path d="M20 18v-5.5c0 -.667 -.167 -1.333 -.5 -2"></path>
                        <path d="M12 7.5l0 -.297l.01 -.269l.027 -.298l.013 -.105l.033 -.215c.014 -.073 .029 -.146 .046 -.22l.06 -.223c.336 -1.118 1.262 -2.237 3.808 -1.873c2.838 .405 3.703 1.797 3.93 2.842l.036 .204c0 .033 .01 .066 .013 .098l.016 .185l0 .171l0 .49l-.015 .394l-.02 .271c-.122 1.366 -.655 2.845 -2.962 2.845c-3.256 0 -4.524 -1.656 -4.883 -3.081l-.053 -.242a3.865 3.865 0 0 1 -.036 -.235l-.021 -.227a3.518 3.518 0 0 1 -.007 -.215z"></path>
                        <path d="M10 15v2"></path>
                        <path d="M14 15v2"></path>
                        </svg>
                </div>
                <div className="max-w-[400px] w-[150px] flex flex-col gap-2">
                    <div className="bg-[#434650]  px-3 py-1 rounded-md">
                        <p>Hey monss</p>
                    </div>
                    <p className="text-xs">3:30pm</p>
                </div>
            </div>
            <div className="flex gap-3 justify-end px-5 py-6">
                <div className="max-w-[400px] w-[150px] flex flex-col gap-2">
                    <div className="bg-[#434650]  px-3 py-1 rounded-md">
                        <p>Hey mon</p>
                    </div>
                    <p className="text-xs text-end">3:30pm</p>
                </div>
                <div className=" h-fit p-1 rounded-full bg-[#fff27a78]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path>
                        <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" stroke-width="0" fill="currentColor"></path>
                        </svg>
                </div>
            </div> */}
            {messages.map(message =>{
			return (
				<div className="" key={message.id}>
                    {message.role === 'assistant' && (
                        <div className="flex gap-3 justify-start px-5 py-6">
                            <div className="bg-[#4f4bccbb] h-fit p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github-copilot" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 18v-5.5c0 -.667 .167 -1.333 .5 -2"></path>
                                    <path d="M12 7.5c0 -1 -.01 -4.07 -4 -3.5c-3.5 .5 -4 2.5 -4 3.5c0 1.5 0 4 3 4c4 0 5 -2.5 5 -4z"></path>
                                    <path d="M4 12c-1.333 .667 -2 1.333 -2 2c0 1 0 3 1.5 4c3 2 6.5 3 8.5 3s5.499 -1 8.5 -3c1.5 -1 1.5 -3 1.5 -4c0 -.667 -.667 -1.333 -2 -2"></path>
                                    <path d="M20 18v-5.5c0 -.667 -.167 -1.333 -.5 -2"></path>
                                    <path d="M12 7.5l0 -.297l.01 -.269l.027 -.298l.013 -.105l.033 -.215c.014 -.073 .029 -.146 .046 -.22l.06 -.223c.336 -1.118 1.262 -2.237 3.808 -1.873c2.838 .405 3.703 1.797 3.93 2.842l.036 .204c0 .033 .01 .066 .013 .098l.016 .185l0 .171l0 .49l-.015 .394l-.02 .271c-.122 1.366 -.655 2.845 -2.962 2.845c-3.256 0 -4.524 -1.656 -4.883 -3.081l-.053 -.242a3.865 3.865 0 0 1 -.036 -.235l-.021 -.227a3.518 3.518 0 0 1 -.007 -.215z"></path>
                                    <path d="M10 15v2"></path>
                                    <path d="M14 15v2"></path>
                                    </svg>
                            </div>
                            <div className="max-w-[400px] w-[150px] md:min-w-[350px] flex flex-col gap-2">
                                <div className="bg-[#434650]  px-3 py-1 rounded-md">
					                <p>{message.content}</p>
                                </div>
                                <p className="text-xs">3:30pm</p>
                            </div>
                        </div>
                    ) }
                    {message.role === 'user' && (
                        <div className="flex gap-3 justify-end px-5 py-6">
                            <div className="max-w-[400px] w-[150px] md:min-w-[350px] flex flex-col gap-2">
                                <div className="bg-[#434650]  px-3 py-1 rounded-md">
                                    <p>{message.content}</p>
                                </div>
                                <p className="text-xs text-end">3:30pm</p>
                            </div>
                            <div className=" h-fit p-1 rounded-full bg-[#fff27a78]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path>
                                    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                            </div>
                    </div>
                    ) }
					{/* <p>{message.content}</p> */}
				</div>
			)
		})}
            <div className="w-full flex items-center justify-center mb-2">
                <div className="flex w-4/5  gap-2 bg-[#3f3f46] saturate-200 backdrop-blur-xl outline-none py-2 px-3 rounded-2xl md:w-2/4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-prompt" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 7l5 5l-5 5"></path>
                        <path d="M13 17l6 0"></path>

                    </svg>
                    <input type="text" name="content" defaultValue={input} onChange={handleInputChange} className="bg-transparent outline-none text-xs w-full"/>
                </div>
            </div>
        </form>
    </>
    )
}