/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TextInput({ onTextSubmit }) {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim() !== '') {
            onTextSubmit(text);
        }
        setText('')
      };
    

    return (
      <div className="flex justify-center w-full">
        <form className="flex justify-between" onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="textInput" 
                value={text} 
                onChange={handleChange}
                className="border-2 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-none max-h-10"
            />
            <button type="submit" className="bg-blue-500 ms-2 text-white py-2 px-4 rounded-lg shadow-md max-h-10 sm:text-xs sm:py-1">Add Task</button>
        </form>
      </div>
    );
}