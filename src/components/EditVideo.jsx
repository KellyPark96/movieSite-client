export const EditVideo = ({ video }) => (
  <form method="POST">
    <input
      name="title"
      placeholder="Video Title"
      required
      defaultValue={video.title}
    />
    <input
      name="description"
      placeholder="Description"
      type="text"
      minLength={20}
      required
      defaultValue={video.description}
    />
    <input
      name="hashtags"
      placeholder="Hashtags, separated by comma."
      type="text"
      required
      defaultValue={video.hashtags.join(", ")}
    />
    <input type="submit" value="Save" />
  </form>
);
