import Modal from '@components/Modal/Modal'
import CloseModal from '@components/closemodal/CloseModal'
import Signin from '@components/signin/Signin'
import { FC } from 'react'


const page: FC = () => {
    return (
        <Modal>
            <div className="w-[25rem] h-fit flex flex-col gap-2">
                <strong className='flex flex-row justify-end'>
                    <CloseModal />
                </strong>
                <Signin />
            </div>
        </Modal>
    )
}

export default page