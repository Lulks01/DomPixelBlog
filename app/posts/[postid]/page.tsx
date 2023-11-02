import mockpost from '../../mocks/posts.json';
import Image from 'next/image';

import './post_individual.css';

export default function Post({params} : {params: {postid : number}}) {
    const Posts = mockpost[(params.postid) -1 ];

    return(
        <div className='individual_post'>
          <div className='post_header'>
            <h1>{Posts.title}</h1>
            <Image src={Posts.foto} alt='foto' className='foto' width={200} height={200}/>
            <div className='post_infos'>
                <Image src={Posts.perfilfoto} width={50} height={50} className='profilepic' alt='foto'/>
                <div className='profile-info'>
                    <h2>{Posts.perfilnome}</h2>
                    <p>2 Dias atrás</p>
                </div>
                <h3 className='postid'>Post ID: {Posts.id}</h3>
            </div>
          </div>
          <div className='content'>
            <h1>{Posts.content.title}</h1>
            <p>{Posts.content.section1}</p>
          </div>
        </div>
    )
}