import {h} from 'preact';

function devIcon(name) {
    return <i class={`inline-flex mr-1.5 flex-shrink-0 self-center devicon-${name}`}></i>;
}

function svgIcon(name) {
    if (name === 'vue') {
        return (
            <svg class="w-3 h-3 inline-flex mr-1.5 flex-shrink-0 self-center" viewBox="0 0 261.76 226.69">
                <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
                    <path fill="#41b883" d="M178.06 235.01l-22.669-39.264-22.669 39.264H57.231l98.16-170.02 98.16 170.02z"/>
                    <path fill="#34495e" d="M178.06 235.01l-22.669-39.264-22.669 39.264H96.495L155.391 133l58.896 102.01z"/>
                </g>
            </svg>
        )
    }
}

const iconsMap = {
    'angular': [devIcon('angularjs-plain'), 'bg-red-100', 'text-red-800'],
    'dart': [devIcon('dart-plain'), 'bg-blue-100', 'text-blue-800'],
    'electron': [devIcon('electron-original'), 'bg-blue-100', 'text-blue-800'],
    'flutter': [devIcon('flutter-plain'), 'bg-blue-100', 'text-blue-800'],
    'firebase': [devIcon('firebase-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'javascript': [devIcon('javascript-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'js': [devIcon('javascript-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'gcp': [devIcon('googlecloud-plain'), 'bg-blue-100', 'text-blue-800'],
    'jquery': [devIcon('jquery-plain'), 'bg-blue-100', 'text-blue-800'],
    'tailwindcss': [devIcon('tailwindcss-plain'), 'bg-blue-100', 'text-blue-800'],
    'tailwind': [devIcon('tailwindcss-plain'), 'bg-blue-100', 'text-blue-800'],
    'typescript': [devIcon('typescript-plain'), 'bg-blue-100', 'text-blue-800'],
    'ts': [devIcon('typescript-plain'), 'bg-blue-100', 'text-blue-800'],
    'vue': [svgIcon('vue'), 'bg-green-100', 'text-green-800'],
}

const devNamesMap = {
    'js': 'JavaScript',
    'ts': 'TypeScript'
}

export default function DevTag({name}) {
    let [icon, color1, color2] = iconsMap[name.toLowerCase()];

    if (devNamesMap[name]) {
        name = devNamesMap[name];
    }

    return (
        <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${color1} ${color2}`}>
            {icon}
            <span>{name}</span>
        </div>
    );
}