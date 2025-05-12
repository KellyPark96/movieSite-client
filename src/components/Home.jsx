export const Home = ({ videos }) => (
  <div className="video-grid">
    {videos.length ? (
      videos.map((video) => <VideoCard key={video.id} video={video} />)
    ) : (
      <span className="empty__message">No videos found</span>
    )}
  </div>
);
