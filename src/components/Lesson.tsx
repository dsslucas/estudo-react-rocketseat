//Biblioteca de ícones
import { CheckCircle, Lock } from 'phosphor-react'

//Conversão de data
import {isPast, format} from 'date-fns'

//Conversão do idioma para o Português do Brasil
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

//Adaptação do Ao Vivo e Aula gravada
interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    //Se a data de disponibilização da aula já passou, então ela também passou
    const isLessonAvailable = isPast(props.availableAt)

    //Formata a data
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    const { slug } = useParams<{slug: string}>()

    //Se o slug for igual ao props.slug, ele altera alguns CSS que indica a aula clicada
    const isActiveLesson = slug === props.slug    

    //rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500

    return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">{availableDateFormatted}</span>

            <div 
                className={`
                    rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500
                    ${isActiveLesson ? 'bg-green-500' : ''}
                `}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span
                            className={`text-sm font-medium flex items-center gap-2 ${isActiveLesson ? 'text-white' : 'text-blue-500'}`}
                        >
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span 
                            className={`text-sm text-orange-500 font-medium flex items-center gap-2`}
                        >
                            <Lock size={20} />
                            Em breve
                        </span>
                    ) }

                    <span
                        className={`text-xs rounded px-2 py-[2px] text-white border  font-bold ${isActiveLesson ? 'border-white' : 'border-green-300'}`}
                    >
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>{props.title}</strong>
            </div>
        </Link>
    )
}