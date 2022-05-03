/* eslint-disable jsx-a11y/iframe-has-title */
//Interface
interface Props {
  source: string;
  w: number;
  h: number;
}
//Video
export const Video = ({source, w, h }:Props)=>{
  return (
  <>
      <iframe src={source} height={h} width={w} />
  </>
  )
}