import { useState } from 'react'
import { PLACEHOLDER_IMAGE, resolveImage } from '@/utils/image'

/**
 * Responsive, lazy-loaded image that falls back to a local placeholder
 * if the remote image fails. Accepts an Unsplash id or any image path.
 */
export default function SmartImage({
  src,
  alt,
  width = 800,
  height = 600,
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  className,
  ...rest
}) {
  const [failed, setFailed] = useState(false)
  const resolved = failed ? { src: PLACEHOLDER_IMAGE } : resolveImage(src)

  return (
    <img
      src={resolved.src}
      srcSet={resolved.srcSet}
      sizes={resolved.srcSet ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
