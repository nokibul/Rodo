/* eslint-disable react/prop-types */


export default function Container({ children }) {
    return (
        <div className="rounded-lg bg-white container mx-auto p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[500px]  h-[500px]">
            {children}
        </div>
    );
}
