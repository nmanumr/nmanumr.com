function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <line x1="3.6" y1="9" x2="20.4" y2="9" />
      <line x1="3.6" y1="15" x2="20.4" y2="15" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
  )
}

export default function ProjectUrls({ codeUrl, siteUrl, siteText = 'View Site' }) {
  let codeUrlTitle = '';
  if (codeUrl) {
    let parts = codeUrl.split('/');
    codeUrlTitle = parts[3];

    if (parts.length > 4)
      codeUrlTitle += `/${parts[4]}`;

    if (parts.length > 6 && parts[5].toLowerCase() === 'tree') {
      if (parts[6].length == 40) {
        codeUrlTitle += `@${parts[6].slice(0, 7)}`;
      } else {
        codeUrlTitle += `@${parts[6]}`;
      }
    }
  }

  if (!codeUrl && !siteUrl) return <></>;

  return (
    <>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">
          {codeUrl ? 'Code' : 'Live'}
        </dt>
        <dd className="mt-1 text-sm text-gray-900">
          {codeUrl ? (
            <a href={codeUrl} className="inline-flex space-x-1 items-center">
              <GithubIcon />
              <span>{codeUrlTitle}</span>
            </a>
          ) : (
            <a href={siteUrl} className="inline-flex space-x-1 items-center">
              <GlobeIcon />
              <span>{siteText}</span>
            </a>
          )}
        </dd>
      </div>

      {!codeUrl || !siteUrl ? (
        <div className="sm:col-span-1" />
      ) : (
        <div>
          <dt className="text-sm font-medium text-gray-500">Live</dt>
          <dd className="mt-1 text-sm text-gray-900">
            <a href={siteUrl} className="inline-flex space-x-1 items-center">
              <GlobeIcon />
              <span>{siteText}</span>
            </a>
          </dd>
        </div>
      )}
    </>
  );
}
