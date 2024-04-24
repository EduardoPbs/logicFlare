import { Card } from "../card";
import { MutableRefObject } from "react";
import { Component, LayoutTemplate, Smartphone } from "lucide-react";
import { contentLayoutStylePrim, contentTitleStylePri } from "../../constants/styles";

interface IServiceProps {
    serviceRef: MutableRefObject<null> | any;
}

export function Services(props: IServiceProps) {
    const { serviceRef } = props;
    const infoCards = [
        {
            title: 'Landing pages',
            description: 'Maximize o impacto das campanhas com landing pages otimizadas. Com design atraente e foco na conversão, capture leads e impulsione resultados.',
            icon: Component
        },
        {
            title: 'Criação de sites',
            description: 'A união de um design intuitivo com uma arquitetura de informação bem estruturada proporciona uma experiência de usuário excepcional',
            icon: LayoutTemplate
        },
        {
            title: 'Aplicativo',
            description: 'Com interfaces otimizadas para telas menores e funcionalidades adaptadas para interações touch, a experiência do usuário em dispositivos móveis é transformada.',
            icon: Smartphone
        },
    ];

    return (
        <div className={contentLayoutStylePrim} ref={serviceRef}>
            <h2 className={contentTitleStylePri}>
                Serviços
            </h2>
            <div className='flex items-center justify-center gap-12 py-6 max-w-full flex-wrap'>
                {infoCards.map((info: any, index: number) => (
                    <Card
                        key={index}
                        title={info.title}
                        description={info.description}
                        icon={info.icon}
                    />
                ))}
            </div>
        </div>
    );
}
