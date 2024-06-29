import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <div>
        <Image
          className="rounded-full"
          src={
            process.env.NEXT_PUBLIC_PROFILE_IMG ||
            'https://github.com/ShanelkaPramuditha.png'
          }
          alt="Avatar"
          width={220}
          height={220}
          priority
        />
      </div>
    </main>
  );
}
