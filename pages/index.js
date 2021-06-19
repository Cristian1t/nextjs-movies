import styled from 'styled-components';
import Image from 'next/image';
import image from '../assets/movie.png';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export default function Home() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div>
        <Title>FIND AND RATE MOVIES</Title>
      </div>
      <Image
        src={image}
        alt="filmimg"
        layout="fixed"
        width={500}
        height={500}
      />
      ;
    </div>
  );
}
