import Modal from '@components/Modal/Modal'
import CloseModal from '@components/closemodal/CloseModal'
import Signup from '@components/signup/Signup'
import { FC } from 'react'


const page: FC = ({ }) => {
    return (
        <Modal>
            <div className="w-[25rem] h-fit flex flex-col gap-2">
                <strong className='flex flex-row justify-end'>
                    <CloseModal />
                </strong>
                <Signup />
            </div>
        </Modal>
    )
}

export default page