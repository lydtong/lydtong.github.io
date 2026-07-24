import FadeIn from './FadeIn'

export default function FilmEntry({ title, role, description, video, delay = 0 }) {
  return (
    <FadeIn delay={delay}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start mb-16 pt-12 border-t border-border">
        <div className="flex-1">
          <h3 className="text-[1.7rem] text-dark-green leading-tight mb-1">{title}</h3>
          <div className="font-mono text-muted text-[0.9rem] tracking-wide mb-5">
            {role}
          </div>
          {typeof description === 'string' ? (
            <p className="text-body text-base leading-relaxed">{description}</p>
          ) : (
            description
          )}
        </div>
        <div className="flex-[1.3] w-full">
          {video ? (
            <iframe
              src={video}
              className="w-full aspect-video border-none shadow-[0_4px_20px_rgba(0,46,9,0.15)]"
              allowFullScreen
              title={title}
            />
          ) : (
            <div className="w-full aspect-video bg-card-bg border border-dashed border-dark-green/20 flex items-center justify-center">
              <p className="text-muted text-[0.9rem]">YouTube embed coming soon</p>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  )
}
