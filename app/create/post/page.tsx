import { useCallback } from "react"
import Container from "@components/container/Container"
import Textarea from "@components/global/textarea/Textarea"

const Page = () => {

    const initializeEditor = useCallback(async () => {
        const EditorJS = (await import('@editorjs/editorjs')).default
        const Header = (await import('@editorjs/header')).default
        const Embed = (await import('@editorjs/embed')).default
        const Table = (await import('@editorjs/table')).default
        const List = (await import('@editorjs/list')).default
        const Code = (await import('@editorjs/code')).default
        const LinkTool = (await import('@editorjs/link')).default
        const InlineCode = (await import('@editorjs/inline-code')).default
        const ImageTool = (await import('@editorjs/image')).default

    }, [])

    return (
        <section className="">
            <Container>
                <Textarea
                    className="h-full"
                />
            </Container>
        </section>
    )
}
export default Page