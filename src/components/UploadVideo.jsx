export const UploadVideo = () => (
  <form method="POST" encType="multipart/form-data">
    <label htmlFor="video">Video File</label>
    <input type="file" id="video" name="video" accept="video/*" required />
    <input name="title" placeholder="Title" maxLength={80} required />
    <input
      name="description"
      placeholder="Description"
      minLength={20}
      required
    />
    <input
      name="hashtags"
      placeholder="Hashtags, separated by comma."
      required
    />
    <input type="submit" value="Upload Video" />
  </form>
);
