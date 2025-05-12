export const WatchVideo = ({ video, loggedInUser }) => (
  <>
    <video src={`/${video.fileUrl}`} controls />
    <div>
      <p>{video.description}</p>
      <small>{video.createdAt}</small>
    </div>
    <div>
      <small>
        Uploaded by <a href={`/users/${video.owner._id}`}>{video.owner.name}</a>
      </small>
    </div>
    {String(video.owner._id) === String(loggedInUser._id) && (
      <>
        <a href={`/${video.id}/edit`}>Edit Video →</a>
        <br />
        <a href={`/${video.id}/delete`}>Delete Video →</a>
      </>
    )}
  </>
);
