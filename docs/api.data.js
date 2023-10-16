export default {
  watch: ['./api/*.md'],
  load(watchedFiles) {
    // watchedFiles will be an array of absolute paths of the matched files.
    // generate an array of blog post metadata that can be used to render
    // a list in the theme layout

    // first regex extracts the filename from the path, second extracts the name without extension
    return watchedFiles.map((f) => f.replace(/^.*[\/]/, '').replace(/\.[^/.]+$/, ""));
  }
}