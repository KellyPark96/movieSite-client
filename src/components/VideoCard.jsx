export const VideoCard = ({ video }) => (
  <a href={`/videos/${video.id}`} className="video-mixin">
    <div className="video-mixin__thumb" />
    <div className="video-mixin__data">
      <span className="video-mixin__title">{video.title}</span>
      <div className="video-mixin__meta">
        <span>{video.owner.name} • </span>
        <span>{video.meta.views} 회</span>
      </div>
    </div>
  </a>
);
