/* eslint-disable react/prop-types */

export default function ShowTexts({ texts, onDelete }) {
    const removeText = (index) => {
        const newArray = [...texts];
        newArray.splice(index, 1);
        onDelete(newArray)
    };

    return (
        <div className="mt-3">
            <ul>
                {texts.map((text, index) => (
                    <div className="bg-item flex justify-between m-2 rounded-lg sm:max-h-10 md:max-h-14" key={index}>
                        <p className="text-center py-auto flex items-center px-6 sm:text-xs md:text-lg">{text}</p>
                        <button onClick={() => removeText(index)} className="h-full w-10 bg-btn-bg text-white md:p-2 md:m-2 rounded-lg sm:p-1 sm:m-1">X</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}
