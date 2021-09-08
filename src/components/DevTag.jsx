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
    ),
    deno: (
        <svg class="w-5 h-5 inline-flex mr-1.5 -ml-1.5 flex-shrink-0 self-center" viewBox="0 0 1024 1024">
            <g transform="matrix(.1 0 0 -.1 0 1024)">
                <path d="M4720 9174c-19-2-80-9-135-14-782-82-1552-413-2180-939-116-96-380-360-476-476-520-621-824-1318-936-2143-25-183-25-801 0-984 112-825 416-1522 936-2143 96-116 360-380 476-476 621-520 1318-824 2143-936 183-25 801-25 984 0 825 112 1522 416 2143 936 116 96 380 360 476 476 520 621 824 1318 936 2143 25 183 25 801 0 984-112 825-416 1522-936 2143-96 116-360 380-476 476-619 518-1323 826-2137 935-88 12-216 17-453 19-181 2-346 1-365-1zm50-432c0-117 8-371 19-612 6-118 13-287 16-375 11-312 44-1131 49-1204l5-73-45 5c-25 2-48 8-52 11-3 4-10 73-14 154-18 356-77 1737-83 1939l-6 222 28 4c15 2 40 5 56 6l27 1v-78zm957 24c1-1 4-303 7-671 4-369 9-700 12-736 3-37 2-69-3-71-4-3-29-3-54 0l-46 4-7 291c-4 161-9 339-11 397-8 177-15 778-9 793 4 11 15 12 57 5 29-6 53-11 54-12zm-2313-335c6-9 53-560 111-1281 19-245 38-469 41-497 5-51 4-53-28-73-18-11-36-20-40-20-3 0-9 26-12 58-14 130-68 758-106 1212-22 267-42 506-45 532-5 44-4 48 22 62 32 17 50 20 57 7zm2753-201c28-10 31-15 37-72 10-100 7-578-4-578-29 0-89 34-94 53-3 12-6 154-6 315 0 325-4 306 67 282zm-1847-47c0-27 7-176 15-333s17-356 21-442c7-174 9-168-58-172-33-1-33-1-35 49-2 28-7 115-13 195-5 80-17 253-25 385s-18 263-21 291c-6 50-5 52 22 62 16 6 44 11 62 11 32 1 32 1 32-46zm2774-137l34-14 7-134c3-73 5-231 3-350l-3-218-42 21-42 20-3 332c-2 183-1 338 1 345 4 15 4 15 45-2zm-1826-131c6-6 20-491 21-737l1-148-47 7c-27 3-49 6-50 7-3 2-33 743-33 815v74l51-6c29-4 54-9 57-12zm2303-71c12-14 14-233 17-1441 3-1387 3-1423-15-1423-11 0-26 6-35 13-15 11-17 132-22 1317-4 718-9 1370-12 1449l-6 144 29-21c17-12 36-29 44-38zm-897-205c5-4 10-61 11-126 5-221 6-1576 1-1580-2-2-20 3-40 11l-36 15v1701l28-6c15-4 31-10 36-15zm-2760-56c3-27 8-88 11-138 3-49 10-161 16-248 12-176 10-187-47-187-30 0-34 3-38 33-10 59-45 551-40 559 5 7 57 25 81 27 6 1 14-20 17-46zm-1654-255c11-106 33-328 49-493 17-165 31-305 31-311 0-12-77-50-85-42-5 5-105 890-105 930 0 24 77 125 87 114 3-2 13-91 23-198zm3921-105l29-17 1-216c1-118 3-250 3-293 2-90-9-105-63-86l-31 11v86c0 48-3 187-7 310l-6 222h23c12 0 35-8 51-17zm-3482-388c18-192 47-516 66-720l34-370-39-39-38-39-7 79c-4 44-24 248-45 454s-51 505-66 664l-28 288 39 36c35 33 39 34 46 16 4-10 21-176 38-369zm-749-121c22-197 80-721 130-1164s97-870 106-950c8-80 22-201 30-270 14-117 14-125-2-137-24-18-34-16-34 5 0 9-9 85-20 167-18 137-48 369-115 890-14 105-41 314-60 465-20 151-49 376-65 500s-43 336-60 473c-18 136-29 257-26 270 7 27 66 121 72 115 2-3 22-166 44-364zm-306-431c15-120 43-339 62-488 19-148 43-333 54-410l19-140-21-18c-12-10-24-14-28-10s-12 44-18 88-43 301-83 570l-71 490 23 68c12 37 25 67 28 67 4 0 19-98 35-217zm5490 131c14-14 16-76 16-535v-519h-28c-61 0-60-15-64 553l-3 517h32c17 0 39-7 47-16zm-2189-179c226-34 423-97 618-197 126-65 186-110 326-244 208-199 336-373 456-619 175-358 243-675 329-1525 39-381 90-1072 101-1355 3-82 10-217 16-300 11-176 24-152-131-227-215-104-422-176-695-243-334-82-550-108-880-109l-240-1 2 115c0 63 6 210 12 325 30 557 24 1260-15 1650-22 224-65 496-89 556-5 13 18 24 117 58 181 63 338 142 362 181 43 74-34 180-132 180-17 0-68-18-115-39-224-103-673-224-932-251-179-19-457-8-650 27-105 19-293 90-450 171-181 94-292 219-325 367-18 80-13 240 10 330 25 99 95 243 159 327 285 375 873 700 1476 814 192 36 464 40 670 9zm3085-31c36-15 40-19 40-53 2-273-4-897-9-923-1-9-53-10-75-2-14 5-16 59-16 500 0 316 4 494 10 494 5 0 28-7 50-16zm437-549l36-15-7-828c-8-1055-9-1086-47-1177-62-149-59-179-53 475 2 327 7 658 9 735s4 294 5 483c0 228 3 342 10 342 6 0 27-7 47-15zm-6014-249c6-81 4-89-25-153l-32-68-12 100c-19 160-19 167 19 191 17 12 35 20 38 18s9-42 12-88zm-618-603c9-82 79-626 115-893 54-413 58-472 34-447-3 3-26 142-50 309-156 1078-155 1071-142 1079 27 18 36 8 43-48zm720-458c6-25 35-296 35-329 0-28-36-54-52-38-5 5-18 90-28 188-11 99-22 202-25 229l-6 50 35-40c20-22 38-49 41-60zm807-377c11-10 18-50 27-158 15-195 17-180-24-180-42 0-41-3-55 173-14 179-14 177 13 177 13 0 30-6 39-12zm792-15c2-10 7-70 11-133 3-63 12-205 20-315 28-404 29-455 12-455-19 0-21 15-43 300-8 118-23 304-33 413-9 109-15 200-12 202 11 12 40 3 45-12zm-1880-192c6-9 44-329 91-766 14-132 28-259 31-283l5-43-25 16c-19 13-26 26-26 49 0 63-43 478-76 732-19 144-34 271-34 283 0 21 24 29 34 12zm5771-418l-7-418-25-37c-57-84-54-100-51 368l2 429 37 38c20 20 40 37 44 37 3 0 3-188 0-417zm-925-663c5-581 4-626-12-644-10-11-19-18-22-15-7 8-17 1275-9 1282 4 4 14 6 23 5 13-3 16-74 20-628zm-3266 398c7-62 32-359 42-499 6-94 6-97-16-104-12-4-26-3-30 2-7 7-29 229-56 571l-7 82h31c29 0 31-2 36-52zm-786-350c7-7 12-32 12-57 0-26 12-161 25-301 38-383 41-435 24-425-26 15-49 38-44 44 2 4-2 54-10 111-7 58-16 152-20 210s-13 164-21 235c-19 175-18 195 4 195 10 0 23-5 30-12zm473-673c3-22 9-104 13-182 7-150 4-161-37-130-12 9-20 47-32 161-21 206-22 198 17 194 29-3 33-7 39-43z"/>
                <path d="M3184 5756c-104-45-112-186-14-236 71-36 143-19 180 43 70 114-44 246-166 193zM3862 5660c-96-59-96-201 0-260 95-57 218 18 218 132 0 110-126 184-218 128z"/>
            </g>
        </svg>
    ),
    'rxjs': (
        <svg class="w-3 h-3 inline-flex mr-1.5 flex-shrink-0 self-center" viewBox="-2 0 98 100">
            <path fill="#E32286" d="M6.335 61.139C4.452 55.28 3.909 49.096 4.995 42.73c.47-2.64 1.195-5.171 1.991-7.739 0 0 4.995-16.382 21.9-23.868 0 0 5.827-3.074 14.587-3.291 0 0-1.195-1.158-1.955-1.664-4.126-2.749-10.28-3.653-14.008.217-1.122 1.157-2.063 2.423-3.113 3.58-1.195 1.302-2.642 2.387-4.308 3.002-1.447.542-2.895.434-4.38.687-1.52.253-3.076.796-4.307 1.772-1.34 1.085-1.882 2.532-2.027 4.195-.145 1.302-.109 2.64-.18 3.942-.182 3.834-1.413 4.918-4.164 7.052-1.158.868-2.135 2.025-2.86 3.255-2.17 3.833 1.304 7.811 1.485 11.681.036.796-.036 1.591-.326 2.35-.29.832-.869 1.375-1.34 2.062-.65.904-1.085 1.99-.904 3.11.18 1.121.76 2.17 1.303 3.147 1.05 1.735 2.353 3.29 3.728 4.773.073 0 .145.072.218.145"/>
            <path fill="url(#paint0_linear)" d="M75.398 75.026c8.326-3.617 11.873-9.873 11.873-9.873 7.782-10.596 5.14-21.771 5.14-21.771-4.959 10.777-9.484 13.742-9.484 13.742C95.126 38.572 83 27.361 83 27.361c4.959 10.56-1.63 23.434-1.63 23.434C75.834 62.44 67.979 66.6 67.979 66.6c8.76 1.628 15.203-4.267 15.203-4.267-12.56 13.562-26.17 12.91-26.17 12.91 5.718 6.402 14.297 5.86 14.297 5.86-11.221 2.64-21.754-1.086-30.405-8.282a47.693 47.693 0 01-4.634-4.34s-1.303-1.374-1.556-1.736l-.036-.036c-.181 6.69 6.805 12.91 6.805 12.91-8.76-3.616-12.778-11.464-12.778-11.464s-5.9-10.053-1.629-21.517C31.347 35.172 44.27 32.713 44.27 32.713c10.678 5.172 19.727 6.8 19.727 6.8 19.076 3.182 17.99-6.149 17.99-6.149.181-8.028-11.945-16.563-11.945-16.563-21.61-16.02-41.156-5.678-41.156-5.678C11.981 18.61 6.986 34.992 6.986 34.992c-.796 2.567-1.52 5.099-1.99 7.739-1.847 10.74.94 20.903 6.985 29.944 9.411 14.032 24.687 18.878 24.687 18.878 22.623 7.667 38.079-3.617 38.079-3.617C88.972 78.172 91.832 66.89 91.832 66.89c-11.475 8.968-16.434 8.137-16.434 8.137zM57.734 22.262c1.086 0 1.955.868 1.955 1.953a1.946 1.946 0 01-1.955 1.953 1.946 1.946 0 01-1.954-1.953c0-1.085.868-1.953 1.954-1.953z"/>
            <path fill="url(#paint1_radial)" d="M81.95 33.328c.181-8.028-11.945-16.563-11.945-16.563C48.395.78 28.849 11.123 28.849 11.123c-16.904 7.486-21.9 23.869-21.9 23.869-.977 2.785-1.845 7.052-1.845 7.052-1.05 5.352-.58 10.307-.58 10.307.435 4.737 1.485 7.92 1.485 7.92 1.086 3.4 1.592 4.448 1.592 4.448a28.998 28.998 0 01-.217-.904s-1.52-7.305-.108-14.321c0 0 1.23-7.306 6.225-12.947 0 0 8.109-11.537 23.203-7.016 0 0 3.258 1.157 4.38 1.736 1.122.542 3.076 1.374 3.076 1.374 10.678 5.172 19.728 6.799 19.728 6.799 19.148 3.219 18.062-6.112 18.062-6.112zm-24.216-7.124a1.946 1.946 0 01-1.954-1.953c0-1.085.868-1.953 1.954-1.953 1.086 0 1.955.868 1.955 1.953a1.946 1.946 0 01-1.955 1.953z"/>
            <path fill="url(#paint2_linear)" d="M45.355 18.79l-12.343-3.833c-.073 0-.435-.181-1.086 0 0 0-7.276 1.844-6.01 5.822 0 0 .761 2.496 2.824 4.919l13.574-.651 3.04-6.257z"/>
            <defs>
                <linearGradient id="paint0_linear" x1="14.984" x2="59.983" y1="87.322" y2="39.408" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E01D84"/>
                    <stop offset=".401" stop-color="#DF1D85"/>
                    <stop offset=".77" stop-color="#932C87"/>
                    <stop offset="1" stop-color="#5D2F88"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="25.74" x2="45.344" y1="20.286" y2="20.286" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E01D84"/>
                    <stop offset=".238" stop-color="#DA1E85"/>
                    <stop offset=".658" stop-color="#C72085"/>
                    <stop offset=".999" stop-color="#B52284"/>
                </linearGradient>
                <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="matrix(44.00907 .10509 -.0878 36.7672 64.56 26.748)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E01D84"/>
                    <stop offset=".139" stop-color="#DE1E85"/>
                    <stop offset=".285" stop-color="#D62085"/>
                    <stop offset=".434" stop-color="#C92386"/>
                    <stop offset=".586" stop-color="#B72786"/>
                    <stop offset=".739" stop-color="#9D2B87"/>
                    <stop offset=".891" stop-color="#7C2E88"/>
                    <stop offset="1" stop-color="#5D2F88"/>
                </radialGradient>
            </defs>
        </svg>
    )
}

const iconsMap = {
    'angular': [devIcon('angularjs-plain'), 'bg-red-100', 'text-red-800'],
    'dart': [devIcon('dart-plain'), 'bg-blue-100', 'text-blue-800'],
    'deno': [svgIconMap['deno'], 'bg-gray-100', 'text-gray-800'],
    'electron': [devIcon('electron-original'), 'bg-blue-100', 'text-blue-800'],
    'flutter': [devIcon('flutter-plain'), 'bg-blue-100', 'text-blue-800'],
    'firebase': [devIcon('firebase-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'gcp': [svgIconMap['gcp'], 'bg-blue-100', 'text-blue-800'],
    'js': [devIcon('javascript-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'java': [devIcon('java-plain'), 'bg-red-100', 'text-red-800'],
    'javascript': [devIcon('javascript-plain'), 'bg-yellow-100', 'text-yellow-800'],
    'jquery': [devIcon('jquery-plain'), 'bg-blue-100', 'text-blue-800'],
    'nodejs': [devIcon('nodejs-plain'), 'bg-green-100', 'text-green-800'],
    'python': [svgIconMap['python'], 'bg-blue-100', 'text-blue-800'],
    'rxjs': [svgIconMap['rxjs'], 'bg-pink-100', 'text-pink-800'],
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
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${color1} ${color2}`}>
            {icon}
            <span>{name}</span>
        </div>
    );
}