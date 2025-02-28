import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const { 
        input, 
        setInput, 
        loading, 
        onSent, 
        recentPrompt, 
        showResult, 
        resultData,
        resetChat,
        isTyping,
        setIsTyping
    } = useContext(Context);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSent(input);
        }
    };

    return (
        <div className='Main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How Can I Help You Today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => onSent("Suggest beautiful places to see on an upcoming road trip")}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => onSent("Briefly summarize this concept: urban planning")}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => onSent("Brainstorm team bonding activities for our work retreat")}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => onSent("Improve the readability of the following code")}>
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                            <button className="reset-btn" onClick={resetChat}>New Chat</button>
                        </div>
                        <div className="result-data">
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <>
                                    <img src={assets.gemini_icon} alt="" />
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                </>
                            )}
                        </div>
                    </div>
                )}
                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            type="text" 
                            placeholder='Enter A Prompt' 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        {input && (
                            <span className="clear-input" onClick={() => setInput("")}>×</span>
                        )}
                        <div>
                            <div className="typing-toggle" onClick={() => setIsTyping(!isTyping)}>
                                <div className={`toggle-switch ${isTyping ? 'active' : ''}`}></div>
                                <span>Typing {isTyping ? 'On' : 'Off'}</span>
                            </div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img 
                                src={assets.send_icon} 
                                alt="" 
                                onClick={() => onSent(input)}
                            />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate information. Please verify with a reliable source before making any decisions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
