import type { ChangeEventHandler } from 'react';

export interface SwitchProps {
	label: string;
	value: boolean;
	toggleAction: ChangeEventHandler<HTMLInputElement>;
	className?: string;
}

const nonInitialCaps = /(?!^)([A-Z])/g;
const labels: Record<string, string> = {
	notes: 'notas',
	positionBack: 'posição no verso',
	positionFront: 'posição revelada',
	prophecy: 'profecia',
	tilt: 'inclinação',
	remoteTilt: 'inclinação remota',
};

export default function Switch({ label, value, toggleAction, className }: SwitchProps) {
	return (
		<label
			className={`flex min-h-8 items-center justify-between gap-2 w-full cursor-pointer text-amber-300 hover:text-amber-100 ${className}`}
		>
			<span className="text-sm">{labels[label] ?? label.replace(nonInitialCaps, ' $1')}</span>

			<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
				<input
					id={`switch-${label}`}
					type="checkbox"
					checked={value}
					onChange={toggleAction}
					className="sr-only peer"
				/>
				<div
					className={`
						block w-8 h-4 rounded-full
						transition-colors duration-200 ease-in
						border border-slate-400 bg-slate-700 peer-checked:border-amber-200 peer-checked:bg-slate-500
					`}
				/>
				<div
					className={`
						absolute top-[2px] left-[2px]
						w-3 h-3 rounded-full
						transition-all duration-250 ease-out
						translate-x-0 scale-95 bg-yellow-500
						peer-checked:translate-x-4 peer-checked:scale-110 peer-checked:bg-yellow-400
					`}
				/>
			</div>
		</label>
	);
}
