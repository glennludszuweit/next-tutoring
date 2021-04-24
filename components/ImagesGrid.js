import Image from 'next/image';
import Link from 'next/link';

export default function ImagesGrid({ imageLink, imageId }) {
  return (
    <div style={{ margin: '10px' }}>
      <Link as={`/image/${imageId}`} href='/image/[id]'>
        <a>
          <Image width={400} height={200} objectFit={'cover'} src={imageLink} />
        </a>
      </Link>
    </div>
  );
}
