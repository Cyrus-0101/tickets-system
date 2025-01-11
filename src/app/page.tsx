import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-matrix-img bg-cover bg-center bg-no-repeat">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        {/* Business Information */}
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1>Stevan&apos;s Auto Parts</h1>
          <address>
            Kayole Junction <br />
            Embakasi, Nairobi, 00101
          </address>
          <p>Open Monday to Saturday: 8 AM to 6 PM</p>
          <Link
            href='tel:+254702609281'
            className='hover:underline'
          >
            +254 702 609 281
          </Link>
        </div>
      </main>
    </div>
  );
}
