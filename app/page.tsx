'use client'
import Image from 'next/image';
import Logo from '../public/logo.png';
export default function Home() {

  const Posts = [
    {
      id: 1,
      title: 'Lorem Ipsulum Tittle',
      data: '17-10-2023',
      content: 'lorem ipslum lorem ipslumlorem ipslumlorem ipslumlorem ipslumlorem ipslumlorem ipslumlorem ipslumipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum. Quis lectus nulla at volutpat diam ut. Eu augue ut lectus arcu bibendum. Aliquam sem et tortor consequat id porta. Quis blandit turpis cursus in hac habitasse platea. Morbi tristique senectus et netus et. Lacinia quis vel eros donec. Sit amet purus gravida quis blandit turpis. Faucibus a pellentesque sit amet porttitor eget dolor morbi non At quis risus sed vulputate odio ut enim blandit volutpat. At in tellus integer feugiat scelerisque varius morbi enim. Aliquam ultrices sagittis orci a scelerisque. Pellentesque nec nam aliquam sem et. Facilisi etiam dignissim diam quis. Eu non diam phasellus vestibulum lorem. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Felis imperdiet proin fermentum leo vel orci. Nunc non blandit massa enim nec. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Elementum integer enim neque volutpat ac tincidunt vitae semper. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Ultrices eros in cursus turpis massa tincidunt dui. At varius vel pharetra vel turpis nunc eget lorem. Amet tellus cras adipiscing enim eu turpis egestas. Non tellus orci ac auctor augue mauris augue neque. Tellus mauris a diam maecenas sed enim ut. Nullam ac tortor vitae purus faucibu'
    },
    {
      id: 2,
      title: 'Titulo2',
      data: '23-10-2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum. Quis lectus nulla at volutpat diam ut. Eu augue ut lectus arcu bibendum. Aliquam sem et tortor consequat id porta. Quis blandit turpis cursus in hac habitasse platea. Morbi tristique senectus et netus et. Lacinia quis vel eros donec. Sit amet purus gravida quis blandit turpis. Faucibus a pellentesque sit amet porttitor eget dolor morbi non At quis risus sed vulputate odio ut enim blandit volutpat. At in tellus integer feugiat scelerisque varius morbi enim. Aliquam ultrices sagittis orci a scelerisque. Pellentesque nec nam aliquam sem et. Facilisi etiam dignissim diam quis. Eu non diam phasellus vestibulum lorem. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Felis imperdiet proin fermentum leo vel orci. Nunc non blandit massa enim nec. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Elementum integer enim neque volutpat ac tincidunt vitae semper. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Ultrices eros in cursus turpis massa tincidunt dui. At varius vel pharetra vel turpis nunc eget lorem. Amet tellus cras adipiscing enim eu turpis egestas. Non tellus orci ac auctor augue mauris augue neque. Tellus mauris a diam maecenas sed enim ut. Nullam ac tortor vitae purus faucibus'
    }
  ]
  
  return (
    <>
      <header>
          <a href="#" id='home'>Home</a>
          <a href="#">About</a>
      </header>
      <main>
        <h1 style={{color: '#1f1f1f', marginTop: '20px'}}>Posts Semanais</h1>

        {Posts.map((item) => (
          <div key={item.id} className='post'>
            <div className='infos'>
              <span className='id'>{item.id}</span>
              <span className='data'>{item.data}</span>
            </div>
            <h1 className='title'>{item.title}</h1>
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
