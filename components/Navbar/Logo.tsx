import Image from 'next/image'
const Logo = () => {
    return (
        <Image
            className=""
            alt="logo-image"
            src="/logo/logo.svg"
            width={80}
            height={80}
        />
    )
}
export default Logo