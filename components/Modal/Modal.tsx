import { FC } from 'react'

interface ModalProps {
    children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
    return (
        <div className='flex justify-center items-center fixed inset-0 bg-zinc-800/30'>
            <div className="bg-white p-8 rounded-lg w-fit h-fit shadow-2xl shadow-black/30">
                {children}
            </div>
        </div>
    )
}

export default Modal