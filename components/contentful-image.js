import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
/* eslint-disable */
const ContentfulImage = (props) => {
  return <Image loader={contentfulLoader} {...props} />
}
/* eslint-enable */
export default ContentfulImage
