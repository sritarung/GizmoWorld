import React from 'react'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'

const FooterBanner = ({footerBanner:{discount, saleTime, largeText1, largeText2, smallText, midText, product, buttonText, image, desc }}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlForImage(image)} className='footer-banner-image'/>
      </div>
    </div>
  )
}

export default FooterBanner