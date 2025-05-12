export const SearchPage = ({ videos }) => (
  <>
    <form method="GET" className="search__form">
      <input name="keyword" type="text" placeholder="Search by title" />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </form>
    <div className="video-grid">
      {videos.length ? (
        videos.map((video) => <VideoCard key={video.id} video={video} />)
      ) : (
        <span className="empty__message">No videos found</span>
      )}
    </div>
  </>
);
