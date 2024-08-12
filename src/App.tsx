import './App.css'
import { PostComments } from "./components/PostComments.tsx";


function App() {
  return (
    <>
      <h1>Cool Corporate Blog Post</h1>
      <h2>All your decade-old meme subtitles are belong to us</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu urna est. Etiam fermentum ut erat quis scelerisque. Duis consequat sagittis ultrices. Vestibulum ultrices quam et pharetra dictum. Duis vel mauris vitae ipsum interdum imperdiet sit amet ut dui. Morbi eget tortor ac metus semper sagittis. Donec a blandit massa. Donec eleifend arcu neque. Nunc nec sapien eget sem faucibus rhoncus eget quis augue.</p>

        <p>Nulla id lorem id eros sagittis efficitur nec tincidunt quam. Pellentesque lacinia venenatis congue. Mauris sit amet justo dapibus, ultrices enim vitae, lobortis risus. Proin magna tortor, ornare quis ultrices eget, hendrerit pharetra nibh. Integer lobortis scelerisque mi, in pulvinar erat iaculis sed. Sed varius elementum nunc sed facilisis. Phasellus fringilla sed nisl convallis porta. Integer nulla diam, dapibus ut mollis eu, pellentesque posuere ipsum. Etiam maximus sit amet sem id blandit. Nunc porttitor elementum felis, eget dictum erat congue et. Fusce convallis dignissim neque, at fringilla leo consequat vitae. Etiam finibus, leo vitae ultricies facilisis, libero mi molestie quam, non fermentum enim libero nec diam. Suspendisse vehicula semper interdum. Nunc sed luctus elit. Nunc rhoncus mi nec diam euismod, vitae bibendum magna varius.</p>
        <p>Nothing of substance to see here, how about the comments?</p>

        <PostComments postId={1} />
    </>
  )
}

export default App
