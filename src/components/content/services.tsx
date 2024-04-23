import { Card } from "../card";
import { MutableRefObject } from "react";
import { Component, LayoutTemplate, Zap } from "lucide-react";
import { contentLayoutStylePrim, contentTitleStylePri } from "../../constants/styles";

interface IServiceProps {
    serviceRef: MutableRefObject<null> | any;
}

export function Services(props: IServiceProps) {
    const { serviceRef } = props;
    const infoCards = [
        {
            title: 'Landing pages',
            description: 'Com design atrativo e foco na conversão, suas campanhas serão impulsionadas com landing pages otimizadas para capturar leads e gerar resultados.',
            icon: Component
        },
        {
            title: 'Criação de sites',
            description: 'Com design atrativo e foco na conversão, suas campanhas serão impulsionadas com landing pages otimizadas para capturar leads e gerar resultados.',
            icon: LayoutTemplate
        },
        {
            title: 'Desempenho',
            description: 'Com design atrativo e foco na conversão, suas campanhas serão impulsionadas com landing pages otimizadas para capturar leads e gerar resultados.',
            icon: Zap
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