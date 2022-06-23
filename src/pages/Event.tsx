import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {

    //Para pegar os SLUG de cada aula para ser enviado ao Routes
    const { slug } = useParams<{ slug: string }>()

    //Estado que define a exibição da sidebar
    const [sidebarVisible, setSidebarVisible] = useState('hidden')

    //Estado que define a exibição do Video
    const [videoVisible, setVideoVisible] = useState('hidden')

    //Define o status do display
    function handleToggleSidebar() {
        sidebarVisible === 'hidden' ? setSidebarVisible('') : setSidebarVisible('hidden')
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header onToggleSidebar={handleToggleSidebar} />
            <main className="lg:flex flex-1">
                {slug && sidebarVisible === "hidden" ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
                <Sidebar visible={sidebarVisible} />
            </main>
        </div>

    )
}