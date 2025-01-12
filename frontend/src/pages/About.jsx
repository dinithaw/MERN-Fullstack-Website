import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div> 

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <b classname='text-gray-800'>Welcome To WARDROBE</b>
              <p>"Welcome to Wardrobe, where fashion meets quality for the entire family. Since our inception, we've been dedicated to offering a carefully curated selection of stylish and high-quality clothing for men, women, and children. Whether you're looking for the latest trends, timeless classics, or wardrobe essentials, we’ve got you covered. Our extensive collection features pieces from trusted brands, ensuring that every purchase is a step toward building a wardrobe that suits your unique style and needs. Explore and find your perfect look today!".</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>" our mission is to provide high-quality, stylish clothing for men, women, and children that empowers personal expression. We are dedicated to offering a diverse selection of fashion at affordable prices, ensuring a seamless shopping experience for every customer."</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We carefully curate and evaluate every product to guarantee it meets our high standards of quality and excellence.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>Our intuitive interface and seamless ordering process make shopping simpler and more convenient than ever.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our dedicated team is always ready to assist you, ensuring your satisfaction remains our highest priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
