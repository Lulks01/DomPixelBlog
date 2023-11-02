'use client'
import Image from 'next/image';
import Logo from '../public/logo.png';
import mockpost from './mocks/posts.json';

export default function Home() {
  const Posts = mockpost

  return (
    <>
        <h1 style={{color: '#1f1f1f', marginTop: '20px', textAlign: "center"}}>Posts Semanais</h1>
      <main>

        {
          Posts.map((item) => (
          <div key={item.id} className='post'>
              <div className='post_img'>
                <Image src={item.foto} alt='foto' className='foto' width={200} height={200}/>
              </div>
            <div className='infos_section'>
              <h1 className='title'>{item.title}</h1>
              <div className='infos'>
                <span className='data'>{item.data}</span>
              </div>
            </div>
              
            {/* <p className='content'>{item.content}</p> */}
          </div>
        ))}
      </main>
    </>
  )
}
