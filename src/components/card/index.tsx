import type { LucideIcon } from 'lucide-react';

interface ICardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export function Card({ title, description, icon: Icon }: ICardProps) {
    return (
        <div className="flex flex-col items-center gap-2 w-full max-w-sm bg-white border py-2 border-gray-200 rounded-lg shadow shadow-main-black/25 hover:shadow-md dark:bg-gray-900 dark:border-gray-700 cursor-default hover:scale-105 transition-transform select-none">
            <Icon className='text-main-white size-32 max-h-[132px] px-4 bg-gray-700 rounded-lg' />
            <div className="px-5 pb-5">
                <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-main-white">{description}</span>

                <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-gray-900 dark:text-amber-500">{title}</p>
                </div>
            </div>
        </div>
    );
}
