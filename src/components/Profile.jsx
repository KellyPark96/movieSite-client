export const Profile = ({ user }) => (
  <>
    <div className="profile__data">
      <img src={user.avatarUrl} alt="avatar" className="avatar" />
      <h3>{user.name}</h3>
    </div>
    <div className="video-grid">
      {user.videos.length ? (
        user.videos.map((video) => <VideoCard key={video.id} video={video} />)
      ) : (
        <span className="empty__message">No videos found</span>
      )}
    </div>
  </>
);
