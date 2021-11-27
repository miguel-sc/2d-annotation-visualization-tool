# 2D annotation visualization tool

## Getting started

1. add the `data` folder to `public/data` with the `annotations.json` and
   `images` in it.
2. run `npm install` to install the dependencies
3. run `npm start` and visit [http://localhost:3000](http://localhost:3000) to
   view it in the browser

## Notes

I created a react app with
[Create React App](https://github.com/facebook/create-react-app), because that's
the framework I'm most familiar with. I could have also used a different
framework, like Vue, but it would have taken me a bit more time. For the purpose
of this challenge, I decided not to use any external libraries and just use the
tools that React offers. I invested my time into implementing a good UX, but
ugly UI because I thought the design is less important. It was a really fun
challenge and I like that it's related to what you are building at work.

### What I implemented

I prioritized implementing the requirements in the simplest way I could come up
with. I added the assets to the public directory, fetched the annotations on
mount, transformed them into a list of frames, rendered the list with images and
bounding boxes on top of them for the annotations. That took me about 30
minutes. I spent the rest of my time refactoring the code and improving the UX.
I tried to stay in the 4 hour window. Since the data is from a video, I decided
to only show one image at a time and add a range slider with button controls to
navigate them. I'm loading all images at the same time for simplicity, we would
need to change that to improve the website performance.

### If I had more time

Here are a few suggestions of how we could improve the UX:

- add a play/pause button to play the frames like a video. we could also add
  options to adjust the frame rate for example.
- show annotation meta data on hovering the bounding box. Since the boxes can
  overlap, I would show the annotation who's center is closest to the mouse
  pointer. If that is not enough, we could also show the list of annotations for
  users to navigate through.
- possibility to only show one annotation at a time and hide all the other
  bounding boxes. This can be done with the `temporalId` property, to show the
  same annotation across all frames.
- add a shareable link for the current frame
- implement zoom and panning for the images
- resize frames when resizing window

And here are some suggestions for improving the code:

- transform the annotations data into our own datatype right after fetch. This
  makes the data more convenient for us to work with.
- replace the hardcoded image size with the natural image size from the img
  `onLoad` event
- Add some tests. I think we can test in jest that we are fetching the data and
  rendering the correct list of frames with annotations. We could use
  [Mock Service Worker](https://mswjs.io/) to mock the http requests. To verify
  that the bounding boxes look right can be done with a visual screenshot
  testing tool.
- I rendered `img` tags with `div` tags in front of them, because this was the
  simplest solution for the requirements. I think if we need more fancy features
  in the future, we could replace those tags with a WebGL renderer.

### Enterprise ready design

Here is a list of things that we would need to implement:

- The annotations and images are already loaded from a web service. Currently it
  is fetching it from the same host, but we can change the url to any other
  server and it will work. I would make this configurable with an environment
  variable. In order to be able to display different videos, we could take a
  video id as a url parameter, or add a separate page to select a video.
- For video clips with thousands of frames: We would need to optimize our
  `FrameViewer` to not load thousands of frames at the same time. We could do it
  like in videos, load the current frame first and then the following frames. If
  the `annotation.json` file gets too big, we could send it in chunks.
- For zooming and panning images: this can be done with css transforms
  (translate and scale). But if we already plan to add more advanced feature,
  like for example image filters, it could make more sense for us to use a WebGL
  renderer instead of HTML tags with CSS.
