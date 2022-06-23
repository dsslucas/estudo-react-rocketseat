import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

//CSS para o vídeo
import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client";

//Query do GraphCMS
const GET_LESSON_BY_SLUG_QUERY = gql`
    query GetLessonBySlug($slug: String = "") {
        lesson(where: {slug: $slug}) {
            title
            videoId
            description
            teacher {
                bio
                avatarURL
                name
            }
        }
    }
`

interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string
        }
    }
}

interface VideoProps {
    lessonSlug: string
}

export function Video(props: VideoProps) {
    //Consulta, que vem do Apollo Client
    const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
        //Por envolver a variável Slug (no GraphCMS) isso é necessário
        variables: { slug: props.lessonSlug }
    })

    //Caso não esteja com os dados em tela
    if (!data) {
        return (
            <div className="flex-1 align-center justify-center">
                <p>Carregando...</p>
            </div>
        )
    }


    return (
        <div className="flex-1">

            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="items-stretch lg:flex items-start gap-16">
                    <div className="flex-col">
                        <h1 className="text-2xl font-bold">{data.lesson.title}</h1>

                        <p className="mt-4 text-gray-200 leading-relaxed">{data.lesson.description}</p>

                        <div className="flex items-center gap-5">
                            <img
                                src={data.lesson.teacher.avatarURL}
                                alt=""
                                className="h-20 w-20 rounded-full border-2 border-blue-500"
                            />

                            <div>
                                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                <span className="text-gray=200 text-sm block">{data.lesson.teacher.bio}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex py-5 lg:flex flex-col gap-5">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>

                        <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>

                <div className="grid-cols-1 gap-8 mt-20 grid lg:grid-cols-2">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-lg lg:text-2xl">Material complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar seu desenvolvimento.</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-lg lg:text-2xl">Wallpapers exclusivos</strong>
                            <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina.</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}