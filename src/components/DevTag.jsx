import { h } from 'preact';

function devIcon(name) {
    return <i class={`inline-flex mr-1.5 flex-shrink-0 self-center devicon-${name}`}></i>;
}

const svgIconMap = {
    'vue': (
        <svg class="w-3 h-3 inline-flex mr-1.5 flex-shrink-0 self-center" viewBox="0 0 262 227">
            <path fill="#41B883" d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749.001H161.096z" />
            <path fill="#34495E" d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001h-48.302z" />
        </svg>
    ),
    'gcp': (
        <svg class="w-3 h-3 inline-flex mr-1.5 flex-shrink-0 self-center" viewBox="0 0 136 111">
            <path fill="#EA4335" d="M86.057 30.465h4.102l11.822-11.954.582-5.079C88.826 1.15 69.808-3.07 52.266 2.272c-17.54 5.343-31.118 19.49-35.908 37.415a6.334 6.334 0 014.135-.246l23.546-3.987s1.197-2.01 1.82-1.888c10.49-11.682 28.145-13.042 40.255-3.1h-.057z" />
            <path fill="#4285F4" d="M118.779 39.646c-2.713-10.116-8.274-19.212-16.005-26.173L86.227 30.252c6.983 5.79 10.961 14.508 10.794 23.654v2.978c8.133 0 14.726 6.685 14.726 14.932S105.154 86.75 97.021 86.75H67.568l-2.937 3.019v17.911l2.937 2.978h29.453c16.886.132 31.865-10.964 36.875-27.316 5.011-16.351-1.13-34.101-15.117-43.695z" />
            <path fill="#34A853" d="M38.075 110.493h29.429V86.585H38.075c-2.097 0-4.17-.459-6.076-1.346l-4.143 1.304-11.87 11.955-1.036 4.192a37.803 37.803 0 0023.125 7.803z" />
            <path fill="#FBBC05" d="M38.075 32.935c-16.358.1-30.848 10.723-36.07 26.443-5.22 15.72-.02 33.067 12.945 43.181l17.09-17.32c-5.97-2.735-9.44-9.138-8.516-15.713.924-6.575 6.019-11.741 12.503-12.677 6.484-.937 12.799 2.581 15.496 8.633l17.081-17.32c-7.27-9.635-18.565-15.269-30.529-15.227z" />
        </svg>
    ),
    'python': (
        <svg class="w-3 h-3 inline-flex mr-1.5 flex-shrink-0 self-center" viewBox="0 0 111 110">
            <path fill="#3773A6" d="M54.813 0C26.78 0 28.53 12.156 28.53 12.156l.032 12.594h26.75v3.781H17.937S0 26.497 0 54.781c0 28.285 15.656 27.282 15.656 27.282H25V68.936s-.504-15.656 15.406-15.656h26.532s14.906.241 14.906-14.406V14.656S84.107 0 54.813 0zm-14.75 8.469a4.808 4.808 0 014.812 4.812 4.808 4.808 0 01-4.813 4.813 4.808 4.808 0 01-4.812-4.813 4.808 4.808 0 014.813-4.812z"/>
            <path fill="#FFD141" d="M55.609 109.846c28.031 0 26.28-12.156 26.28-12.156l-.03-12.594h-26.75v-3.781h37.375s17.937 2.034 17.937-26.25-15.656-27.281-15.656-27.281H85.42v13.125s.504 15.656-15.406 15.656H43.484s-14.907-.241-14.907 14.406V95.19s-2.263 14.656 27.032 14.656zm14.75-8.469a4.808 4.808 0 01-4.813-4.812 4.808 4.808 0 014.813-4.813 4.808 4.808 0 014.812 4.813 4.808 4.808 0 01-4.812 4.812z"/>
        </svg>
    ),
    'wa': (
        <svg class="w-3 h-3 inline-flex mr-1.5 flex-shrink-0 self-center" fill="#654FF0" viewBox="0 0 108 108">
            <path d="M66.12 0v.58a12.34 12.34 0 11-24.68 0V0H0v107.62h107.62V0h-41.5zM51.38 96.1l-5.24-25.93H46L40.39 96.1h-7.21L25 58h7.13L37 83.93h.09L42.94 58h6.67l5.29 26.25h.1L60.55 58h7l-9.09 38.1h-7.08zm39.26 0l-2.43-8.48H75.4l-1.87 8.48h-7.17L75.59 58h11.24L98 96.1h-7.36z"/>
            <path d="M79.87 67.39l-3.11 13.98h9.68l-3.57-13.98h-3z"/>
        </svg>
    )
}

const iconsMap = {
    'angular': [devIcon('angularjs-plain'), 'bg-red-100', 'text-red-800'],
    'dart': [devIcon('dart-plain'), 'bg-blue-100', 'text-blue-800'],
    'electron': [devIcon('electron-original'), 'bg-blue-100', 'text-blue-800'],
    'flutter': [devIcon('flutter-plain'), 'bg-blue-100', 'text-blue-800'],
    'firebase': [devIcon('firebase-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'gcp': [svgIconMap['gcp'], 'bg-blue-100', 'text-blue-800'],
    'js': [devIcon('javascript-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'javascript': [devIcon('javascript-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'jquery': [devIcon('jquery-plain'), 'bg-blue-100', 'text-blue-800'],
    'nodejs': [devIcon('nodejs-plain'), 'bg-green-100', 'text-green-800'],
    'python': [svgIconMap['python'], 'bg-blue-100', 'text-blue-800'],
    'tailwindcss': [devIcon('tailwindcss-plain'), 'bg-blue-100', 'text-blue-800'],
    'typescript': [devIcon('typescript-plain'), 'bg-blue-100', 'text-blue-800'],
    'ts': [devIcon('typescript-plain'), 'bg-blue-100', 'text-blue-800'],
    'vue': [svgIconMap['vue'], 'bg-green-100', 'text-green-800'],
    'web assembly': [svgIconMap['wa'], 'bg-purple-100', 'text-purple-800'],
}

const devNamesMap = {
    'js': 'JavaScript',
    'ts': 'TypeScript',
    'node': 'NodeJs',
    'tailwind': 'TailwindCSS',
}

export default function DevTag({ name }) {
    if (devNamesMap[name]) {
        name = devNamesMap[name];
    }

    let [icon, color1, color2] = iconsMap[name.toLowerCase()] || [undefined, 'bg-gray-100', 'text-gray-800'];

    return (
        <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${color1} ${color2}`}>
            {icon}
            <span>{name}</span>
        </div>
    );
}