import FadeIn from './FadeIn'

export default function FilmEntry({ title, role, description, video, delay = 0 }) {
  return (
    <FadeIn delay={delay}>
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start mb-16 pt-12 border-t border-border">
        <div className="flex-1">
          <h3 className="font-serif text-[2rem] text-ink leading-tight mb-2">{title}</h3>
          <div className="mono-label mb-5">
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
              className="w-full aspect-video border border-border shadow-[0_12px_30px_rgba(0,46,9,0.12)]"
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
