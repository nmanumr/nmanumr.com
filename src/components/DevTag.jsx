import {h} from 'preact';

function devIcon(name) {
    return <i class={`inline-flex mr-1.5 flex-shrink-0 self-center devicon-${name}`}></i>;
}

const iconsMap = {
    'angular': [devIcon('angularjs-plain'), 'bg-red-100', 'text-red-800'],
    'electron': [devIcon('electron-original'), 'bg-blue-100', 'text-blue-800'],
    'javascript': [devIcon('javascript-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'js': [devIcon('javascript-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'flutter': [devIcon('flutter-plain'), 'bg-blue-100', 'text-blue-800'],
    'gcp': [devIcon('googlecloud-plain'), 'bg-blue-100', 'text-blue-800'],
    'jquery': [devIcon('jquery-plain'), 'bg-blue-100', 'text-blue-800'],
    'tailwindcss': [devIcon('tailwindcss-plain'), 'bg-blue-100', 'text-blue-800'],
    'typescript': [devIcon('typescript-plain'), 'bg-blue-100', 'text-blue-800'],
    'ts': [devIcon('typescript-plain'), 'bg-blue-100', 'text-blue-800'],
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