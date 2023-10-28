'use client'
import Image from 'next/image';
import Logo from '../public/logo.png';
import mockpost from './mocks/posts.json';

export default function Home() {
  const Posts = mockpost


  return (
    <>
      <main>
        <h1 style={{color: '#1f1f1f', marginTop: '20px'}}>Posts Semanais</h1>

        {
          Posts.map((item) => (
          <div key={item.id} className='post'>
            <div className='infos'>
              <span className='id'>{item.id}</span>
              <span className='data'>{item.data}</span>
            </div>
            <h1 className='title'>{item.title}</h1>
              <Image src={item.foto} alt='foto' className='foto' width={200} height={200}/>
              
            <p className='content'>{item.content}</p>
          </div>
        ))}
      </main>
      <footer>
        Desenvolvido por: <a href="#">Lulks</a>
      </footer>
    </>
  )
}
